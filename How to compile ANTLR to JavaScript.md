# How to compile ANTLR to JavaScript

1. Install [ANTLR tool](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
    
    Run the following in cmd:
    ```bash
    > pip install antlr4-tools
    > antlr4
    ```
   - requires python3 and Java version >= 11

2. Compile lexer and parser into JavaScript

    ```bash
    > antlr4 -Dlanguage=JavaScript JetejLexer.g4 JetejParser.g4 -visitor -o ../gen 
    ```
    - change the last argument to change output directory


### Related Documentations
 - [ANTLR4 JavasScript Documentation](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md)
 - [ANTLR4 CLI options](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md)