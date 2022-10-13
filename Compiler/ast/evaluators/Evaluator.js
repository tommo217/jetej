
export default class Evaluator {
  // identifiers
  identifiers = new Set();
  // function signatures
  functionSigs = new Map()
  .set('basicControls', new Set([0]))
  .set('spawn', new Set([3]))
  .set('disappear', new Set([1]))
  .set('random', new Set([2])); 

  gameScripts = ``;

  visitProgram(errors, programNode) {
    console.log(`Visiting Program Node { \nblocks: [\n`);
    let script = ``;
    for (const block of programNode.blocks) {
      const nextBlock = block.accept(errors, this);
      if (errors.length) { return; }
      script += nextBlock;
    }
    script += this.gameScripts;
    console.log(`\n]\n}`)
    return script;
  };

  visitGame(errors, gameNode) {
    // FEATURE: require engine code that edits bg, height, width, and score
    
    let initCalls = ``;
    for (const fnCall of gameNode.init) {
      initCalls += `${fnCall.accept(errors, this)};`;
      if (errors.length) { return; }
    }

    this.gameScripts = `
    ${initCalls}
    `
    return ``;
  }

  visitObject(errors, objNode) {

    // Constructor params
    let name = objNode.name; // TODO: check for nulls and invalids (existing names, etc)
    let image = objNode.image; // TODO: check for nulls and invalids
    let sizeX = objNode.width !== null ? objNode.width.accept(errors, this) : 50;
    let sizeY = objNode.height !== null ? objNode.height.accept(errors, this) : 50;
    let mass = objNode.mass !== null ? objNode.mass : 1;
    let bounce = objNode.bounce !== null ? objNode.bounce : 0;
    let collision = objNode.isCollision !== null ? objNode.isCollision : true;

    // Additional fields
    let speed_x = objNode.speed_x ? `this.speed_x = ${objNode.speed_x.accept(errors, this)};` : ``;
    let speed_y = objNode.speed_y ? `this.speed_y = ${objNode.speed_y.accept(errors, this)};` : ``;
    let life = objNode.life ? `this.life = ${objNode.life};` : ``;

    if (errors.length) { return; }

    // Update
    let fnCalls = ``;
    for (const funCall of objNode.update) {
      fnCalls += `${funCall.accept(errors, this)};`;
      if (errors.length) { return; }
    }

    // TODO: add name to identifiers for static check
    const script = `
    class ${name} extends GameObject {
      constructor(x, y) {
          super("${name}",
              getImage("${image}"),
              x, y, ${sizeX}, ${sizeY}, ${mass}, 0, 0, ${bounce}, ${collision});
          ${life} ${speed_x} ${speed_y}
      }
  
      update() {
          ${fnCalls}
      }
    }`
    return script; 
  }

  visitEvent(errors, eventNode) {

    // TODO: static check for the existence of identifiers
    // Actions
    let fnCalls = ``;
    for (const action of eventNode.actions) {
      fnCalls += `${action.accept(errors, this)};`;
      if (errors.length) { return; }
    }

    const script = `
    eventMap.set("${eventNode.obj1}|${eventNode.obj2}", (object1, object2) => {
      ${fnCalls}
    });`

    return script;
  }

  visitFunc(errors, fnNode) {

    // TOTO: static check: add params to identifiers
    const body = fnNode.body.accept(errors, this);
    if (errors.length) { return; }

    const script = `
    function ${fnNode.name}(${fnNode.params}) {
      ${body}
    }`
    // TOTO: static check: remove params from identifiers
    return script;
  }

  visitBlock(errors, blockNode) {
    let lines = ``;
    for (const line of blockNode.lines) {
      const script = line.accept(errors, this);
      if (errors.length) { return; }
      lines += `${script}; `
    }
    return lines; 
  }

  visitAssign(errors, assignNode) {
    // TODO: static check for the existence of identifier
    const value = assignNode.value.accept(errors, this);
    if (errors.length) { return; }

    return `${assignNode.id} = ${value}`
  }

  visitIfNode(errors, ifNode) {
    const condition = ifNode.condition.accept(errors, this);
    const ifTrue = ifNode.ifTrue.accept(errors, this);
    const ifFalse = ifNode.ifFalse ? ifNode.ifFalse.accept(errors, this) : ``;
    if (errors.length) { return; }

    return `if (${condition}) {${ifTrue}} else {${ifFalse}}`
  }

  visitExp(errors, expNode) {
    const exp = expNode.exp;
    if (typeof exp == 'number') {
      return exp.toString();
    }
    else if (typeof exp == 'string') {
      // FIXME: IDENTIFIER or object_attribute or constant
      // TODO: static check: validity of identifier & obj_attribute
      return exp;
    }
    else if (typeof exp == 'boolean') {
      return exp ? 'true' : 'false'
    }

    return exp.accept(errors, this);
  }

  visitNegativeOp(errors, negativeOp) {
    const exp = negativeOp.exp.accept(errors, this);
    if (errors.length) { return; }
    return `-${exp}`;
  }

  visitNotOp(errors, notOP) {
    const exp = notOP.exp.accept(errors, this);
    if (errors.length) { return; }
    return `!${exp}`;
  }

  visitParenExpression(errrors, parenNode) {
    const exp = notOP.exp.accept(errors, this);
    if (errors.length) { return; }
    return `(${exp})`;
  }

  visitOperator(errors, opNode) {
    const lExp = opNode.lExp.accept(errors, this); 
    const rExp = opNode.rExp.accept(errors, this); 
    if (errors.length) { return; }

    return `${lExp} ${opNode.operator.toString()} ${rExp}`
  }

  visitFunCall(errors, funCall) {
    // Static checks 
    // TODO: move to static checker
    // if (!this.functionSigs.has(funCall.name)) {
    //   errors.push(`${funCall.name} is not a valid function. `);
    //   return; 
    // }
    // if (!this.functionSigs.get(funCall.name).has(funCall.params.length)) {
    //   errors.push(`Argument count mismatch for function ${funCall.name}. `)
    //   return; 
    // }
    
    const params = [];
    for (const param of funCall.params) {
      const str = param.accept(errors, this);
      if (errors.length) { return; }
      params.push(str);
    }
    return `${funCall.name}(${this.paramMap(funCall.name, params)})`
  }

  // Helper, map parameter to actual javascript parameters
  paramMap(fun, p) {
    switch(fun){
      // write special cases here
      case 'basicControls':
        return ['this']
      default:
        return p; 
    }
  }

}