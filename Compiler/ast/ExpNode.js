import Node from "./Node.js";

export default class ExpNode extends Node {
  constructor(exp) {
    super();
    this.exp = exp;
  }

  accept(context, visitor) {
    /**
     * Lifted behaviour to visitor for static checks
     */
    // if(typeof exp == 'number') {
    //     return exp.toString();
    // }
    // else if(typeof exp == 'string') {
    //     return exp;
    // }
    // else if(typeof exp == 'boolean') {
    //     if(exp) {
    //         return 'true';
    //     }
    //     else {
    //         return 'false';
    //     }
    // }
    // else {
        
    // }
    return visitor.visitExp(context, this);
  }
}