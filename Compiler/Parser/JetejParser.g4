parser grammar JetejParser;

options {
    tokenVocab = JetejLexer;
}

program:game (object|event|function)* EOF;
name:NAME IDENTIFIER;
game:GAME_HEADER ( game_background | game_width | game_height | game_score | game_time)* END_OF_LINE;
object:OBJECT_HEADER name (object_image | object_life | object_start_x |object_start_y | object_speed_x | object_speed_y| object_size_x
| object_size_y |object_update | object_number | object_mass)* END_OF_LINE;

game_background:GAME_BACKGROUND IDENTIFIER;
game_width:GAME_WIDTH INTEGER;
game_height:GAME_HEIGHT INTEGER;
game_score:GAME_SCORE INTEGER;
game_time:GAME_TIME  INTEGER;

object_image:OBJECT_IMAGE FILE_PATH;
object_life:OBJECT_LIFE INTEGER;
object_start_x:OBJECT_START_X expression;
object_start_y:OBJECT_START_Y expression;
object_speed_x:OBJECT_SPEED_X expression;
object_speed_y:OBJECT_SPEED_Y expression;
object_size_x:OBJECT_SIZE_X expression;
object_size_y:OBJECT_SIZE_Y expression;
object_update: OBJECT_UPDATE funCall;
object_number:OBJECT_NUMBER INTEGER;
object_mass:OBJECT_MASS IDENTIFIER;

event:EVENT_HEADER (event_object1|event_object2|event_actions)* END_OF_LINE;
event_object1:EVENT_OBJECT1 IDENTIFIER;
event_object2:EVENT_OBHJECT2 IDENTIFIER;
event_actions:EVENT_ACTIONS funCall (COMMA funCall)*;


function:FUNCTION_HEADER name function_param? function_body;
function_param:FUNCTION_PARAM IDENTIFIER (COMMA IDENTIFIER)*;
function_body:FUNCTION_BODY block END_OF_LINE;

line: statement | ifBlock | whileBlock;
statement: (assignment|funCall) END_OF_LINE;
ifBlock:IF LPAREN expression RPAREN block (ELSE elseIfBlock);
elseIfBlock: block | ifBlock;
whileBlock: WHILE LPAREN  expression RPAREN block;
assignment: IDENTIFIER ASSIGN expression;
block: BODY_START line* BODY_END;
expression: expression BOOL_OP expression| BOOL | IDENTIFIER| INTEGER |funCall | expression (ADDOP|MULTIOP)
expression|ADDOP expression|SQ_LPAREN expression expression SQ_RPAREN;
funCall: IDENTIFIER (LPAREN expression (COMMA expression)* RPAREN|LPAREN RPAREN);