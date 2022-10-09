import Node from "./Node";

export default class StatementNode extends Node {
  constructor(statement) {
    this.statement = statement;
  }

  accept(context, visitor) {
    return visitor.visitStatement(context, this);
  }
}