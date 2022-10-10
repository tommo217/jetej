import Node from "./Node.js";

export default class ObjectNode extends Node {
  constructor(name, image, life, speed_x, speed_y, width, height, mass, bounce, isCollision, update) {
    super();
    this.name = name;
    this.image = image;
    this.life = life;
   
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