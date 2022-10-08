import Node from "./Node";

export default class AssignNode extends Node {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  accept(context, visitor) {
    visitor.visitAssign(context, this);
  }
}