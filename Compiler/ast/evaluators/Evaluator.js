import FunctionNode from "../FunctionNode.js";
import ObjectNode from "../ObjectNode.js";

export default class Evaluator {
  // identifiers
  identifiers = new Set();
  objectNames = new Set();
  // function signatures
  functionSigs = new Map()
  .set('positionControls', new Set([0]))
  .set('velocityControls', new Set([0]))
  .set('create', new Set([3]))
  .set('destroy', new Set([1]))
  .set('delete', new Set([1]))
  .set('random', new Set([2]))
  .set('increaseScore', new Set([1]))
  .set('winGame', new Set([0]))
  .set('loseGame', new Set([0]));

  gameVariables = new Set()
  .add('score');

  objectVariables = new Set()
  .add('life')
  .add('speed_x')
  .add('speed_y');

  gameScripts = ``;

  visitProgram(errors, programNode) {
    console.log(`Visiting Program Node { \nblocks: [\n`);
    let script = ``;
    for (const block of programNode.blocks) {
      this.setDefinedVariables(errors, block);
      if (errors.length) { return; }
    }
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
    const background = gameNode.background !== null ? `applyBackground("${gameNode.background}");` : ``;

    const score = gameNode.score !== null ? `initializeVariable("score", ${gameNode.score}); `: ``;

    let initCalls = ``;
    for (const fnCall of gameNode.init) {
      initCalls += `${fnCall.accept(errors, this)};`;
      if (errors.length) {errors.push(`At Game definition.`); return; }
    }

    this.gameScripts = 
    `
    ${initCalls} ${background} ${score}
    `
    return ``;
  }

  visitObject(errors, objNode) {

    // Constructor params
    let name = objNode.name;
    let image = objNode.image;
    let sizeX = objNode.width !== null ? objNode.width.accept(errors, this) : 30;
    let sizeY = objNode.height !== null ? objNode.height.accept(errors, this) : 30;
    let mass = objNode.mass !== null ? objNode.mass.accept(errors, this) : 1;
    let vx = objNode.speed_x ? `${objNode.speed_x.accept(errors, this)}` : `0`;
    let vy = objNode.speed_y ? `${objNode.speed_y.accept(errors, this)}` : `0`;
    let bounce = objNode.bounce !== null ? objNode.bounce.accept(errors, this) / 100.0 : 0;
    let collision = objNode.isCollision !== null ? objNode.isCollision : true;

    // Additional fields
    let life = objNode.life ? `this.life = ${objNode.life};` : ``;
    let speed_x = objNode.speed_x ? `this.speed_x = ${objNode.speed_x.accept(errors, this)}; ` : ``;
    let speed_y = objNode.speed_y ? `this.speed_y = ${objNode.speed_y.accept(errors, this)}; ` : ``;

    if (errors.length) {errors.push(`At Object ${objNode.name} definition.`); return; }

    // Update
    let fnCalls = ``;
    for (const funCall of objNode.update) {
      fnCalls += `${funCall.accept(errors, this)};`;
      if (errors.length) {errors.push(`At Object ${objNode.name} definition.`);  return; }
    }
    const script = `
    class ${name} extends GameObject {
      constructor(x, y) {
          super("${name}",
              getImage("${image}"),
              x, y, ${sizeX}, ${sizeY}, ${mass}, ${vx}, ${vy}, ${bounce}, ${collision});
          ${life} ${speed_x} ${speed_y}
      }
  
      update() {
          ${fnCalls}
      }
    }`
    return script; 
  }

  visitEvent(errors, eventNode) {
    this.identifiers.add('object1').add('object2');
    let fnCalls = ``;
    for (const action of eventNode.actions) {
      fnCalls += `${action.accept(errors, this)};`;
      if (errors.length) {errors.push(`At Event ${eventNode.obj1}|${eventNode.obj2} definition.`); return; }
    }

    const script = `
    eventMap.set("${eventNode.obj1}|${eventNode.obj2}", (object1, object2) => {
      ${fnCalls}
    });`
    this.identifiers.clear();
    return script;
  }

  visitFunc(errors, fnNode) {
    for (const param of fnNode.params) {
      this.identifiers.add(param);
    }
    const body = fnNode.body.accept(errors, this);
    if (errors.length) {errors.push(`At Function ${fnNode.name} definition.`); return; }
    const script = `
    function ${fnNode.name}(${fnNode.params}) {
      ${body}
    }`
    this.identifiers.clear();
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
    if (typeof assignNode.id == 'string' && !this.identifiers.has(assignNode.id)) {
      errors.push(`${assignNode.id} is an invalid identifier to assign.`);
      return;
    }
    const id = (
      typeof assignNode.id == 'string' ?
      assignNode.id :
      assignNode.id.accept(errors, this)
    ); 
    const value = assignNode.value.accept(errors, this);
    if (errors.length) { return; }

    return `${id} = ${value}`
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
      if (!this.identifiers.has(exp) && !this.objectNames.has(exp)) {
        errors.push(`${exp} is an invalid identifier or an object name as an expression.`);
        return;
      }
      return exp;
    }
    else if (typeof exp == 'boolean') {
      return exp ? 'true' : 'false'
    }

    return exp.accept(errors, this);
  }

  visitAttribute(errors, attrNode) {
    if (attrNode.className == 'game') {
      if (!this.gameVariables.has(attrNode.field)) {
        errors.push(`${attrNode.field} is an invalid property for game.`);
        return;
      }
      return `gameVariables["${attrNode.field}"]`;
    }
    if (!this.identifiers.has(attrNode.className)) {
      errors.push(`${attrNode.className} is an invalid identifier for an attribute.`);
      return;
    }
    if (!this.objectVariables.has(attrNode.field)) {
      errors.push(`${attrNode.field} is an invalid property for object.`);
      return;
    }
    if (attrNode.field == 'speed_x') {
      return `${attrNode.className}.hb.vx`;
    } else if (attrNode.field == 'speed_y'){
      return `${attrNode.className}.hb.vy`;
    } else {
      return `${attrNode.className}.${attrNode.field}`;
    }
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
    const exp = parenNode.exp.accept(errors, this);
    if (errors.length) { return; }
    return `(${exp})`;
  }

  visitOperator(errors, opNode) {
    const lExp = (
      typeof opNode.lExp == 'string' ?
      opNode.lExp :
      opNode.lExp.accept(errors, this)
    ); 
    const rExp = (
      typeof opNode.rExp == 'string' ?
      opNode.rExp :
      opNode.rExp.accept(errors, this)
    ); 
    if (errors.length) { return; }
    return `${lExp} ${opNode.operator.toString()} ${rExp}`
  }

  visitFunCall(errors, funCall) {
    if (!this.functionSigs.has(funCall.name)) {
      errors.push(`${funCall.name} is not a valid function. `);
      return;
    }
    if (!this.functionSigs.get(funCall.name).has(funCall.params.length)) {
      errors.push(`Argument count mismatch for function ${funCall.name}. `)
      return;
    }
    const params = [];
    for (const param of funCall.params) {
      const str = param.accept(errors, this);
      if (errors.length) { return; }
      params.push(str);
    }
    return `${this.funCallMap(funCall.name)}(${this.paramMap(funCall.name, params)})`
  }

  // Helper, map parameter to actual javascript parameters
  paramMap(fun, p) {
    switch(fun){
      // write special cases here
      case 'positionControls':
        return ['this'];
      case 'velocityControls':
        return ['this'];
      case 'create':
        return [`"${p[0]}"`].concat(p.slice(1))
      case 'increaseScore':
        return [`"score"`, p[0]]
      default:
        return p; 
    }
  }

  // Helper, map JETEJ function names to in-engine function names
  funCallMap(fun) {
    switch(fun) {
      case 'delete': 
      case 'destroy': 
        return `deleteGO`;
      case 'increaseScore':
        return `updateVariableBy`;
      case 'create':
        return `spawn`;
      case 'positionControls':
        return `basicControls`;
      case 'velocityControls':
        return `directionControls`;
      default: 
        return fun;
    }
  }

  setDefinedVariables(errors, block) {
    if (block instanceof FunctionNode) {
       if (this.functionSigs.has(block.name)) {
          if (this.functionSigs.get(block.name).has(block.params.length)) {
             errors.push(`the function ${block.name} with ${block.params.length} parameters was already defined.`)
             return;
          } else {this.functionSigs.get(block.name).add(block.params.length);}
       } else {this.functionSigs.set(block.name, new Set([block.params.length]));}
    } else if (block instanceof ObjectNode) {
        if (this.objectNames.has(block.name)) {
          errors.push(`the object ${block.name} was already defined.`);
          return;
        } else {this.objectNames.add(block.name);}
    }
  }
}