import Node from "./Node";

export default class LineNode extends Node {
  constructor(line) {
    this.line = line;
  }

  accept(context, visitor) {
    return visitor.visitLine(context, this)
  }
}