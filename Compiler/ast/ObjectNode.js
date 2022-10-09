import Node from "./Node";

export default class ObjectNode extends Node {
  constructor(name, image, life, pos_x, pos_y, speed_x, speed_y, width, height, mass, bounce, isCollision, update) {
    this.name = name;
    this.image = image;
    this.life = life;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
    this.speed_x = speed_x;
    this.speed_y = speed_y;
    this.width = width;
    this.height = height;
    this.mass = mass;
    this.bounce = bounce;
    this.isCollision = isCollision;
    this.update = update;
  }

  accept(context, visitor) {
    return visitor.visitObject(context, this);
  }
}