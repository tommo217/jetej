import Node from "./Node";

export default class OperatorNode extends Node {
  constructor(lExp, rExp, operator) {
    this.lExp = lExp;
    this.rExp = rExp;
    this.operator = operator;
  }

  accept(context, visitor) {
    return visitor.visitOperator(context, this);
  }
}