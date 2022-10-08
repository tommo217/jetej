import Node from "./Node";

export default class AttributeNode extends Node {
  constructor(class, field) {
    this.class = class;
    this.field = field;
  }

  accept(context, visitor) {
    visitor.visitAttribute(context, this);
  }
}