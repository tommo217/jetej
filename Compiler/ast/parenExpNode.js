import Node from "./Node.js";

export default class parenExpNode extends Node {
  constructor(lp, rp, expression) {
    super();
    this.lp = lp;
    this.rp = rp;
    this.expression = expression;
  }

  accept(context, visitor) {
    return visitor.visitOperator(context, this);
  }
}