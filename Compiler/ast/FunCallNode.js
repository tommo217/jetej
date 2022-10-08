import Node from "./Node";

export default class FunCallNode extends Node {
  constructor(name, params) {
    this.name = name;
    this.params = params;
  }

  accept(context, visitor) {
    visitor.visitFunCall(context, this);
  }
}