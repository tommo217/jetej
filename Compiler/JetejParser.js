// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JetejParserListener from './JetejParserListener.js';
import JetejParserVisitor from './JetejParserVisitor.js';

const serializedATN = [4,1,52,33,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,1,0,1,1,1,1,3,1,19,8,1,1,2,1,2,1,2,1,2,1,2,1,
3,1,3,1,3,3,3,29,8,3,1,3,1,3,1,3,0,0,4,0,2,4,6,0,0,31,0,11,1,0,0,0,2,18,
1,0,0,0,4,20,1,0,0,0,6,25,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,13,1,0,0,0,
11,9,1,0,0,0,11,12,1,0,0,0,12,14,1,0,0,0,13,11,1,0,0,0,14,15,5,0,0,1,15,
1,1,0,0,0,16,19,3,4,2,0,17,19,3,6,3,0,18,16,1,0,0,0,18,17,1,0,0,0,19,3,1,
0,0,0,20,21,5,35,0,0,21,22,5,31,0,0,22,23,5,48,0,0,23,24,5,32,0,0,24,5,1,
0,0,0,25,26,5,48,0,0,26,28,5,31,0,0,27,29,5,48,0,0,28,27,1,0,0,0,28,29,1,
0,0,0,29,30,1,0,0,0,30,31,5,32,0,0,31,7,1,0,0,0,3,11,18,28];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JetejParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'name:'", "'width:'", "'height:'", "'<game>'", 
                            "'background:'", "'score:'", "'time:'", "'<object>'", 
                            null, "'life:'", "'pos x:'", "'pos y:'", "'speed x:'", 
                            "'speed y:'", "'update:'", "'number:'", "'mass:'", 
                            "'bounce:'", "'have collision:'", "'<event>'", 
                            "'object1:'", "'object2:'", "'actions:'", "'<function>'", 
                            "'param:'", "'body:'", null, null, "';'", "','", 
                            "'('", "')'", "'['", "']'", "'if'", "'else'", 
                            "'while'", "'return'", "'{'", "'}'", "'+'", 
                            "'-'", null, "'='", "'!'" ];
    static symbolicNames = [ null, "NAME", "WIDTH", "HEIGHT", "GAME_HEADER", 
                             "GAME_BACKGROUND", "GAME_SCORE", "GAME_TIME", 
                             "OBJECT_HEADER", "OBJECT_IMAGE", "OBJECT_LIFE", 
                             "OBJECT_START_X", "OBJECT_START_Y", "OBJECT_SPEED_X", 
                             "OBJECT_SPEED_Y", "OBJECT_UPDATE", "OBJECT_NUMBER", 
                             "OBJECT_MASS", "OBJECT_BOUNCE", "OBJECT_COLLISION", 
                             "EVENT_HEADER", "EVENT_OBJECT1", "EVENT_OBHJECT2", 
                             "EVENT_ACTIONS", "FUNCTION_HEADER", "FUNCTION_PARAM", 
                             "FUNCTION_BODY", "INTEGER", "BOOL", "END_OF_LINE", 
                             "COMMA", "LPAREN", "RPAREN", "SQ_LPAREN", "SQ_RPAREN", 
                             "IF", "ELSE", "WHILE", "RETURN", "BODY_START", 
                             "BODY_END", "ADD", "MINUS", "MULTIOP", "ASSIGN", 
                             "NOT", "BOOL_OP", "COMPARE_OP", "IDENTIFIER", 
                             "WS", "COMMENT", "LINE_COMMENT", "FILE_PATH" ];
    static ruleNames = [ "program", "lines", "ifrule", "funCall" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JetejParser.ruleNames;
        this.literalNames = JetejParser.literalNames;
        this.symbolicNames = JetejParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JetejParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35 || _la===48) {
	            this.state = 8;
	            this.lines();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 14;
	        this.match(JetejParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lines() {
	    let localctx = new LinesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JetejParser.RULE_lines);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.ifrule();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.funCall();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifrule() {
	    let localctx = new IfruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JetejParser.RULE_ifrule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(JetejParser.IF);
	        this.state = 21;
	        this.match(JetejParser.LPAREN);
	        this.state = 22;
	        this.match(JetejParser.IDENTIFIER);
	        this.state = 23;
	        this.match(JetejParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funCall() {
	    let localctx = new FunCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JetejParser.RULE_funCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(JetejParser.IDENTIFIER);
	        this.state = 26;
	        this.match(JetejParser.LPAREN);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 27;
	            this.match(JetejParser.IDENTIFIER);
	        }

	        this.state = 30;
	        this.match(JetejParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JetejParser.EOF = antlr4.Token.EOF;
JetejParser.NAME = 1;
JetejParser.WIDTH = 2;
JetejParser.HEIGHT = 3;
JetejParser.GAME_HEADER = 4;
JetejParser.GAME_BACKGROUND = 5;
JetejParser.GAME_SCORE = 6;
JetejParser.GAME_TIME = 7;
JetejParser.OBJECT_HEADER = 8;
JetejParser.OBJECT_IMAGE = 9;
JetejParser.OBJECT_LIFE = 10;
JetejParser.OBJECT_START_X = 11;
JetejParser.OBJECT_START_Y = 12;
JetejParser.OBJECT_SPEED_X = 13;
JetejParser.OBJECT_SPEED_Y = 14;
JetejParser.OBJECT_UPDATE = 15;
JetejParser.OBJECT_NUMBER = 16;
JetejParser.OBJECT_MASS = 17;
JetejParser.OBJECT_BOUNCE = 18;
JetejParser.OBJECT_COLLISION = 19;
JetejParser.EVENT_HEADER = 20;
JetejParser.EVENT_OBJECT1 = 21;
JetejParser.EVENT_OBHJECT2 = 22;
JetejParser.EVENT_ACTIONS = 23;
JetejParser.FUNCTION_HEADER = 24;
JetejParser.FUNCTION_PARAM = 25;
JetejParser.FUNCTION_BODY = 26;
JetejParser.INTEGER = 27;
JetejParser.BOOL = 28;
JetejParser.END_OF_LINE = 29;
JetejParser.COMMA = 30;
JetejParser.LPAREN = 31;
JetejParser.RPAREN = 32;
JetejParser.SQ_LPAREN = 33;
JetejParser.SQ_RPAREN = 34;
JetejParser.IF = 35;
JetejParser.ELSE = 36;
JetejParser.WHILE = 37;
JetejParser.RETURN = 38;
JetejParser.BODY_START = 39;
JetejParser.BODY_END = 40;
JetejParser.ADD = 41;
JetejParser.MINUS = 42;
JetejParser.MULTIOP = 43;
JetejParser.ASSIGN = 44;
JetejParser.NOT = 45;
JetejParser.BOOL_OP = 46;
JetejParser.COMPARE_OP = 47;
JetejParser.IDENTIFIER = 48;
JetejParser.WS = 49;
JetejParser.COMMENT = 50;
JetejParser.LINE_COMMENT = 51;
JetejParser.FILE_PATH = 52;

JetejParser.RULE_program = 0;
JetejParser.RULE_lines = 1;
JetejParser.RULE_ifrule = 2;
JetejParser.RULE_funCall = 3;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_program;
    }

	EOF() {
	    return this.getToken(JetejParser.EOF, 0);
	};

	lines = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinesContext);
	    } else {
	        return this.getTypedRuleContext(LinesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LinesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_lines;
    }

	ifrule() {
	    return this.getTypedRuleContext(IfruleContext,0);
	};

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterLines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitLines(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitLines(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_ifrule;
    }

	IF() {
	    return this.getToken(JetejParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(JetejParser.LPAREN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(JetejParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterIfrule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitIfrule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitIfrule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_funCall;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.IDENTIFIER);
	    } else {
	        return this.getToken(JetejParser.IDENTIFIER, i);
	    }
	};


	LPAREN() {
	    return this.getToken(JetejParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(JetejParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterFunCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitFunCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitFunCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JetejParser.ProgramContext = ProgramContext; 
JetejParser.LinesContext = LinesContext; 
JetejParser.IfruleContext = IfruleContext; 
JetejParser.FunCallContext = FunCallContext; 
