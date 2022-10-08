import Node from "./Node";

export default class FunctionNode extends Node {
  constructor(name, params, body) {
    this.name = name;
    this.params = params;
    this.body = body;
  }

  accept(context, visitor) {
    visitor.visitFunc(context, this);
  }
}