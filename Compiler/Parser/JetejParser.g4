parser grammar JetejParser;

options {
    tokenVocab = JetejLexer;
}

program:game (object|event|function)* EOF;
name:NAME IDENTIFIER;
game:GAME_HEADER ( game_background | width | height | game_score | game_time|init)* END_OF_LINE;
object:OBJECT_HEADER name (object_image | object_life | object_speed_x | object_speed_y| object_size_x
| object_size_y |object_update |  object_mass | object_bounce | object_collision)* END_OF_LINE;

game_background:GAME_BACKGROUND IDENTIFIER;
width:WIDTH INTEGER;
height:HEIGHT INTEGER;
game_score:GAME_SCORE INTEGER;
game_time:GAME_TIME INTEGER;
init:GAME_INIT funCall (COMMA funCall)*;
object_image:OBJECT_IMAGE FILE_PATH;
object_life:OBJECT_LIFE INTEGER;
object_speed_x:OBJECT_SPEED_X expression;
object_speed_y:OBJECT_SPEED_Y expression;
object_size_x:WIDTH expression;
object_size_y:HEIGHT expression;
object_update: OBJECT_UPDATE funCall (COMMA funCall)*;

object_mass:OBJECT_MASS INTEGER;
object_bounce:OBJECT_BOUNCE INTEGER;
object_collision:OBJECT_COLLISION BOOL;

event:EVENT_HEADER event_object1 event_object2 event_actions END_OF_LINE;
event_object1:EVENT_OBJECT1 IDENTIFIER;
event_object2:EVENT_OBHJECT2 IDENTIFIER;
event_actions:EVENT_ACTIONS funCall (COMMA funCall)*;


function:FUNCTION_HEADER name function_param? function_body;
function_param:FUNCTION_PARAM IDENTIFIER (COMMA IDENTIFIER)*;
function_body:FUNCTION_BODY block END_OF_LINE;
constant:INTEGER|BOOL;
block: BODY_START line* BODY_END;
line: statement | ifBlock ;
object_attribute: (IDENTIFIER PERIOD IDENTIFIER);
statement: assignment|funCall;
ifBlock:IF LPAREN expression COMMA statement (COMMA statement)? RPAREN;
/*whileBlock: WHILE LPAREN  expression RPAREN block;*/
assignment: (IDENTIFIER|object_attribute) ASSIGN expression;
expression:
    constant             #constantExpression
    |IDENTIFIER          #identifierExpression
    |object_attribute    #object_attributeExpression
    |funCall             #funCallExpression
    |NOT expression      #notExpression
    |LPAREN expression RPAREN       #parenExpression
    |expression MULTIOP expression      #multiplicativeExpression
    |expression (ADD|MINUS) expression      #additiveExpression
    |MINUS expression           #negativeExpression
    |expression COMPARE_OP expression       #comparisonExpression
    |expression BOOL_OP expression      #booleanExpression
    ;
/*return:RETURN expression;*/
funCall: IDENTIFIER (LPAREN expression (COMMA expression)* RPAREN|LPAREN RPAREN);