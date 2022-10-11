import Node from "./Node.js";

export default class ProgramNode extends Node {
  constructor(blocks) {
    super();
    this.blocks = blocks; 
  }

  accept(context, visitor) {
    return visitor.visitProgram(context, this);
  }
}