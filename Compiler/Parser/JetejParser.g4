parser grammar JetejParser;

options {
    tokenVocab = JetejLexer;
}

//testing
program: lines* EOF;

lines: ifrule | funCall;

ifrule: IF LPAREN IDENTIFIER RPAREN;
funCall: IDENTIFIER LPAREN IDENTIFIER? RPAREN;