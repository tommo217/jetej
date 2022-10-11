import Node from "./Node.js";

export default class AttributeNode extends Node {
  constructor(className, field) {
     super();
    this.className = className;
    this.field = field;
  }

  accept(context, visitor) {
    return visitor.visitAttribute(context, this);
  }
}