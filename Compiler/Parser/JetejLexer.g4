lexer grammar JetejLexer;

NAME: 'name:';
WIDTH: 'width:';
HEIGHT: 'height:';

GAME_HEADER: '<game>';
GAME_BACKGROUND: 'background:';
GAME_SCORE: 'score:';
GAME_TIME: 'time:';
GAME_INIT: 'init:';

OBJECT_HEADER: '<object>';
OBJECT_IMAGE: 'image:' WS* -> mode(FILE_MODE);
OBJECT_LIFE: 'life:';
OBJECT_START_X: 'pos x:';
OBJECT_START_Y: 'pos y:';
OBJECT_SPEED_X: 'speed x:';
OBJECT_SPEED_Y: 'speed y:';
OBJECT_UPDATE: 'update:';
OBJECT_NUMBER: 'number:';
OBJECT_MASS: 'mass:';
OBJECT_BOUNCE: 'bounce:';
OBJECT_COLLISION: 'have collision:';

EVENT_HEADER: '<event>';
EVENT_OBJECT1: 'object1:';
EVENT_OBHJECT2: 'object2:';
EVENT_ACTIONS: 'actions:';

FUNCTION_HEADER: '<function>';
FUNCTION_PARAM: 'param:';
FUNCTION_BODY: 'body:';

INTEGER: [0-9]+;
BOOL: 'true' | 'false';
END_OF_LINE: ';';
COMMA: ',';
PERIOD: '.';
LPAREN: '(';
RPAREN: ')';
SQ_LPAREN: '[';
SQ_RPAREN: ']';
IF: 'if';
BODY_START: '{';
BODY_END: '}';
ADD: '+';
MINUS: '-';
MULTIOP: '*' | '/';
ASSIGN: '=';
NOT: 'not';
BOOL_OP: 'and' | 'or';
COMPARE_OP: '==' | '!=' | '>' | '>=' | '<' | '<=';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [\r\n\t ]+ -> channel(HIDDEN);
COMMENT: '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
mode FILE_MODE;
FILE_PATH: ~[;\r\n]* -> mode(DEFAULT_MODE);




