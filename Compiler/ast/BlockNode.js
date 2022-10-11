import Node from "./Node.js";

export default class BlockNode extends Node {
  constructor(lines) {
    super();
    this.lines = lines;
  }

  accept(context, visitor) {
    return visitor.visitBlock(context, this);
  }
}