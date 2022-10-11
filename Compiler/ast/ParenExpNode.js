import Node from "./Node.js";

export default class parenExpNode extends Node {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  accept(context, visitor) {
    return visitor.visitParenExpression(context, this);
  }
}