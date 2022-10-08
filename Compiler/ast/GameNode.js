import Node from "./Node";

export default class GameNode extends Node {
  constructor(background, height, width, score, init) {
    this.background = background;
    this.height = height;
    this.width = width;
    this.score = score;
    this.init = init;
  }

  accept(context, visitor) {
    visitor.visitGame(context, this);
  }
}