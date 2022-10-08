import Node from "./Node";

export default class GameNode extends Node {
  constructor(nodes) {
    this.nodes = nodes; 
  }

  accept(context, visitor) {
    visitor.visitGame(context, this);
  }
}