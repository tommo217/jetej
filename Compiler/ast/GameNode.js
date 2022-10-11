import Node from "./Node.js";

export default class GameNode extends Node {
  constructor(background, height, width, score, init) {

    super();
    this.background = background;
    this.height = height;
    this.width = width;
    this.score = score;
    this.init = init;
  }

  accept(context, visitor) {
    return visitor.visitGame(context, this);
  }
}