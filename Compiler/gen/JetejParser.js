// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JetejParserListener from './JetejParserListener.js';
import JetejParserVisitor from './JetejParserVisitor.js';

const serializedATN = [4,1,51,310,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,1,0,1,0,1,0,1,0,5,0,77,8,0,10,0,12,0,80,9,0,1,0,1,0,1,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,94,8,2,10,2,12,2,97,9,2,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,113,8,3,10,3,12,3,116,9,
3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,
9,1,9,1,9,1,9,5,9,139,8,9,10,9,12,9,142,9,9,1,10,1,10,1,10,1,11,1,11,1,11,
1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,
16,1,16,5,16,166,8,16,10,16,12,16,169,9,16,1,17,1,17,1,17,1,18,1,18,1,18,
1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,
22,1,23,1,23,1,23,1,23,5,23,196,8,23,10,23,12,23,199,9,23,1,24,1,24,1,24,
3,24,204,8,24,1,24,1,24,1,25,1,25,1,25,1,25,5,25,212,8,25,10,25,12,25,215,
9,25,1,26,1,26,1,26,1,26,1,27,1,27,1,28,1,28,5,28,225,8,28,10,28,12,28,228,
9,28,1,28,1,28,1,29,1,29,3,29,234,8,29,1,30,1,30,1,30,1,30,1,31,1,31,3,31,
242,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,251,8,32,1,32,1,32,1,33,
1,33,3,33,257,8,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
1,34,1,34,1,34,1,34,1,34,3,34,275,8,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
1,34,1,34,1,34,1,34,1,34,5,34,289,8,34,10,34,12,34,292,9,34,1,35,1,35,1,
35,1,35,1,35,5,35,299,8,35,10,35,12,35,302,9,35,1,35,1,35,1,35,1,35,3,35,
308,8,35,1,35,0,1,68,36,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,0,2,1,0,28,29,1,0,
40,41,314,0,72,1,0,0,0,2,83,1,0,0,0,4,86,1,0,0,0,6,100,1,0,0,0,8,119,1,0,
0,0,10,122,1,0,0,0,12,125,1,0,0,0,14,128,1,0,0,0,16,131,1,0,0,0,18,134,1,
0,0,0,20,143,1,0,0,0,22,146,1,0,0,0,24,149,1,0,0,0,26,152,1,0,0,0,28,155,
1,0,0,0,30,158,1,0,0,0,32,161,1,0,0,0,34,170,1,0,0,0,36,173,1,0,0,0,38,176,
1,0,0,0,40,179,1,0,0,0,42,185,1,0,0,0,44,188,1,0,0,0,46,191,1,0,0,0,48,200,
1,0,0,0,50,207,1,0,0,0,52,216,1,0,0,0,54,220,1,0,0,0,56,222,1,0,0,0,58,233,
1,0,0,0,60,235,1,0,0,0,62,241,1,0,0,0,64,243,1,0,0,0,66,256,1,0,0,0,68,274,
1,0,0,0,70,293,1,0,0,0,72,78,3,4,2,0,73,77,3,6,3,0,74,77,3,40,20,0,75,77,
3,48,24,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,
1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,0,0,1,82,1,1,0,
0,0,83,84,5,1,0,0,84,85,5,47,0,0,85,3,1,0,0,0,86,95,5,4,0,0,87,94,3,8,4,
0,88,94,3,10,5,0,89,94,3,12,6,0,90,94,3,14,7,0,91,94,3,16,8,0,92,94,3,18,
9,0,93,87,1,0,0,0,93,88,1,0,0,0,93,89,1,0,0,0,93,90,1,0,0,0,93,91,1,0,0,
0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,
97,95,1,0,0,0,98,99,5,30,0,0,99,5,1,0,0,0,100,101,5,9,0,0,101,114,3,2,1,
0,102,113,3,20,10,0,103,113,3,22,11,0,104,113,3,24,12,0,105,113,3,26,13,
0,106,113,3,28,14,0,107,113,3,30,15,0,108,113,3,32,16,0,109,113,3,34,17,
0,110,113,3,36,18,0,111,113,3,38,19,0,112,102,1,0,0,0,112,103,1,0,0,0,112,
104,1,0,0,0,112,105,1,0,0,0,112,106,1,0,0,0,112,107,1,0,0,0,112,108,1,0,
0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,116,1,0,0,0,114,
112,1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,0,116,114,1,0,0,0,117,118,5,30,
0,0,118,7,1,0,0,0,119,120,5,5,0,0,120,121,5,47,0,0,121,9,1,0,0,0,122,123,
5,2,0,0,123,124,5,28,0,0,124,11,1,0,0,0,125,126,5,3,0,0,126,127,5,28,0,0,
127,13,1,0,0,0,128,129,5,6,0,0,129,130,5,28,0,0,130,15,1,0,0,0,131,132,5,
7,0,0,132,133,5,28,0,0,133,17,1,0,0,0,134,135,5,8,0,0,135,140,3,70,35,0,
136,137,5,31,0,0,137,139,3,70,35,0,138,136,1,0,0,0,139,142,1,0,0,0,140,138,
1,0,0,0,140,141,1,0,0,0,141,19,1,0,0,0,142,140,1,0,0,0,143,144,5,10,0,0,
144,145,5,51,0,0,145,21,1,0,0,0,146,147,5,11,0,0,147,148,5,28,0,0,148,23,
1,0,0,0,149,150,5,14,0,0,150,151,3,68,34,0,151,25,1,0,0,0,152,153,5,15,0,
0,153,154,3,68,34,0,154,27,1,0,0,0,155,156,5,2,0,0,156,157,3,68,34,0,157,
29,1,0,0,0,158,159,5,3,0,0,159,160,3,68,34,0,160,31,1,0,0,0,161,162,5,16,
0,0,162,167,3,70,35,0,163,164,5,31,0,0,164,166,3,70,35,0,165,163,1,0,0,0,
166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,33,1,0,0,0,169,167,1,
0,0,0,170,171,5,18,0,0,171,172,5,28,0,0,172,35,1,0,0,0,173,174,5,19,0,0,
174,175,5,28,0,0,175,37,1,0,0,0,176,177,5,20,0,0,177,178,5,29,0,0,178,39,
1,0,0,0,179,180,5,21,0,0,180,181,3,42,21,0,181,182,3,44,22,0,182,183,3,46,
23,0,183,184,5,30,0,0,184,41,1,0,0,0,185,186,5,22,0,0,186,187,5,47,0,0,187,
43,1,0,0,0,188,189,5,23,0,0,189,190,5,47,0,0,190,45,1,0,0,0,191,192,5,24,
0,0,192,197,3,70,35,0,193,194,5,31,0,0,194,196,3,70,35,0,195,193,1,0,0,0,
196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,47,1,0,0,0,199,197,1,
0,0,0,200,201,5,25,0,0,201,203,3,2,1,0,202,204,3,50,25,0,203,202,1,0,0,0,
203,204,1,0,0,0,204,205,1,0,0,0,205,206,3,52,26,0,206,49,1,0,0,0,207,208,
5,26,0,0,208,213,5,47,0,0,209,210,5,31,0,0,210,212,5,47,0,0,211,209,1,0,
0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,51,1,0,0,0,215,213,
1,0,0,0,216,217,5,27,0,0,217,218,3,56,28,0,218,219,5,30,0,0,219,53,1,0,0,
0,220,221,7,0,0,0,221,55,1,0,0,0,222,226,5,38,0,0,223,225,3,58,29,0,224,
223,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,
0,0,228,226,1,0,0,0,229,230,5,39,0,0,230,57,1,0,0,0,231,234,3,62,31,0,232,
234,3,64,32,0,233,231,1,0,0,0,233,232,1,0,0,0,234,59,1,0,0,0,235,236,5,47,
0,0,236,237,5,32,0,0,237,238,5,47,0,0,238,61,1,0,0,0,239,242,3,66,33,0,240,
242,3,70,35,0,241,239,1,0,0,0,241,240,1,0,0,0,242,63,1,0,0,0,243,244,5,37,
0,0,244,245,5,33,0,0,245,246,3,68,34,0,246,247,5,31,0,0,247,250,3,62,31,
0,248,249,5,31,0,0,249,251,3,62,31,0,250,248,1,0,0,0,250,251,1,0,0,0,251,
252,1,0,0,0,252,253,5,34,0,0,253,65,1,0,0,0,254,257,5,47,0,0,255,257,3,60,
30,0,256,254,1,0,0,0,256,255,1,0,0,0,257,258,1,0,0,0,258,259,5,43,0,0,259,
260,3,68,34,0,260,67,1,0,0,0,261,262,6,34,-1,0,262,275,3,54,27,0,263,275,
5,47,0,0,264,275,3,60,30,0,265,275,3,70,35,0,266,267,5,44,0,0,267,275,3,
68,34,7,268,269,5,33,0,0,269,270,3,68,34,0,270,271,5,34,0,0,271,275,1,0,
0,0,272,273,5,41,0,0,273,275,3,68,34,3,274,261,1,0,0,0,274,263,1,0,0,0,274,
264,1,0,0,0,274,265,1,0,0,0,274,266,1,0,0,0,274,268,1,0,0,0,274,272,1,0,
0,0,275,290,1,0,0,0,276,277,10,5,0,0,277,278,5,42,0,0,278,289,3,68,34,6,
279,280,10,4,0,0,280,281,7,1,0,0,281,289,3,68,34,5,282,283,10,2,0,0,283,
284,5,46,0,0,284,289,3,68,34,3,285,286,10,1,0,0,286,287,5,45,0,0,287,289,
3,68,34,2,288,276,1,0,0,0,288,279,1,0,0,0,288,282,1,0,0,0,288,285,1,0,0,
0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,69,1,0,0,0,292,290,
1,0,0,0,293,307,5,47,0,0,294,295,5,33,0,0,295,300,3,68,34,0,296,297,5,31,
0,0,297,299,3,68,34,0,298,296,1,0,0,0,299,302,1,0,0,0,300,298,1,0,0,0,300,
301,1,0,0,0,301,303,1,0,0,0,302,300,1,0,0,0,303,304,5,34,0,0,304,308,1,0,
0,0,305,306,5,33,0,0,306,308,5,34,0,0,307,294,1,0,0,0,307,305,1,0,0,0,308,
71,1,0,0,0,21,76,78,93,95,112,114,140,167,197,203,213,226,233,241,250,256,
274,288,290,300,307];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JetejParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'name:'", "'width:'", "'height:'", "'<game>'", 
                            "'background:'", "'score:'", "'time:'", "'init:'", 
                            "'<object>'", null, "'life:'", "'pos x:'", "'pos y:'", 
                            "'speed x:'", "'speed y:'", "'update:'", "'number:'", 
                            "'mass:'", "'bounce:'", "'have collision:'", 
                            "'<event>'", "'object1:'", "'object2:'", "'actions:'", 
                            "'<function>'", "'param:'", "'body:'", null, 
                            null, "';'", "','", "'.'", "'('", "')'", "'['", 
                            "']'", "'if'", "'{'", "'}'", "'+'", "'-'", null, 
                            "'='", "'not'" ];
    static symbolicNames = [ null, "NAME", "WIDTH", "HEIGHT", "GAME_HEADER", 
                             "GAME_BACKGROUND", "GAME_SCORE", "GAME_TIME", 
                             "GAME_INIT", "OBJECT_HEADER", "OBJECT_IMAGE", 
                             "OBJECT_LIFE", "OBJECT_START_X", "OBJECT_START_Y", 
                             "OBJECT_SPEED_X", "OBJECT_SPEED_Y", "OBJECT_UPDATE", 
                             "OBJECT_NUMBER", "OBJECT_MASS", "OBJECT_BOUNCE", 
                             "OBJECT_COLLISION", "EVENT_HEADER", "EVENT_OBJECT1", 
                             "EVENT_OBHJECT2", "EVENT_ACTIONS", "FUNCTION_HEADER", 
                             "FUNCTION_PARAM", "FUNCTION_BODY", "INTEGER", 
                             "BOOL", "END_OF_LINE", "COMMA", "PERIOD", "LPAREN", 
                             "RPAREN", "SQ_LPAREN", "SQ_RPAREN", "IF", "BODY_START", 
                             "BODY_END", "ADD", "MINUS", "MULTIOP", "ASSIGN", 
                             "NOT", "BOOL_OP", "COMPARE_OP", "IDENTIFIER", 
                             "WS", "COMMENT", "LINE_COMMENT", "FILE_PATH" ];
    static ruleNames = [ "program", "name", "game", "object", "game_background", 
                         "width", "height", "game_score", "game_time", "init", 
                         "object_image", "object_life", "object_speed_x", 
                         "object_speed_y", "object_size_x", "object_size_y", 
                         "object_update", "object_mass", "object_bounce", 
                         "object_collision", "event", "event_object1", "event_object2", 
                         "event_actions", "function", "function_param", 
                         "function_body", "constant", "block", "line", "object_attribute", 
                         "statement", "ifBlock", "assignment", "expression", 
                         "funCall" ];

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

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 34:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JetejParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.game();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 35652096) !== 0)) {
	            this.state = 76;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 9:
	                this.state = 73;
	                this.object();
	                break;
	            case 21:
	                this.state = 74;
	                this.event();
	                break;
	            case 25:
	                this.state = 75;
	                this.function_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JetejParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(JetejParser.NAME);
	        this.state = 84;
	        this.match(JetejParser.IDENTIFIER);
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



	game() {
	    let localctx = new GameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JetejParser.RULE_game);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(JetejParser.GAME_HEADER);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 492) !== 0)) {
	            this.state = 93;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 87;
	                this.game_background();
	                break;
	            case 2:
	                this.state = 88;
	                this.width();
	                break;
	            case 3:
	                this.state = 89;
	                this.height();
	                break;
	            case 6:
	                this.state = 90;
	                this.game_score();
	                break;
	            case 7:
	                this.state = 91;
	                this.game_time();
	                break;
	            case 8:
	                this.state = 92;
	                this.init();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
	        this.match(JetejParser.END_OF_LINE);
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JetejParser.RULE_object);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(JetejParser.OBJECT_HEADER);
	        this.state = 101;
	        this.name();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 1952780) !== 0)) {
	            this.state = 112;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 10:
	                this.state = 102;
	                this.object_image();
	                break;
	            case 11:
	                this.state = 103;
	                this.object_life();
	                break;
	            case 14:
	                this.state = 104;
	                this.object_speed_x();
	                break;
	            case 15:
	                this.state = 105;
	                this.object_speed_y();
	                break;
	            case 2:
	                this.state = 106;
	                this.object_size_x();
	                break;
	            case 3:
	                this.state = 107;
	                this.object_size_y();
	                break;
	            case 16:
	                this.state = 108;
	                this.object_update();
	                break;
	            case 18:
	                this.state = 109;
	                this.object_mass();
	                break;
	            case 19:
	                this.state = 110;
	                this.object_bounce();
	                break;
	            case 20:
	                this.state = 111;
	                this.object_collision();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this.match(JetejParser.END_OF_LINE);
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



	game_background() {
	    let localctx = new Game_backgroundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JetejParser.RULE_game_background);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(JetejParser.GAME_BACKGROUND);
	        this.state = 120;
	        this.match(JetejParser.IDENTIFIER);
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



	width() {
	    let localctx = new WidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JetejParser.RULE_width);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(JetejParser.WIDTH);
	        this.state = 123;
	        this.match(JetejParser.INTEGER);
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



	height() {
	    let localctx = new HeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JetejParser.RULE_height);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(JetejParser.HEIGHT);
	        this.state = 126;
	        this.match(JetejParser.INTEGER);
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



	game_score() {
	    let localctx = new Game_scoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JetejParser.RULE_game_score);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(JetejParser.GAME_SCORE);
	        this.state = 129;
	        this.match(JetejParser.INTEGER);
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



	game_time() {
	    let localctx = new Game_timeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JetejParser.RULE_game_time);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(JetejParser.GAME_TIME);
	        this.state = 132;
	        this.match(JetejParser.INTEGER);
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



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JetejParser.RULE_init);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(JetejParser.GAME_INIT);
	        this.state = 135;
	        this.funCall();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 136;
	            this.match(JetejParser.COMMA);
	            this.state = 137;
	            this.funCall();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	object_image() {
	    let localctx = new Object_imageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JetejParser.RULE_object_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(JetejParser.OBJECT_IMAGE);
	        this.state = 144;
	        this.match(JetejParser.FILE_PATH);
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



	object_life() {
	    let localctx = new Object_lifeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JetejParser.RULE_object_life);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(JetejParser.OBJECT_LIFE);
	        this.state = 147;
	        this.match(JetejParser.INTEGER);
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



	object_speed_x() {
	    let localctx = new Object_speed_xContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JetejParser.RULE_object_speed_x);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(JetejParser.OBJECT_SPEED_X);
	        this.state = 150;
	        this.expression(0);
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



	object_speed_y() {
	    let localctx = new Object_speed_yContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JetejParser.RULE_object_speed_y);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(JetejParser.OBJECT_SPEED_Y);
	        this.state = 153;
	        this.expression(0);
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



	object_size_x() {
	    let localctx = new Object_size_xContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JetejParser.RULE_object_size_x);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(JetejParser.WIDTH);
	        this.state = 156;
	        this.expression(0);
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



	object_size_y() {
	    let localctx = new Object_size_yContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JetejParser.RULE_object_size_y);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(JetejParser.HEIGHT);
	        this.state = 159;
	        this.expression(0);
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



	object_update() {
	    let localctx = new Object_updateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JetejParser.RULE_object_update);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(JetejParser.OBJECT_UPDATE);
	        this.state = 162;
	        this.funCall();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 163;
	            this.match(JetejParser.COMMA);
	            this.state = 164;
	            this.funCall();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	object_mass() {
	    let localctx = new Object_massContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JetejParser.RULE_object_mass);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(JetejParser.OBJECT_MASS);
	        this.state = 171;
	        this.match(JetejParser.INTEGER);
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



	object_bounce() {
	    let localctx = new Object_bounceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JetejParser.RULE_object_bounce);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(JetejParser.OBJECT_BOUNCE);
	        this.state = 174;
	        this.match(JetejParser.INTEGER);
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



	object_collision() {
	    let localctx = new Object_collisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JetejParser.RULE_object_collision);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(JetejParser.OBJECT_COLLISION);
	        this.state = 177;
	        this.match(JetejParser.BOOL);
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



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, JetejParser.RULE_event);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(JetejParser.EVENT_HEADER);
	        this.state = 180;
	        this.event_object1();
	        this.state = 181;
	        this.event_object2();
	        this.state = 182;
	        this.event_actions();
	        this.state = 183;
	        this.match(JetejParser.END_OF_LINE);
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



	event_object1() {
	    let localctx = new Event_object1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, JetejParser.RULE_event_object1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(JetejParser.EVENT_OBJECT1);
	        this.state = 186;
	        this.match(JetejParser.IDENTIFIER);
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



	event_object2() {
	    let localctx = new Event_object2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, JetejParser.RULE_event_object2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(JetejParser.EVENT_OBHJECT2);
	        this.state = 189;
	        this.match(JetejParser.IDENTIFIER);
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



	event_actions() {
	    let localctx = new Event_actionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, JetejParser.RULE_event_actions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(JetejParser.EVENT_ACTIONS);
	        this.state = 192;
	        this.funCall();
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 193;
	            this.match(JetejParser.COMMA);
	            this.state = 194;
	            this.funCall();
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, JetejParser.RULE_function);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(JetejParser.FUNCTION_HEADER);
	        this.state = 201;
	        this.name();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 202;
	            this.function_param();
	        }

	        this.state = 205;
	        this.function_body();
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



	function_param() {
	    let localctx = new Function_paramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, JetejParser.RULE_function_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(JetejParser.FUNCTION_PARAM);
	        this.state = 208;
	        this.match(JetejParser.IDENTIFIER);
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 209;
	            this.match(JetejParser.COMMA);
	            this.state = 210;
	            this.match(JetejParser.IDENTIFIER);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	function_body() {
	    let localctx = new Function_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, JetejParser.RULE_function_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(JetejParser.FUNCTION_BODY);
	        this.state = 217;
	        this.block();
	        this.state = 218;
	        this.match(JetejParser.END_OF_LINE);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, JetejParser.RULE_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        _la = this._input.LA(1);
	        if(!(_la===28 || _la===29)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, JetejParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(JetejParser.BODY_START);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37 || _la===47) {
	            this.state = 223;
	            this.line();
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 229;
	        this.match(JetejParser.BODY_END);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, JetejParser.RULE_line);
	    try {
	        this.state = 233;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this.statement();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 232;
	            this.ifBlock();
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



	object_attribute() {
	    let localctx = new Object_attributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, JetejParser.RULE_object_attribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(JetejParser.IDENTIFIER);
	        this.state = 236;
	        this.match(JetejParser.PERIOD);
	        this.state = 237;
	        this.match(JetejParser.IDENTIFIER);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, JetejParser.RULE_statement);
	    try {
	        this.state = 241;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 239;
	            this.assignment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 240;
	            this.funCall();
	            break;

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



	ifBlock() {
	    let localctx = new IfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, JetejParser.RULE_ifBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(JetejParser.IF);
	        this.state = 244;
	        this.match(JetejParser.LPAREN);
	        this.state = 245;
	        this.expression(0);
	        this.state = 246;
	        this.match(JetejParser.COMMA);
	        this.state = 247;
	        this.statement();
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 248;
	            this.match(JetejParser.COMMA);
	            this.state = 249;
	            this.statement();
	        }

	        this.state = 252;
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, JetejParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 254;
	            this.match(JetejParser.IDENTIFIER);
	            break;

	        case 2:
	            this.state = 255;
	            this.object_attribute();
	            break;

	        }
	        this.state = 258;
	        this.match(JetejParser.ASSIGN);
	        this.state = 259;
	        this.expression(0);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 68;
	    this.enterRecursionRule(localctx, 68, JetejParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ConstantExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 262;
	            this.constant();
	            break;

	        case 2:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 263;
	            this.match(JetejParser.IDENTIFIER);
	            break;

	        case 3:
	            localctx = new Object_attributeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 264;
	            this.object_attribute();
	            break;

	        case 4:
	            localctx = new FunCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 265;
	            this.funCall();
	            break;

	        case 5:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 266;
	            this.match(JetejParser.NOT);
	            this.state = 267;
	            this.expression(7);
	            break;

	        case 6:
	            localctx = new ParenExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 268;
	            this.match(JetejParser.LPAREN);
	            this.state = 269;
	            this.expression(0);
	            this.state = 270;
	            this.match(JetejParser.RPAREN);
	            break;

	        case 7:
	            localctx = new NegativeExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 272;
	            this.match(JetejParser.MINUS);
	            this.state = 273;
	            this.expression(3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 290;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 288;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JetejParser.RULE_expression);
	                    this.state = 276;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 277;
	                    this.match(JetejParser.MULTIOP);
	                    this.state = 278;
	                    this.expression(6);
	                    break;

	                case 2:
	                    localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JetejParser.RULE_expression);
	                    this.state = 279;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 280;
	                    _la = this._input.LA(1);
	                    if(!(_la===40 || _la===41)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 281;
	                    this.expression(5);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JetejParser.RULE_expression);
	                    this.state = 282;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 283;
	                    this.match(JetejParser.COMPARE_OP);
	                    this.state = 284;
	                    this.expression(3);
	                    break;

	                case 4:
	                    localctx = new BooleanExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JetejParser.RULE_expression);
	                    this.state = 285;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 286;
	                    this.match(JetejParser.BOOL_OP);
	                    this.state = 287;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 292;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	funCall() {
	    let localctx = new FunCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, JetejParser.RULE_funCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(JetejParser.IDENTIFIER);
	        this.state = 307;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 294;
	            this.match(JetejParser.LPAREN);
	            this.state = 295;
	            this.expression(0);
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===31) {
	                this.state = 296;
	                this.match(JetejParser.COMMA);
	                this.state = 297;
	                this.expression(0);
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 303;
	            this.match(JetejParser.RPAREN);
	            break;

	        case 2:
	            this.state = 305;
	            this.match(JetejParser.LPAREN);
	            this.state = 306;
	            this.match(JetejParser.RPAREN);
	            break;

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


}

JetejParser.EOF = antlr4.Token.EOF;
JetejParser.NAME = 1;
JetejParser.WIDTH = 2;
JetejParser.HEIGHT = 3;
JetejParser.GAME_HEADER = 4;
JetejParser.GAME_BACKGROUND = 5;
JetejParser.GAME_SCORE = 6;
JetejParser.GAME_TIME = 7;
JetejParser.GAME_INIT = 8;
JetejParser.OBJECT_HEADER = 9;
JetejParser.OBJECT_IMAGE = 10;
JetejParser.OBJECT_LIFE = 11;
JetejParser.OBJECT_START_X = 12;
JetejParser.OBJECT_START_Y = 13;
JetejParser.OBJECT_SPEED_X = 14;
JetejParser.OBJECT_SPEED_Y = 15;
JetejParser.OBJECT_UPDATE = 16;
JetejParser.OBJECT_NUMBER = 17;
JetejParser.OBJECT_MASS = 18;
JetejParser.OBJECT_BOUNCE = 19;
JetejParser.OBJECT_COLLISION = 20;
JetejParser.EVENT_HEADER = 21;
JetejParser.EVENT_OBJECT1 = 22;
JetejParser.EVENT_OBHJECT2 = 23;
JetejParser.EVENT_ACTIONS = 24;
JetejParser.FUNCTION_HEADER = 25;
JetejParser.FUNCTION_PARAM = 26;
JetejParser.FUNCTION_BODY = 27;
JetejParser.INTEGER = 28;
JetejParser.BOOL = 29;
JetejParser.END_OF_LINE = 30;
JetejParser.COMMA = 31;
JetejParser.PERIOD = 32;
JetejParser.LPAREN = 33;
JetejParser.RPAREN = 34;
JetejParser.SQ_LPAREN = 35;
JetejParser.SQ_RPAREN = 36;
JetejParser.IF = 37;
JetejParser.BODY_START = 38;
JetejParser.BODY_END = 39;
JetejParser.ADD = 40;
JetejParser.MINUS = 41;
JetejParser.MULTIOP = 42;
JetejParser.ASSIGN = 43;
JetejParser.NOT = 44;
JetejParser.BOOL_OP = 45;
JetejParser.COMPARE_OP = 46;
JetejParser.IDENTIFIER = 47;
JetejParser.WS = 48;
JetejParser.COMMENT = 49;
JetejParser.LINE_COMMENT = 50;
JetejParser.FILE_PATH = 51;

JetejParser.RULE_program = 0;
JetejParser.RULE_name = 1;
JetejParser.RULE_game = 2;
JetejParser.RULE_object = 3;
JetejParser.RULE_game_background = 4;
JetejParser.RULE_width = 5;
JetejParser.RULE_height = 6;
JetejParser.RULE_game_score = 7;
JetejParser.RULE_game_time = 8;
JetejParser.RULE_init = 9;
JetejParser.RULE_object_image = 10;
JetejParser.RULE_object_life = 11;
JetejParser.RULE_object_speed_x = 12;
JetejParser.RULE_object_speed_y = 13;
JetejParser.RULE_object_size_x = 14;
JetejParser.RULE_object_size_y = 15;
JetejParser.RULE_object_update = 16;
JetejParser.RULE_object_mass = 17;
JetejParser.RULE_object_bounce = 18;
JetejParser.RULE_object_collision = 19;
JetejParser.RULE_event = 20;
JetejParser.RULE_event_object1 = 21;
JetejParser.RULE_event_object2 = 22;
JetejParser.RULE_event_actions = 23;
JetejParser.RULE_function = 24;
JetejParser.RULE_function_param = 25;
JetejParser.RULE_function_body = 26;
JetejParser.RULE_constant = 27;
JetejParser.RULE_block = 28;
JetejParser.RULE_line = 29;
JetejParser.RULE_object_attribute = 30;
JetejParser.RULE_statement = 31;
JetejParser.RULE_ifBlock = 32;
JetejParser.RULE_assignment = 33;
JetejParser.RULE_expression = 34;
JetejParser.RULE_funCall = 35;

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

	game() {
	    return this.getTypedRuleContext(GameContext,0);
	};

	EOF() {
	    return this.getToken(JetejParser.EOF, 0);
	};

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	event = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventContext);
	    } else {
	        return this.getTypedRuleContext(EventContext,i);
	    }
	};

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionContext,i);
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



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_name;
    }

	NAME() {
	    return this.getToken(JetejParser.NAME, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_game;
    }

	GAME_HEADER() {
	    return this.getToken(JetejParser.GAME_HEADER, 0);
	};

	END_OF_LINE() {
	    return this.getToken(JetejParser.END_OF_LINE, 0);
	};

	game_background = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Game_backgroundContext);
	    } else {
	        return this.getTypedRuleContext(Game_backgroundContext,i);
	    }
	};

	width = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WidthContext);
	    } else {
	        return this.getTypedRuleContext(WidthContext,i);
	    }
	};

	height = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HeightContext);
	    } else {
	        return this.getTypedRuleContext(HeightContext,i);
	    }
	};

	game_score = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Game_scoreContext);
	    } else {
	        return this.getTypedRuleContext(Game_scoreContext,i);
	    }
	};

	game_time = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Game_timeContext);
	    } else {
	        return this.getTypedRuleContext(Game_timeContext,i);
	    }
	};

	init = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitContext);
	    } else {
	        return this.getTypedRuleContext(InitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterGame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitGame(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitGame(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object;
    }

	OBJECT_HEADER() {
	    return this.getToken(JetejParser.OBJECT_HEADER, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	END_OF_LINE() {
	    return this.getToken(JetejParser.END_OF_LINE, 0);
	};

	object_image = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_imageContext);
	    } else {
	        return this.getTypedRuleContext(Object_imageContext,i);
	    }
	};

	object_life = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_lifeContext);
	    } else {
	        return this.getTypedRuleContext(Object_lifeContext,i);
	    }
	};

	object_speed_x = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_speed_xContext);
	    } else {
	        return this.getTypedRuleContext(Object_speed_xContext,i);
	    }
	};

	object_speed_y = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_speed_yContext);
	    } else {
	        return this.getTypedRuleContext(Object_speed_yContext,i);
	    }
	};

	object_size_x = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_size_xContext);
	    } else {
	        return this.getTypedRuleContext(Object_size_xContext,i);
	    }
	};

	object_size_y = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_size_yContext);
	    } else {
	        return this.getTypedRuleContext(Object_size_yContext,i);
	    }
	};

	object_update = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_updateContext);
	    } else {
	        return this.getTypedRuleContext(Object_updateContext,i);
	    }
	};

	object_mass = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_massContext);
	    } else {
	        return this.getTypedRuleContext(Object_massContext,i);
	    }
	};

	object_bounce = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_bounceContext);
	    } else {
	        return this.getTypedRuleContext(Object_bounceContext,i);
	    }
	};

	object_collision = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_collisionContext);
	    } else {
	        return this.getTypedRuleContext(Object_collisionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Game_backgroundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_game_background;
    }

	GAME_BACKGROUND() {
	    return this.getToken(JetejParser.GAME_BACKGROUND, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterGame_background(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitGame_background(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitGame_background(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_width;
    }

	WIDTH() {
	    return this.getToken(JetejParser.WIDTH, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitWidth(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitWidth(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HeightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_height;
    }

	HEIGHT() {
	    return this.getToken(JetejParser.HEIGHT, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterHeight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitHeight(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitHeight(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Game_scoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_game_score;
    }

	GAME_SCORE() {
	    return this.getToken(JetejParser.GAME_SCORE, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterGame_score(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitGame_score(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitGame_score(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Game_timeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_game_time;
    }

	GAME_TIME() {
	    return this.getToken(JetejParser.GAME_TIME, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterGame_time(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitGame_time(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitGame_time(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_init;
    }

	GAME_INIT() {
	    return this.getToken(JetejParser.GAME_INIT, 0);
	};

	funCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunCallContext);
	    } else {
	        return this.getTypedRuleContext(FunCallContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.COMMA);
	    } else {
	        return this.getToken(JetejParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_imageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_image;
    }

	OBJECT_IMAGE() {
	    return this.getToken(JetejParser.OBJECT_IMAGE, 0);
	};

	FILE_PATH() {
	    return this.getToken(JetejParser.FILE_PATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_image(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_image(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_image(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_lifeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_life;
    }

	OBJECT_LIFE() {
	    return this.getToken(JetejParser.OBJECT_LIFE, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_life(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_life(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_life(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_speed_xContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_speed_x;
    }

	OBJECT_SPEED_X() {
	    return this.getToken(JetejParser.OBJECT_SPEED_X, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_speed_x(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_speed_x(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_speed_x(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_speed_yContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_speed_y;
    }

	OBJECT_SPEED_Y() {
	    return this.getToken(JetejParser.OBJECT_SPEED_Y, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_speed_y(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_speed_y(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_speed_y(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_size_xContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_size_x;
    }

	WIDTH() {
	    return this.getToken(JetejParser.WIDTH, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_size_x(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_size_x(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_size_x(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_size_yContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_size_y;
    }

	HEIGHT() {
	    return this.getToken(JetejParser.HEIGHT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_size_y(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_size_y(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_size_y(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_updateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_update;
    }

	OBJECT_UPDATE() {
	    return this.getToken(JetejParser.OBJECT_UPDATE, 0);
	};

	funCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunCallContext);
	    } else {
	        return this.getTypedRuleContext(FunCallContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.COMMA);
	    } else {
	        return this.getToken(JetejParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_update(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_update(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_update(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_massContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_mass;
    }

	OBJECT_MASS() {
	    return this.getToken(JetejParser.OBJECT_MASS, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_mass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_mass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_mass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_bounceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_bounce;
    }

	OBJECT_BOUNCE() {
	    return this.getToken(JetejParser.OBJECT_BOUNCE, 0);
	};

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_bounce(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_bounce(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_bounce(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_collisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_collision;
    }

	OBJECT_COLLISION() {
	    return this.getToken(JetejParser.OBJECT_COLLISION, 0);
	};

	BOOL() {
	    return this.getToken(JetejParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_collision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_collision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_collision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_event;
    }

	EVENT_HEADER() {
	    return this.getToken(JetejParser.EVENT_HEADER, 0);
	};

	event_object1() {
	    return this.getTypedRuleContext(Event_object1Context,0);
	};

	event_object2() {
	    return this.getTypedRuleContext(Event_object2Context,0);
	};

	event_actions() {
	    return this.getTypedRuleContext(Event_actionsContext,0);
	};

	END_OF_LINE() {
	    return this.getToken(JetejParser.END_OF_LINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitEvent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitEvent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Event_object1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_event_object1;
    }

	EVENT_OBJECT1() {
	    return this.getToken(JetejParser.EVENT_OBJECT1, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterEvent_object1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitEvent_object1(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitEvent_object1(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Event_object2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_event_object2;
    }

	EVENT_OBHJECT2() {
	    return this.getToken(JetejParser.EVENT_OBHJECT2, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterEvent_object2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitEvent_object2(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitEvent_object2(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Event_actionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_event_actions;
    }

	EVENT_ACTIONS() {
	    return this.getToken(JetejParser.EVENT_ACTIONS, 0);
	};

	funCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunCallContext);
	    } else {
	        return this.getTypedRuleContext(FunCallContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.COMMA);
	    } else {
	        return this.getToken(JetejParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterEvent_actions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitEvent_actions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitEvent_actions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_function;
    }

	FUNCTION_HEADER() {
	    return this.getToken(JetejParser.FUNCTION_HEADER, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	function_body() {
	    return this.getTypedRuleContext(Function_bodyContext,0);
	};

	function_param() {
	    return this.getTypedRuleContext(Function_paramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Function_paramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_function_param;
    }

	FUNCTION_PARAM() {
	    return this.getToken(JetejParser.FUNCTION_PARAM, 0);
	};

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


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.COMMA);
	    } else {
	        return this.getToken(JetejParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterFunction_param(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitFunction_param(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitFunction_param(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Function_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_function_body;
    }

	FUNCTION_BODY() {
	    return this.getToken(JetejParser.FUNCTION_BODY, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	END_OF_LINE() {
	    return this.getToken(JetejParser.END_OF_LINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterFunction_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitFunction_body(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitFunction_body(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_constant;
    }

	INTEGER() {
	    return this.getToken(JetejParser.INTEGER, 0);
	};

	BOOL() {
	    return this.getToken(JetejParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_block;
    }

	BODY_START() {
	    return this.getToken(JetejParser.BODY_START, 0);
	};

	BODY_END() {
	    return this.getToken(JetejParser.BODY_END, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_line;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	ifBlock() {
	    return this.getTypedRuleContext(IfBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_attributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_object_attribute;
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


	PERIOD() {
	    return this.getToken(JetejParser.PERIOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_attribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_attribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_attribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_ifBlock;
    }

	IF() {
	    return this.getToken(JetejParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(JetejParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.COMMA);
	    } else {
	        return this.getToken(JetejParser.COMMA, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(JetejParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitIfBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitIfBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_assignment;
    }

	ASSIGN() {
	    return this.getToken(JetejParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	object_attribute() {
	    return this.getTypedRuleContext(Object_attributeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JetejParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NegativeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MINUS() {
	    return this.getToken(JetejParser.MINUS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterNegativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitNegativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitNegativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.NegativeExpressionContext = NegativeExpressionContext;

class ConstantExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterConstantExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitConstantExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitConstantExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.ConstantExpressionContext = ConstantExpressionContext;

class AdditiveExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(JetejParser.ADD, 0);
	};

	MINUS() {
	    return this.getToken(JetejParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.AdditiveExpressionContext = AdditiveExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.IdentifierExpressionContext = IdentifierExpressionContext;

class FunCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterFunCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitFunCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitFunCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.FunCallExpressionContext = FunCallExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(JetejParser.NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.NotExpressionContext = NotExpressionContext;

class ComparisonExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMPARE_OP() {
	    return this.getToken(JetejParser.COMPARE_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitComparisonExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitComparisonExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.ComparisonExpressionContext = ComparisonExpressionContext;

class ParenExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(JetejParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(JetejParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterParenExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitParenExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitParenExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.ParenExpressionContext = ParenExpressionContext;

class MultiplicativeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MULTIOP() {
	    return this.getToken(JetejParser.MULTIOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

class Object_attributeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	object_attribute() {
	    return this.getTypedRuleContext(Object_attributeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterObject_attributeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitObject_attributeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitObject_attributeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.Object_attributeExpressionContext = Object_attributeExpressionContext;

class BooleanExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	BOOL_OP() {
	    return this.getToken(JetejParser.BOOL_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.enterBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JetejParserListener ) {
	        listener.exitBooleanExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JetejParserVisitor ) {
	        return visitor.visitBooleanExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JetejParser.BooleanExpressionContext = BooleanExpressionContext;

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

	IDENTIFIER() {
	    return this.getToken(JetejParser.IDENTIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(JetejParser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(JetejParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JetejParser.COMMA);
	    } else {
	        return this.getToken(JetejParser.COMMA, i);
	    }
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
JetejParser.NameContext = NameContext; 
JetejParser.GameContext = GameContext; 
JetejParser.ObjectContext = ObjectContext; 
JetejParser.Game_backgroundContext = Game_backgroundContext; 
JetejParser.WidthContext = WidthContext; 
JetejParser.HeightContext = HeightContext; 
JetejParser.Game_scoreContext = Game_scoreContext; 
JetejParser.Game_timeContext = Game_timeContext; 
JetejParser.InitContext = InitContext; 
JetejParser.Object_imageContext = Object_imageContext; 
JetejParser.Object_lifeContext = Object_lifeContext; 
JetejParser.Object_speed_xContext = Object_speed_xContext; 
JetejParser.Object_speed_yContext = Object_speed_yContext; 
JetejParser.Object_size_xContext = Object_size_xContext; 
JetejParser.Object_size_yContext = Object_size_yContext; 
JetejParser.Object_updateContext = Object_updateContext; 
JetejParser.Object_massContext = Object_massContext; 
JetejParser.Object_bounceContext = Object_bounceContext; 
JetejParser.Object_collisionContext = Object_collisionContext; 
JetejParser.EventContext = EventContext; 
JetejParser.Event_object1Context = Event_object1Context; 
JetejParser.Event_object2Context = Event_object2Context; 
JetejParser.Event_actionsContext = Event_actionsContext; 
JetejParser.FunctionContext = FunctionContext; 
JetejParser.Function_paramContext = Function_paramContext; 
JetejParser.Function_bodyContext = Function_bodyContext; 
JetejParser.ConstantContext = ConstantContext; 
JetejParser.BlockContext = BlockContext; 
JetejParser.LineContext = LineContext; 
JetejParser.Object_attributeContext = Object_attributeContext; 
JetejParser.StatementContext = StatementContext; 
JetejParser.IfBlockContext = IfBlockContext; 
JetejParser.AssignmentContext = AssignmentContext; 
JetejParser.ExpressionContext = ExpressionContext; 
JetejParser.FunCallContext = FunCallContext; 
