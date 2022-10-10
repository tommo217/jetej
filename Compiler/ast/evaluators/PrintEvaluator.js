import JetejVisitor from "../JetejVisitor";

export default class PrintEvaluator extends JetejVisitor {
    visitProgram(context, programNode) {
      console.log(`Encountered a program called ${0}`, programNode.name);
    };
}