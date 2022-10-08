export default class JetejVisitor {

  // use function name to switch method instead of type overloads
  visitProgram(context, programNode) {};

  visitGame(context, gameNode) {};

  visitObject(context, objectNode) {}; 

  visitEvent(context, eventNode) {}; 

  visitFunc(context, funcNode) {}; 

  // TODO: do we need to create a distinct keyword for each built-in property? 
  visit(context, node) {}; 
}