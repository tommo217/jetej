import Node from "./Node.js";

export default class FunCallNode extends Node {
  constructor(name, params) {
    super();
    this.name = name;
    this.params = params;
  }

  accept(context, visitor) {
    return visitor.visitFunCall(context, this);
  }
}