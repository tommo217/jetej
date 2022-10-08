import Node from "./Node";

export default class ProgramNode extends Node {
  constructor(blocks) {
    this.blocks = blocks; 
  }

  accept(context, visitor) {
    visitor.visitProgram(context, this);
  }
}