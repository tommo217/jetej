lexer grammar JetejLexer;

NAME: 'name:';

GAME_HEADER: 'game:';
GAME_BACKGROUND: 'background:';
GAME_WIDTH: 'width:';
GAME_HEIGHT: 'height:';
GAME_SCORE: 'score:';
GAME_TIME: 'time:';

OBJECT_HEADER: 'object:';
OBJECT_IMAGE: 'image:' WS* -> mode(FILE_MODE);
OBJECT_LIFE: 'life:';
OBJECT_START_X: 'start x:';
OBJECT_START_Y: 'start y:';
OBJECT_SPEED_X: 'speed x';
OBJECT_SPEED_Y: 'speed y';
OBJECT_SIZE_X: 'size x:';
OBJECT_SIZE_Y: 'size y';
OBJECT_UPDATE: 'update:';
OBJECT_NUMBER: 'number:';
OBJECT_MASS: 'mass:';

EVENT_HEADER: 'event:';
EVENT_OBJECT1: 'object1:';
EVENT_OBHJECT2: 'object2:';
EVENT_ACTIONS: 'actions:';

FUNCTION_HEADER: 'function:';
FUNCTION_PARAM: 'param:';
FUNCTION_BODY: 'body:';

WS: [\r\n\t ]+ -> channel(HIDDEN);
INTEGER: [0-9]+;
BOOL: 'true' | 'false';
END_OF_LINE: ';';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
SQ_LPAREN: '[';
SQ_RPAREN: ']';
IF: 'if';
ELSE: 'else';
WHILE: 'while';
BODY_START: '{';
BODY_END: '}';
ADDOP: '+' | '-';
MULTIOP: '*' | '/';
ASSIGN: '=';
NOT: '!';
BOOL_OP: 'and' | 'or' | 'xor';
COMPARE_OP: '==' | '!=' | '>' | '>=' | '<' | '<=';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

mode FILE_MODE;
FILE_PATH: ~[[|\]\r\n]* -> mode(DEFAULT_MODE);