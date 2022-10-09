import Node from "./Node";

export default class ParenNode extends Node {
  constructor(exp) {
    this.exp = exp;
  }

  accept(context, visitor) {
    return visitor.visitParen(context, this);
  }
}