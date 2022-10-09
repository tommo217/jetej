import Node from "./Node";

export default class LineNode extends Node {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  accept(context, visitor) {
    return visitor.visitAssign(context, this)
  }
}