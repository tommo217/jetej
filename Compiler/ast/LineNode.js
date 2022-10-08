import Node from "./Node";

export default class LineNode extends Node {
  constructor(line) {
    this.line = line;
  }

  accept(context, visitor) {
    if(line instanceof StatementNode) {
        visitor.visitStatement(context, line)
    }
    if(line instanceof IfNode) {
        visitor.visitIfNode(context, line)
    }
  }
}