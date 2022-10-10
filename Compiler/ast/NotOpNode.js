import Node from "./Node.js";

export default class NotOpNode extends Node {
  constructor(not,exp) {
    super();
    this.not = not;
    this.exp = exp;
  }

  accept(context, visitor) {
    return visitor.visitNotOp(context, this);
  }
}