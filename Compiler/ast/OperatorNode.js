import Node from "./Node.js";

export default class OperatorNode extends Node {
  constructor(lExp, rExp, operator) {
    super();
    this.lExp = lExp;
    this.rExp = rExp;
    this.operator = operator;
  }

  accept(context, visitor) {
    return visitor.visitOperator(context, this);
  }
}