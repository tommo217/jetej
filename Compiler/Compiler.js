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
  let parseError = ``;
  parser.removeErrorListeners();
  parser.addErrorListener({
  syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
    parseError+=` line ${line}, col ${column}: ${msg}\n`;

  }
});

  const visitor = new parserTreetoAST();
  return [visitor.visitProgram(parser.program()),parseError];
}

export function compile(content) {
  const [parsedProgram,parseError] = parse(content);
  const evaluator = new Evaluator();
  const errorBuilder = [];
  let script = ``;
  let compileErr = ``;
  if(parseError.length == 0){
    script = parsedProgram.accept(errorBuilder, evaluator);
    if (errorBuilder.length > 0) {
      for (const msg of errorBuilder) {
        compileErr += `${msg}\n`;
     }
  }
}

  console.log(`Output script: \n ${script}`)
  return {
    result: script, 
    parseError: ``,
    compileError: compileErr,
    parseError:parseError
  };
}
