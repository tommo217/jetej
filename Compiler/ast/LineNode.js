import Node from "./Node.js";

export default class LineNode extends Node {
  constructor(line) {
     super();
     this.line = line;
  }

  accept(context, visitor) {
    return visitor.visitLine(context, this)
  }
}