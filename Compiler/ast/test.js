import antlr4 from 'antlr4';
import JetejLexer from '../gen/JetejLexer.js';
import JetejParser from '../gen/JetejParser.js';
import parserTreetoAST from './ParseToAST.js';
import * as fs from 'fs';

class JeteCompiler {
    parseCode(){
        var content= "";
        fs.readFile('compiler/input.txt', function (err, data) {
            console.log("read");
            if (err) {
                return console.error(err);
            }
            content = data.toString();
            console.log(content);
            const chars = new antlr4.InputStream(content);
            const lexer = new JetejLexer(chars);
            const tokens = new antlr4.CommonTokenStream(lexer);
            const parser = new JetejParser(tokens);
            const visitor = new parserTreetoAST();
            const parsedProgram = visitor.visitProgram(parser.program());
        });
        
        try{
            console.log("dsfkd"+content);
            }
        catch(error){
            console.error();
        }
        
        
    }
}

let jete = new JeteCompiler();
jete.parseCode();
