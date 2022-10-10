import Node from "./Node.js";

export default class FunctionNode extends Node {
  constructor(name, params, body) {
    super();
    this.name = name;
    this.params = params;
    this.body = body;
  }

  accept(context, visitor) {
    return visitor.visitFunc(context, this);
  }
}