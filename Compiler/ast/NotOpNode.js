import Node from "./Node.js";

export default class NotOpNode extends Node {
  constructor(exp) {
    super();

    this.exp = exp;
  }

  accept(context, visitor) {
    return visitor.visitNotOp(context, this);
  }
}