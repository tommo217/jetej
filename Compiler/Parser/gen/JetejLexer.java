// Generated from C:/Users/hive/Desktop/GitHub/Project1Group10/Compiler/Parser\JetejLexer.g4 by ANTLR 4.10.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class JetejLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.10.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NAME=1, GAME_HEADER=2, GAME_BACKGROUND=3, GAME_WIDTH=4, GAME_HEIGHT=5, 
		GAME_SCORE=6, GAME_TIME=7, OBJECT_HEADER=8, OBJECT_IMAGE=9, OBJECT_LIFE=10, 
		OBJECT_START_X=11, OBJECT_START_Y=12, OBJECT_SPEED_X=13, OBJECT_SPEED_Y=14, 
		OBJECT_SIZE_X=15, OBJECT_SIZE_Y=16, OBJECT_UPDATE=17, OBJECT_NUMBER=18, 
		OBJECT_MASS=19, EVENT_HEADER=20, EVENT_OBJECT1=21, EVENT_OBHJECT2=22, 
		EVENT_ACTIONS=23, FUNCTION_HEADER=24, FUNCTION_PARAM=25, FUNCTION_BODY=26, 
		WS=27, INTEGER=28, BOOL=29, END_OF_LINE=30, COMMA=31, LPAREN=32, RPAREN=33, 
		SQ_LPAREN=34, SQ_RPAREN=35, IF=36, ELSE=37, WHILE=38, BODY_START=39, BODY_END=40, 
		ADDOP=41, MULTIOP=42, ASSIGN=43, NOT=44, BOOL_OP=45, COMPARE_OP=46, IDENTIFIER=47, 
		FILE_PATH=48;
	public static final int
		FILE_MODE=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "FILE_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NAME", "GAME_HEADER", "GAME_BACKGROUND", "GAME_WIDTH", "GAME_HEIGHT", 
			"GAME_SCORE", "GAME_TIME", "OBJECT_HEADER", "OBJECT_IMAGE", "OBJECT_LIFE", 
			"OBJECT_START_X", "OBJECT_START_Y", "OBJECT_SPEED_X", "OBJECT_SPEED_Y", 
			"OBJECT_SIZE_X", "OBJECT_SIZE_Y", "OBJECT_UPDATE", "OBJECT_NUMBER", "OBJECT_MASS", 
			"EVENT_HEADER", "EVENT_OBJECT1", "EVENT_OBHJECT2", "EVENT_ACTIONS", "FUNCTION_HEADER", 
			"FUNCTION_PARAM", "FUNCTION_BODY", "WS", "INTEGER", "BOOL", "END_OF_LINE", 
			"COMMA", "LPAREN", "RPAREN", "SQ_LPAREN", "SQ_RPAREN", "IF", "ELSE", 
			"WHILE", "BODY_START", "BODY_END", "ADDOP", "MULTIOP", "ASSIGN", "NOT", 
			"BOOL_OP", "COMPARE_OP", "IDENTIFIER", "FILE_PATH"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'game:'", "'background:'", "'width:'", "'height:'", 
			"'score:'", "'time:'", "'object:'", null, "'life:'", "'start x:'", "'start y:'", 
			"'speed x'", "'speed y'", "'size x:'", "'size y'", "'update:'", "'number:'", 
			"'mass:'", "'event:'", "'object1:'", "'object2:'", "'actions:'", "'function:'", 
			"'param:'", "'body:'", null, null, null, "';'", "','", "'('", "')'", 
			"'['", "']'", "'if'", "'else'", "'while'", "'{'", "'}'", null, null, 
			"'='", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NAME", "GAME_HEADER", "GAME_BACKGROUND", "GAME_WIDTH", "GAME_HEIGHT", 
			"GAME_SCORE", "GAME_TIME", "OBJECT_HEADER", "OBJECT_IMAGE", "OBJECT_LIFE", 
			"OBJECT_START_X", "OBJECT_START_Y", "OBJECT_SPEED_X", "OBJECT_SPEED_Y", 
			"OBJECT_SIZE_X", "OBJECT_SIZE_Y", "OBJECT_UPDATE", "OBJECT_NUMBER", "OBJECT_MASS", 
			"EVENT_HEADER", "EVENT_OBJECT1", "EVENT_OBHJECT2", "EVENT_ACTIONS", "FUNCTION_HEADER", 
			"FUNCTION_PARAM", "FUNCTION_BODY", "WS", "INTEGER", "BOOL", "END_OF_LINE", 
			"COMMA", "LPAREN", "RPAREN", "SQ_LPAREN", "SQ_RPAREN", "IF", "ELSE", 
			"WHILE", "BODY_START", "BODY_END", "ADDOP", "MULTIOP", "ASSIGN", "NOT", 
			"BOOL_OP", "COMPARE_OP", "IDENTIFIER", "FILE_PATH"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public JetejLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "JetejLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u00000\u0195\u0006\uffff\uffff\u0006\uffff\uffff\u0002\u0000\u0007"+
		"\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007"+
		"\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007"+
		"\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n"+
		"\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002"+
		"\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002"+
		"\u0011\u0007\u0011\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002"+
		"\u0014\u0007\u0014\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002"+
		"\u0017\u0007\u0017\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002"+
		"\u001a\u0007\u001a\u0002\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002"+
		"\u001d\u0007\u001d\u0002\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002"+
		" \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002#\u0007#\u0002$\u0007$\u0002"+
		"%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002(\u0007(\u0002)\u0007)\u0002"+
		"*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002-\u0007-\u0002.\u0007.\u0002"+
		"/\u0007/\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0005\b\u00a7\b\b\n\b\f\b\u00aa\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u001a\u0004\u001a\u0135\b\u001a\u000b\u001a\f"+
		"\u001a\u0136\u0001\u001a\u0001\u001a\u0001\u001b\u0004\u001b\u013c\b\u001b"+
		"\u000b\u001b\f\u001b\u013d\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c"+
		"\u0149\b\u001c\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001f"+
		"\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001\"\u0001#\u0001"+
		"#\u0001#\u0001$\u0001$\u0001$\u0001$\u0001$\u0001%\u0001%\u0001%\u0001"+
		"%\u0001%\u0001%\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001(\u0001)\u0001"+
		")\u0001*\u0001*\u0001+\u0001+\u0001,\u0001,\u0001,\u0001,\u0001,\u0001"+
		",\u0001,\u0001,\u0003,\u0179\b,\u0001-\u0001-\u0001-\u0001-\u0001-\u0001"+
		"-\u0001-\u0001-\u0001-\u0001-\u0003-\u0185\b-\u0001.\u0001.\u0005.\u0189"+
		"\b.\n.\f.\u018c\t.\u0001/\u0005/\u018f\b/\n/\f/\u0192\t/\u0001/\u0001"+
		"/\u0000\u00000\u0002\u0001\u0004\u0002\u0006\u0003\b\u0004\n\u0005\f\u0006"+
		"\u000e\u0007\u0010\b\u0012\t\u0014\n\u0016\u000b\u0018\f\u001a\r\u001c"+
		"\u000e\u001e\u000f \u0010\"\u0011$\u0012&\u0013(\u0014*\u0015,\u0016."+
		"\u00170\u00182\u00194\u001a6\u001b8\u001c:\u001d<\u001e>\u001f@ B!D\""+
		"F#H$J%L&N\'P(R)T*V+X,Z-\\.^/`0\u0002\u0000\u0001\u0007\u0003\u0000\t\n"+
		"\r\r  \u0001\u000009\u0002\u0000++--\u0002\u0000**//\u0003\u0000AZ__a"+
		"z\u0004\u000009AZ__az\u0005\u0000\n\n\r\r[[]]||\u01a0\u0000\u0002\u0001"+
		"\u0000\u0000\u0000\u0000\u0004\u0001\u0000\u0000\u0000\u0000\u0006\u0001"+
		"\u0000\u0000\u0000\u0000\b\u0001\u0000\u0000\u0000\u0000\n\u0001\u0000"+
		"\u0000\u0000\u0000\f\u0001\u0000\u0000\u0000\u0000\u000e\u0001\u0000\u0000"+
		"\u0000\u0000\u0010\u0001\u0000\u0000\u0000\u0000\u0012\u0001\u0000\u0000"+
		"\u0000\u0000\u0014\u0001\u0000\u0000\u0000\u0000\u0016\u0001\u0000\u0000"+
		"\u0000\u0000\u0018\u0001\u0000\u0000\u0000\u0000\u001a\u0001\u0000\u0000"+
		"\u0000\u0000\u001c\u0001\u0000\u0000\u0000\u0000\u001e\u0001\u0000\u0000"+
		"\u0000\u0000 \u0001\u0000\u0000\u0000\u0000\"\u0001\u0000\u0000\u0000"+
		"\u0000$\u0001\u0000\u0000\u0000\u0000&\u0001\u0000\u0000\u0000\u0000("+
		"\u0001\u0000\u0000\u0000\u0000*\u0001\u0000\u0000\u0000\u0000,\u0001\u0000"+
		"\u0000\u0000\u0000.\u0001\u0000\u0000\u0000\u00000\u0001\u0000\u0000\u0000"+
		"\u00002\u0001\u0000\u0000\u0000\u00004\u0001\u0000\u0000\u0000\u00006"+
		"\u0001\u0000\u0000\u0000\u00008\u0001\u0000\u0000\u0000\u0000:\u0001\u0000"+
		"\u0000\u0000\u0000<\u0001\u0000\u0000\u0000\u0000>\u0001\u0000\u0000\u0000"+
		"\u0000@\u0001\u0000\u0000\u0000\u0000B\u0001\u0000\u0000\u0000\u0000D"+
		"\u0001\u0000\u0000\u0000\u0000F\u0001\u0000\u0000\u0000\u0000H\u0001\u0000"+
		"\u0000\u0000\u0000J\u0001\u0000\u0000\u0000\u0000L\u0001\u0000\u0000\u0000"+
		"\u0000N\u0001\u0000\u0000\u0000\u0000P\u0001\u0000\u0000\u0000\u0000R"+
		"\u0001\u0000\u0000\u0000\u0000T\u0001\u0000\u0000\u0000\u0000V\u0001\u0000"+
		"\u0000\u0000\u0000X\u0001\u0000\u0000\u0000\u0000Z\u0001\u0000\u0000\u0000"+
		"\u0000\\\u0001\u0000\u0000\u0000\u0000^\u0001\u0000\u0000\u0000\u0001"+
		"`\u0001\u0000\u0000\u0000\u0002b\u0001\u0000\u0000\u0000\u0004h\u0001"+
		"\u0000\u0000\u0000\u0006n\u0001\u0000\u0000\u0000\bz\u0001\u0000\u0000"+
		"\u0000\n\u0081\u0001\u0000\u0000\u0000\f\u0089\u0001\u0000\u0000\u0000"+
		"\u000e\u0090\u0001\u0000\u0000\u0000\u0010\u0096\u0001\u0000\u0000\u0000"+
		"\u0012\u009e\u0001\u0000\u0000\u0000\u0014\u00ad\u0001\u0000\u0000\u0000"+
		"\u0016\u00b3\u0001\u0000\u0000\u0000\u0018\u00bc\u0001\u0000\u0000\u0000"+
		"\u001a\u00c5\u0001\u0000\u0000\u0000\u001c\u00cd\u0001\u0000\u0000\u0000"+
		"\u001e\u00d5\u0001\u0000\u0000\u0000 \u00dd\u0001\u0000\u0000\u0000\""+
		"\u00e4\u0001\u0000\u0000\u0000$\u00ec\u0001\u0000\u0000\u0000&\u00f4\u0001"+
		"\u0000\u0000\u0000(\u00fa\u0001\u0000\u0000\u0000*\u0101\u0001\u0000\u0000"+
		"\u0000,\u010a\u0001\u0000\u0000\u0000.\u0113\u0001\u0000\u0000\u00000"+
		"\u011c\u0001\u0000\u0000\u00002\u0126\u0001\u0000\u0000\u00004\u012d\u0001"+
		"\u0000\u0000\u00006\u0134\u0001\u0000\u0000\u00008\u013b\u0001\u0000\u0000"+
		"\u0000:\u0148\u0001\u0000\u0000\u0000<\u014a\u0001\u0000\u0000\u0000>"+
		"\u014c\u0001\u0000\u0000\u0000@\u014e\u0001\u0000\u0000\u0000B\u0150\u0001"+
		"\u0000\u0000\u0000D\u0152\u0001\u0000\u0000\u0000F\u0154\u0001\u0000\u0000"+
		"\u0000H\u0156\u0001\u0000\u0000\u0000J\u0159\u0001\u0000\u0000\u0000L"+
		"\u015e\u0001\u0000\u0000\u0000N\u0164\u0001\u0000\u0000\u0000P\u0166\u0001"+
		"\u0000\u0000\u0000R\u0168\u0001\u0000\u0000\u0000T\u016a\u0001\u0000\u0000"+
		"\u0000V\u016c\u0001\u0000\u0000\u0000X\u016e\u0001\u0000\u0000\u0000Z"+
		"\u0178\u0001\u0000\u0000\u0000\\\u0184\u0001\u0000\u0000\u0000^\u0186"+
		"\u0001\u0000\u0000\u0000`\u0190\u0001\u0000\u0000\u0000bc\u0005n\u0000"+
		"\u0000cd\u0005a\u0000\u0000de\u0005m\u0000\u0000ef\u0005e\u0000\u0000"+
		"fg\u0005:\u0000\u0000g\u0003\u0001\u0000\u0000\u0000hi\u0005g\u0000\u0000"+
		"ij\u0005a\u0000\u0000jk\u0005m\u0000\u0000kl\u0005e\u0000\u0000lm\u0005"+
		":\u0000\u0000m\u0005\u0001\u0000\u0000\u0000no\u0005b\u0000\u0000op\u0005"+
		"a\u0000\u0000pq\u0005c\u0000\u0000qr\u0005k\u0000\u0000rs\u0005g\u0000"+
		"\u0000st\u0005r\u0000\u0000tu\u0005o\u0000\u0000uv\u0005u\u0000\u0000"+
		"vw\u0005n\u0000\u0000wx\u0005d\u0000\u0000xy\u0005:\u0000\u0000y\u0007"+
		"\u0001\u0000\u0000\u0000z{\u0005w\u0000\u0000{|\u0005i\u0000\u0000|}\u0005"+
		"d\u0000\u0000}~\u0005t\u0000\u0000~\u007f\u0005h\u0000\u0000\u007f\u0080"+
		"\u0005:\u0000\u0000\u0080\t\u0001\u0000\u0000\u0000\u0081\u0082\u0005"+
		"h\u0000\u0000\u0082\u0083\u0005e\u0000\u0000\u0083\u0084\u0005i\u0000"+
		"\u0000\u0084\u0085\u0005g\u0000\u0000\u0085\u0086\u0005h\u0000\u0000\u0086"+
		"\u0087\u0005t\u0000\u0000\u0087\u0088\u0005:\u0000\u0000\u0088\u000b\u0001"+
		"\u0000\u0000\u0000\u0089\u008a\u0005s\u0000\u0000\u008a\u008b\u0005c\u0000"+
		"\u0000\u008b\u008c\u0005o\u0000\u0000\u008c\u008d\u0005r\u0000\u0000\u008d"+
		"\u008e\u0005e\u0000\u0000\u008e\u008f\u0005:\u0000\u0000\u008f\r\u0001"+
		"\u0000\u0000\u0000\u0090\u0091\u0005t\u0000\u0000\u0091\u0092\u0005i\u0000"+
		"\u0000\u0092\u0093\u0005m\u0000\u0000\u0093\u0094\u0005e\u0000\u0000\u0094"+
		"\u0095\u0005:\u0000\u0000\u0095\u000f\u0001\u0000\u0000\u0000\u0096\u0097"+
		"\u0005o\u0000\u0000\u0097\u0098\u0005b\u0000\u0000\u0098\u0099\u0005j"+
		"\u0000\u0000\u0099\u009a\u0005e\u0000\u0000\u009a\u009b\u0005c\u0000\u0000"+
		"\u009b\u009c\u0005t\u0000\u0000\u009c\u009d\u0005:\u0000\u0000\u009d\u0011"+
		"\u0001\u0000\u0000\u0000\u009e\u009f\u0005i\u0000\u0000\u009f\u00a0\u0005"+
		"m\u0000\u0000\u00a0\u00a1\u0005a\u0000\u0000\u00a1\u00a2\u0005g\u0000"+
		"\u0000\u00a2\u00a3\u0005e\u0000\u0000\u00a3\u00a4\u0005:\u0000\u0000\u00a4"+
		"\u00a8\u0001\u0000\u0000\u0000\u00a5\u00a7\u00036\u001a\u0000\u00a6\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a7\u00aa\u0001\u0000\u0000\u0000\u00a8\u00a6"+
		"\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9\u00ab"+
		"\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00ab\u00ac"+
		"\u0006\b\u0000\u0000\u00ac\u0013\u0001\u0000\u0000\u0000\u00ad\u00ae\u0005"+
		"l\u0000\u0000\u00ae\u00af\u0005i\u0000\u0000\u00af\u00b0\u0005f\u0000"+
		"\u0000\u00b0\u00b1\u0005e\u0000\u0000\u00b1\u00b2\u0005:\u0000\u0000\u00b2"+
		"\u0015\u0001\u0000\u0000\u0000\u00b3\u00b4\u0005s\u0000\u0000\u00b4\u00b5"+
		"\u0005t\u0000\u0000\u00b5\u00b6\u0005a\u0000\u0000\u00b6\u00b7\u0005r"+
		"\u0000\u0000\u00b7\u00b8\u0005t\u0000\u0000\u00b8\u00b9\u0005 \u0000\u0000"+
		"\u00b9\u00ba\u0005x\u0000\u0000\u00ba\u00bb\u0005:\u0000\u0000\u00bb\u0017"+
		"\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005s\u0000\u0000\u00bd\u00be\u0005"+
		"t\u0000\u0000\u00be\u00bf\u0005a\u0000\u0000\u00bf\u00c0\u0005r\u0000"+
		"\u0000\u00c0\u00c1\u0005t\u0000\u0000\u00c1\u00c2\u0005 \u0000\u0000\u00c2"+
		"\u00c3\u0005y\u0000\u0000\u00c3\u00c4\u0005:\u0000\u0000\u00c4\u0019\u0001"+
		"\u0000\u0000\u0000\u00c5\u00c6\u0005s\u0000\u0000\u00c6\u00c7\u0005p\u0000"+
		"\u0000\u00c7\u00c8\u0005e\u0000\u0000\u00c8\u00c9\u0005e\u0000\u0000\u00c9"+
		"\u00ca\u0005d\u0000\u0000\u00ca\u00cb\u0005 \u0000\u0000\u00cb\u00cc\u0005"+
		"x\u0000\u0000\u00cc\u001b\u0001\u0000\u0000\u0000\u00cd\u00ce\u0005s\u0000"+
		"\u0000\u00ce\u00cf\u0005p\u0000\u0000\u00cf\u00d0\u0005e\u0000\u0000\u00d0"+
		"\u00d1\u0005e\u0000\u0000\u00d1\u00d2\u0005d\u0000\u0000\u00d2\u00d3\u0005"+
		" \u0000\u0000\u00d3\u00d4\u0005y\u0000\u0000\u00d4\u001d\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d6\u0005s\u0000\u0000\u00d6\u00d7\u0005i\u0000\u0000\u00d7"+
		"\u00d8\u0005z\u0000\u0000\u00d8\u00d9\u0005e\u0000\u0000\u00d9\u00da\u0005"+
		" \u0000\u0000\u00da\u00db\u0005x\u0000\u0000\u00db\u00dc\u0005:\u0000"+
		"\u0000\u00dc\u001f\u0001\u0000\u0000\u0000\u00dd\u00de\u0005s\u0000\u0000"+
		"\u00de\u00df\u0005i\u0000\u0000\u00df\u00e0\u0005z\u0000\u0000\u00e0\u00e1"+
		"\u0005e\u0000\u0000\u00e1\u00e2\u0005 \u0000\u0000\u00e2\u00e3\u0005y"+
		"\u0000\u0000\u00e3!\u0001\u0000\u0000\u0000\u00e4\u00e5\u0005u\u0000\u0000"+
		"\u00e5\u00e6\u0005p\u0000\u0000\u00e6\u00e7\u0005d\u0000\u0000\u00e7\u00e8"+
		"\u0005a\u0000\u0000\u00e8\u00e9\u0005t\u0000\u0000\u00e9\u00ea\u0005e"+
		"\u0000\u0000\u00ea\u00eb\u0005:\u0000\u0000\u00eb#\u0001\u0000\u0000\u0000"+
		"\u00ec\u00ed\u0005n\u0000\u0000\u00ed\u00ee\u0005u\u0000\u0000\u00ee\u00ef"+
		"\u0005m\u0000\u0000\u00ef\u00f0\u0005b\u0000\u0000\u00f0\u00f1\u0005e"+
		"\u0000\u0000\u00f1\u00f2\u0005r\u0000\u0000\u00f2\u00f3\u0005:\u0000\u0000"+
		"\u00f3%\u0001\u0000\u0000\u0000\u00f4\u00f5\u0005m\u0000\u0000\u00f5\u00f6"+
		"\u0005a\u0000\u0000\u00f6\u00f7\u0005s\u0000\u0000\u00f7\u00f8\u0005s"+
		"\u0000\u0000\u00f8\u00f9\u0005:\u0000\u0000\u00f9\'\u0001\u0000\u0000"+
		"\u0000\u00fa\u00fb\u0005e\u0000\u0000\u00fb\u00fc\u0005v\u0000\u0000\u00fc"+
		"\u00fd\u0005e\u0000\u0000\u00fd\u00fe\u0005n\u0000\u0000\u00fe\u00ff\u0005"+
		"t\u0000\u0000\u00ff\u0100\u0005:\u0000\u0000\u0100)\u0001\u0000\u0000"+
		"\u0000\u0101\u0102\u0005o\u0000\u0000\u0102\u0103\u0005b\u0000\u0000\u0103"+
		"\u0104\u0005j\u0000\u0000\u0104\u0105\u0005e\u0000\u0000\u0105\u0106\u0005"+
		"c\u0000\u0000\u0106\u0107\u0005t\u0000\u0000\u0107\u0108\u00051\u0000"+
		"\u0000\u0108\u0109\u0005:\u0000\u0000\u0109+\u0001\u0000\u0000\u0000\u010a"+
		"\u010b\u0005o\u0000\u0000\u010b\u010c\u0005b\u0000\u0000\u010c\u010d\u0005"+
		"j\u0000\u0000\u010d\u010e\u0005e\u0000\u0000\u010e\u010f\u0005c\u0000"+
		"\u0000\u010f\u0110\u0005t\u0000\u0000\u0110\u0111\u00052\u0000\u0000\u0111"+
		"\u0112\u0005:\u0000\u0000\u0112-\u0001\u0000\u0000\u0000\u0113\u0114\u0005"+
		"a\u0000\u0000\u0114\u0115\u0005c\u0000\u0000\u0115\u0116\u0005t\u0000"+
		"\u0000\u0116\u0117\u0005i\u0000\u0000\u0117\u0118\u0005o\u0000\u0000\u0118"+
		"\u0119\u0005n\u0000\u0000\u0119\u011a\u0005s\u0000\u0000\u011a\u011b\u0005"+
		":\u0000\u0000\u011b/\u0001\u0000\u0000\u0000\u011c\u011d\u0005f\u0000"+
		"\u0000\u011d\u011e\u0005u\u0000\u0000\u011e\u011f\u0005n\u0000\u0000\u011f"+
		"\u0120\u0005c\u0000\u0000\u0120\u0121\u0005t\u0000\u0000\u0121\u0122\u0005"+
		"i\u0000\u0000\u0122\u0123\u0005o\u0000\u0000\u0123\u0124\u0005n\u0000"+
		"\u0000\u0124\u0125\u0005:\u0000\u0000\u01251\u0001\u0000\u0000\u0000\u0126"+
		"\u0127\u0005p\u0000\u0000\u0127\u0128\u0005a\u0000\u0000\u0128\u0129\u0005"+
		"r\u0000\u0000\u0129\u012a\u0005a\u0000\u0000\u012a\u012b\u0005m\u0000"+
		"\u0000\u012b\u012c\u0005:\u0000\u0000\u012c3\u0001\u0000\u0000\u0000\u012d"+
		"\u012e\u0005b\u0000\u0000\u012e\u012f\u0005o\u0000\u0000\u012f\u0130\u0005"+
		"d\u0000\u0000\u0130\u0131\u0005y\u0000\u0000\u0131\u0132\u0005:\u0000"+
		"\u0000\u01325\u0001\u0000\u0000\u0000\u0133\u0135\u0007\u0000\u0000\u0000"+
		"\u0134\u0133\u0001\u0000\u0000\u0000\u0135\u0136\u0001\u0000\u0000\u0000"+
		"\u0136\u0134\u0001\u0000\u0000\u0000\u0136\u0137\u0001\u0000\u0000\u0000"+
		"\u0137\u0138\u0001\u0000\u0000\u0000\u0138\u0139\u0006\u001a\u0001\u0000"+
		"\u01397\u0001\u0000\u0000\u0000\u013a\u013c\u0007\u0001\u0000\u0000\u013b"+
		"\u013a\u0001\u0000\u0000\u0000\u013c\u013d\u0001\u0000\u0000\u0000\u013d"+
		"\u013b\u0001\u0000\u0000\u0000\u013d\u013e\u0001\u0000\u0000\u0000\u013e"+
		"9\u0001\u0000\u0000\u0000\u013f\u0140\u0005t\u0000\u0000\u0140\u0141\u0005"+
		"r\u0000\u0000\u0141\u0142\u0005u\u0000\u0000\u0142\u0149\u0005e\u0000"+
		"\u0000\u0143\u0144\u0005f\u0000\u0000\u0144\u0145\u0005a\u0000\u0000\u0145"+
		"\u0146\u0005l\u0000\u0000\u0146\u0147\u0005s\u0000\u0000\u0147\u0149\u0005"+
		"e\u0000\u0000\u0148\u013f\u0001\u0000\u0000\u0000\u0148\u0143\u0001\u0000"+
		"\u0000\u0000\u0149;\u0001\u0000\u0000\u0000\u014a\u014b\u0005;\u0000\u0000"+
		"\u014b=\u0001\u0000\u0000\u0000\u014c\u014d\u0005,\u0000\u0000\u014d?"+
		"\u0001\u0000\u0000\u0000\u014e\u014f\u0005(\u0000\u0000\u014fA\u0001\u0000"+
		"\u0000\u0000\u0150\u0151\u0005)\u0000\u0000\u0151C\u0001\u0000\u0000\u0000"+
		"\u0152\u0153\u0005[\u0000\u0000\u0153E\u0001\u0000\u0000\u0000\u0154\u0155"+
		"\u0005]\u0000\u0000\u0155G\u0001\u0000\u0000\u0000\u0156\u0157\u0005i"+
		"\u0000\u0000\u0157\u0158\u0005f\u0000\u0000\u0158I\u0001\u0000\u0000\u0000"+
		"\u0159\u015a\u0005e\u0000\u0000\u015a\u015b\u0005l\u0000\u0000\u015b\u015c"+
		"\u0005s\u0000\u0000\u015c\u015d\u0005e\u0000\u0000\u015dK\u0001\u0000"+
		"\u0000\u0000\u015e\u015f\u0005w\u0000\u0000\u015f\u0160\u0005h\u0000\u0000"+
		"\u0160\u0161\u0005i\u0000\u0000\u0161\u0162\u0005l\u0000\u0000\u0162\u0163"+
		"\u0005e\u0000\u0000\u0163M\u0001\u0000\u0000\u0000\u0164\u0165\u0005{"+
		"\u0000\u0000\u0165O\u0001\u0000\u0000\u0000\u0166\u0167\u0005}\u0000\u0000"+
		"\u0167Q\u0001\u0000\u0000\u0000\u0168\u0169\u0007\u0002\u0000\u0000\u0169"+
		"S\u0001\u0000\u0000\u0000\u016a\u016b\u0007\u0003\u0000\u0000\u016bU\u0001"+
		"\u0000\u0000\u0000\u016c\u016d\u0005=\u0000\u0000\u016dW\u0001\u0000\u0000"+
		"\u0000\u016e\u016f\u0005!\u0000\u0000\u016fY\u0001\u0000\u0000\u0000\u0170"+
		"\u0171\u0005a\u0000\u0000\u0171\u0172\u0005n\u0000\u0000\u0172\u0179\u0005"+
		"d\u0000\u0000\u0173\u0174\u0005o\u0000\u0000\u0174\u0179\u0005r\u0000"+
		"\u0000\u0175\u0176\u0005x\u0000\u0000\u0176\u0177\u0005o\u0000\u0000\u0177"+
		"\u0179\u0005r\u0000\u0000\u0178\u0170\u0001\u0000\u0000\u0000\u0178\u0173"+
		"\u0001\u0000\u0000\u0000\u0178\u0175\u0001\u0000\u0000\u0000\u0179[\u0001"+
		"\u0000\u0000\u0000\u017a\u017b\u0005=\u0000\u0000\u017b\u0185\u0005=\u0000"+
		"\u0000\u017c\u017d\u0005!\u0000\u0000\u017d\u0185\u0005=\u0000\u0000\u017e"+
		"\u0185\u0005>\u0000\u0000\u017f\u0180\u0005>\u0000\u0000\u0180\u0185\u0005"+
		"=\u0000\u0000\u0181\u0185\u0005<\u0000\u0000\u0182\u0183\u0005<\u0000"+
		"\u0000\u0183\u0185\u0005=\u0000\u0000\u0184\u017a\u0001\u0000\u0000\u0000"+
		"\u0184\u017c\u0001\u0000\u0000\u0000\u0184\u017e\u0001\u0000\u0000\u0000"+
		"\u0184\u017f\u0001\u0000\u0000\u0000\u0184\u0181\u0001\u0000\u0000\u0000"+
		"\u0184\u0182\u0001\u0000\u0000\u0000\u0185]\u0001\u0000\u0000\u0000\u0186"+
		"\u018a\u0007\u0004\u0000\u0000\u0187\u0189\u0007\u0005\u0000\u0000\u0188"+
		"\u0187\u0001\u0000\u0000\u0000\u0189\u018c\u0001\u0000\u0000\u0000\u018a"+
		"\u0188\u0001\u0000\u0000\u0000\u018a\u018b\u0001\u0000\u0000\u0000\u018b"+
		"_\u0001\u0000\u0000\u0000\u018c\u018a\u0001\u0000\u0000\u0000\u018d\u018f"+
		"\b\u0006\u0000\u0000\u018e\u018d\u0001\u0000\u0000\u0000\u018f\u0192\u0001"+
		"\u0000\u0000\u0000\u0190\u018e\u0001\u0000\u0000\u0000\u0190\u0191\u0001"+
		"\u0000\u0000\u0000\u0191\u0193\u0001\u0000\u0000\u0000\u0192\u0190\u0001"+
		"\u0000\u0000\u0000\u0193\u0194\u0006/\u0002\u0000\u0194a\u0001\u0000\u0000"+
		"\u0000\n\u0000\u0001\u00a8\u0136\u013d\u0148\u0178\u0184\u018a\u0190\u0003"+
		"\u0002\u0001\u0000\u0000\u0001\u0000\u0002\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}