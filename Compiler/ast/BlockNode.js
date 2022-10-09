import Node from "./Node";

export default class BlockNode extends Node {
  constructor(lines) {
    this.lines = lines;
  }

  accept(context, visitor) {
    return visitor.visitBlock(context, this);
  }
}