import Node from "./Node";

export default class NegativeOpNode extends Node {
  constructor(exp) {
    this.exp = exp;
  }

  accept(context, visitor) {
    return visitor.visitNegativeOp(context, this);
  }
}