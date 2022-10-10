export default class Node {
  

  accept(context, visitor) {
    visitor.visit(context, this);
  }

}