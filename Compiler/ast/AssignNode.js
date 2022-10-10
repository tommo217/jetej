import Node from "./Node.js";

export default class LineNode extends Node {
  constructor(id, value) {
    super();
    this.id = id;
    this.value = value;
  }

  accept(context, visitor) {
    return visitor.visitAssign(context, this)
  }
}