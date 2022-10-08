import Node from "./Node";

export default class NegativeOpNode extends Node {
  constructor(exp) {
    this.exp = exp;
  }

  accept(context, visitor) {
    visitor.visitNegativeOp(context, this);
  }
}