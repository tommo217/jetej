import Node from "./Node";

export default class StatementNode extends Node {
  constructor(statement) {
    this.statement = statement;
  }

  accept(context, visitor) {
    if(line instanceof AssignNode) {
        visitor.visitAssign(context, statement)
    }
    if(line instanceof FunCallNode) {
        visitor.visitFunCall(context, statement)
    }
  }
}