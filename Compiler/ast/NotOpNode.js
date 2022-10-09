import Node from "./Node";

export default class NotOpNode extends Node {
  constructor(exp) {
    this.exp = exp;
  }

  accept(context, visitor) {
    return visitor.visitNotOp(context, this);
  }
}