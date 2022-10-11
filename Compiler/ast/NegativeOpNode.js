import Node from "./Node.js";

export default class NegativeOpNode extends Node {
  constructor(negative,exp) {
    super();
    this.negative = negative;
    this.exp = exp;
  }

  accept(context, visitor) {
    return visitor.visitNegativeOp(context, this);
  }
}