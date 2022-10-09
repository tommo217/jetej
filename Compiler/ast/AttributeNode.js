import Node from "./Node";

export default class AttributeNode extends Node {
  constructor(className, field) {
    this.className = className;
    this.field = field;
  }

  accept(context, visitor) {
    return visitor.visitAttribute(context, this);
  }
}