import Node from "./Node";

export default class IfNode extends Node {
  constructor(condition, ifTrue, ifFalse) {
    this.condition = condition;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
  }

  accept(context, visitor) {
    visitor.visitIfNode(context, this);
  }
}