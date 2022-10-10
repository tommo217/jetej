import Node from "./Node.js";

export default class IfNode extends Node {
  constructor(condition, ifTrue, ifFalse) {
    super();
    this.condition = condition;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
  }

  accept(context, visitor) {
    return visitor.visitIfNode(context, this);
  }
}