import Node from "./Node.js";

export default class EventNode extends Node {
  constructor(obj1, obj2, actions) {
    super();
    this.obj1 = obj1;
    this.obj2 = obj2;
    this.actions = actions;
  }

  accept(context, visitor) {
    return visitor.visitEvent(context, this);
  }
}