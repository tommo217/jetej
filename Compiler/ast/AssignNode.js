import Node from "./Node.js";

export default class AssignNode extends Node {
  constructor(id, value) {
    super();
    this.id = id;
    this.value = value;
  }

  accept(context, visitor) {
    return visitor.visitAssign(context, this)
  }
}