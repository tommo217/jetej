import antlr4 from 'antlr4';
import JetejLexer from './gen/JetejLexer.js';
import JetejParser from './gen/JetejParser.js';
import parserTreetoAST from './ast/ParseToAST.js';
import Evaluator from './ast/evaluators/Evaluator.js';

/**
 * Entrypoint for webpack
 */
function parse(content) {
  const chars = new antlr4.InputStream(content);
  const tokens = new antlr4.CommonTokenStream(new JetejLexer(chars));
  const parser = new JetejParser(tokens);
  const visitor = new parserTreetoAST();
  // TODO: how to report parse error
  return visitor.visitProgram(parser.program());
}

function compile(content) {
  const parsedProgram = parse(content)
  const evaluator = new Evaluator();
  const errorBuilder = []; 
  const script = parsedProgram.accept(errorBuilder, evaluator);
  let compileErr = ``;
  if (errorBuilder.length > 0) {
    for (msg of errorBuilder) {
      compileErr += `${msg}\n`
    }
  }
  console.log(`Output script: \n ${script}`)
  return {
    result: script, 
    parseError: ``,
    compileError: compileErr,
  };
}

export default compile;