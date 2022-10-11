// Generated from /Users/mayuqing/Desktop/Project1Group10/Compiler/Parser/JetejLexer.g4 by ANTLR 4.10.1
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
		NAME=1, WIDTH=2, HEIGHT=3, GAME_HEADER=4, GAME_BACKGROUND=5, GAME_SCORE=6, 
		GAME_TIME=7, GAME_INIT=8, OBJECT_HEADER=9, OBJECT_IMAGE=10, OBJECT_LIFE=11, 
		OBJECT_START_X=12, OBJECT_START_Y=13, OBJECT_SPEED_X=14, OBJECT_SPEED_Y=15, 
		OBJECT_UPDATE=16, OBJECT_NUMBER=17, OBJECT_MASS=18, OBJECT_BOUNCE=19, 
		OBJECT_COLLISION=20, EVENT_HEADER=21, EVENT_OBJECT1=22, EVENT_OBHJECT2=23, 
		EVENT_ACTIONS=24, FUNCTION_HEADER=25, FUNCTION_PARAM=26, FUNCTION_BODY=27, 
		INTEGER=28, BOOL=29, END_OF_LINE=30, COMMA=31, PERIOD=32, LPAREN=33, RPAREN=34, 
		SQ_LPAREN=35, SQ_RPAREN=36, IF=37, BODY_START=38, BODY_END=39, ADD=40, 
		MINUS=41, MULTIOP=42, ASSIGN=43, NOT=44, BOOL_OP=45, COMPARE_OP=46, IDENTIFIER=47, 
		WS=48, COMMENT=49, LINE_COMMENT=50, FILE_PATH=51;
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
			"NAME", "WIDTH", "HEIGHT", "GAME_HEADER", "GAME_BACKGROUND", "GAME_SCORE", 
			"GAME_TIME", "GAME_INIT", "OBJECT_HEADER", "OBJECT_IMAGE", "OBJECT_LIFE", 
			"OBJECT_START_X", "OBJECT_START_Y", "OBJECT_SPEED_X", "OBJECT_SPEED_Y", 
			"OBJECT_UPDATE", "OBJECT_NUMBER", "OBJECT_MASS", "OBJECT_BOUNCE", "OBJECT_COLLISION", 
			"EVENT_HEADER", "EVENT_OBJECT1", "EVENT_OBHJECT2", "EVENT_ACTIONS", "FUNCTION_HEADER", 
			"FUNCTION_PARAM", "FUNCTION_BODY", "INTEGER", "BOOL", "END_OF_LINE", 
			"COMMA", "PERIOD", "LPAREN", "RPAREN", "SQ_LPAREN", "SQ_RPAREN", "IF", 
			"BODY_START", "BODY_END", "ADD", "MINUS", "MULTIOP", "ASSIGN", "NOT", 
			"BOOL_OP", "COMPARE_OP", "IDENTIFIER", "WS", "COMMENT", "LINE_COMMENT", 
			"FILE_PATH"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'width:'", "'height:'", "'<game>'", "'background:'", 
			"'score:'", "'time:'", "'init:'", "'<object>'", null, "'life:'", "'pos x:'", 
			"'pos y:'", "'speed x:'", "'speed y:'", "'update:'", "'number:'", "'mass:'", 
			"'bounce:'", "'have collision:'", "'<event>'", "'object1:'", "'object2:'", 
			"'actions:'", "'<function>'", "'param:'", "'body:'", null, null, "';'", 
			"','", "'.'", "'('", "')'", "'['", "']'", "'if'", "'{'", "'}'", "'+'", 
			"'-'", null, "'='", "'not'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NAME", "WIDTH", "HEIGHT", "GAME_HEADER", "GAME_BACKGROUND", "GAME_SCORE", 
			"GAME_TIME", "GAME_INIT", "OBJECT_HEADER", "OBJECT_IMAGE", "OBJECT_LIFE", 
			"OBJECT_START_X", "OBJECT_START_Y", "OBJECT_SPEED_X", "OBJECT_SPEED_Y", 
			"OBJECT_UPDATE", "OBJECT_NUMBER", "OBJECT_MASS", "OBJECT_BOUNCE", "OBJECT_COLLISION", 
			"EVENT_HEADER", "EVENT_OBJECT1", "EVENT_OBHJECT2", "EVENT_ACTIONS", "FUNCTION_HEADER", 
			"FUNCTION_PARAM", "FUNCTION_BODY", "INTEGER", "BOOL", "END_OF_LINE", 
			"COMMA", "PERIOD", "LPAREN", "RPAREN", "SQ_LPAREN", "SQ_RPAREN", "IF", 
			"BODY_START", "BODY_END", "ADD", "MINUS", "MULTIOP", "ASSIGN", "NOT", 
			"BOOL_OP", "COMPARE_OP", "IDENTIFIER", "WS", "COMMENT", "LINE_COMMENT", 
			"FILE_PATH"
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
		"\u0004\u00003\u01bd\u0006\uffff\uffff\u0006\uffff\uffff\u0002\u0000\u0007"+
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
		"/\u0007/\u00020\u00070\u00021\u00071\u00022\u00072\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0005\t\u00b5\b\t\n\t\f\t\u00b8\t\t\u0001\t"+
		"\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a"+
		"\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0004\u001b"+
		"\u014c\b\u001b\u000b\u001b\f\u001b\u014d\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0003\u001c\u0159\b\u001c\u0001\u001d\u0001\u001d\u0001\u001e\u0001"+
		"\u001e\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001"+
		"\"\u0001#\u0001#\u0001$\u0001$\u0001$\u0001%\u0001%\u0001&\u0001&\u0001"+
		"\'\u0001\'\u0001(\u0001(\u0001)\u0001)\u0001*\u0001*\u0001+\u0001+\u0001"+
		"+\u0001+\u0001,\u0001,\u0001,\u0001,\u0001,\u0003,\u0181\b,\u0001-\u0001"+
		"-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0003-\u018d"+
		"\b-\u0001.\u0001.\u0005.\u0191\b.\n.\f.\u0194\t.\u0001/\u0004/\u0197\b"+
		"/\u000b/\f/\u0198\u0001/\u0001/\u00010\u00010\u00010\u00010\u00050\u01a1"+
		"\b0\n0\f0\u01a4\t0\u00010\u00010\u00010\u00010\u00010\u00011\u00011\u0001"+
		"1\u00011\u00051\u01af\b1\n1\f1\u01b2\t1\u00011\u00011\u00012\u00052\u01b7"+
		"\b2\n2\f2\u01ba\t2\u00012\u00012\u0001\u01a2\u00003\u0002\u0001\u0004"+
		"\u0002\u0006\u0003\b\u0004\n\u0005\f\u0006\u000e\u0007\u0010\b\u0012\t"+
		"\u0014\n\u0016\u000b\u0018\f\u001a\r\u001c\u000e\u001e\u000f \u0010\""+
		"\u0011$\u0012&\u0013(\u0014*\u0015,\u0016.\u00170\u00182\u00194\u001a"+
		"6\u001b8\u001c:\u001d<\u001e>\u001f@ B!D\"F#H$J%L&N\'P(R)T*V+X,Z-\\.^"+
		"/`0b1d2f3\u0002\u0000\u0001\u0007\u0001\u000009\u0002\u0000**//\u0003"+
		"\u0000AZ__az\u0004\u000009AZ__az\u0003\u0000\t\n\r\r  \u0002\u0000\n\n"+
		"\r\r\u0003\u0000\n\n\r\r;;\u01c9\u0000\u0002\u0001\u0000\u0000\u0000\u0000"+
		"\u0004\u0001\u0000\u0000\u0000\u0000\u0006\u0001\u0000\u0000\u0000\u0000"+
		"\b\u0001\u0000\u0000\u0000\u0000\n\u0001\u0000\u0000\u0000\u0000\f\u0001"+
		"\u0000\u0000\u0000\u0000\u000e\u0001\u0000\u0000\u0000\u0000\u0010\u0001"+
		"\u0000\u0000\u0000\u0000\u0012\u0001\u0000\u0000\u0000\u0000\u0014\u0001"+
		"\u0000\u0000\u0000\u0000\u0016\u0001\u0000\u0000\u0000\u0000\u0018\u0001"+
		"\u0000\u0000\u0000\u0000\u001a\u0001\u0000\u0000\u0000\u0000\u001c\u0001"+
		"\u0000\u0000\u0000\u0000\u001e\u0001\u0000\u0000\u0000\u0000 \u0001\u0000"+
		"\u0000\u0000\u0000\"\u0001\u0000\u0000\u0000\u0000$\u0001\u0000\u0000"+
		"\u0000\u0000&\u0001\u0000\u0000\u0000\u0000(\u0001\u0000\u0000\u0000\u0000"+
		"*\u0001\u0000\u0000\u0000\u0000,\u0001\u0000\u0000\u0000\u0000.\u0001"+
		"\u0000\u0000\u0000\u00000\u0001\u0000\u0000\u0000\u00002\u0001\u0000\u0000"+
		"\u0000\u00004\u0001\u0000\u0000\u0000\u00006\u0001\u0000\u0000\u0000\u0000"+
		"8\u0001\u0000\u0000\u0000\u0000:\u0001\u0000\u0000\u0000\u0000<\u0001"+
		"\u0000\u0000\u0000\u0000>\u0001\u0000\u0000\u0000\u0000@\u0001\u0000\u0000"+
		"\u0000\u0000B\u0001\u0000\u0000\u0000\u0000D\u0001\u0000\u0000\u0000\u0000"+
		"F\u0001\u0000\u0000\u0000\u0000H\u0001\u0000\u0000\u0000\u0000J\u0001"+
		"\u0000\u0000\u0000\u0000L\u0001\u0000\u0000\u0000\u0000N\u0001\u0000\u0000"+
		"\u0000\u0000P\u0001\u0000\u0000\u0000\u0000R\u0001\u0000\u0000\u0000\u0000"+
		"T\u0001\u0000\u0000\u0000\u0000V\u0001\u0000\u0000\u0000\u0000X\u0001"+
		"\u0000\u0000\u0000\u0000Z\u0001\u0000\u0000\u0000\u0000\\\u0001\u0000"+
		"\u0000\u0000\u0000^\u0001\u0000\u0000\u0000\u0000`\u0001\u0000\u0000\u0000"+
		"\u0000b\u0001\u0000\u0000\u0000\u0000d\u0001\u0000\u0000\u0000\u0001f"+
		"\u0001\u0000\u0000\u0000\u0002h\u0001\u0000\u0000\u0000\u0004n\u0001\u0000"+
		"\u0000\u0000\u0006u\u0001\u0000\u0000\u0000\b}\u0001\u0000\u0000\u0000"+
		"\n\u0084\u0001\u0000\u0000\u0000\f\u0090\u0001\u0000\u0000\u0000\u000e"+
		"\u0097\u0001\u0000\u0000\u0000\u0010\u009d\u0001\u0000\u0000\u0000\u0012"+
		"\u00a3\u0001\u0000\u0000\u0000\u0014\u00ac\u0001\u0000\u0000\u0000\u0016"+
		"\u00bb\u0001\u0000\u0000\u0000\u0018\u00c1\u0001\u0000\u0000\u0000\u001a"+
		"\u00c8\u0001\u0000\u0000\u0000\u001c\u00cf\u0001\u0000\u0000\u0000\u001e"+
		"\u00d8\u0001\u0000\u0000\u0000 \u00e1\u0001\u0000\u0000\u0000\"\u00e9"+
		"\u0001\u0000\u0000\u0000$\u00f1\u0001\u0000\u0000\u0000&\u00f7\u0001\u0000"+
		"\u0000\u0000(\u00ff\u0001\u0000\u0000\u0000*\u010f\u0001\u0000\u0000\u0000"+
		",\u0117\u0001\u0000\u0000\u0000.\u0120\u0001\u0000\u0000\u00000\u0129"+
		"\u0001\u0000\u0000\u00002\u0132\u0001\u0000\u0000\u00004\u013d\u0001\u0000"+
		"\u0000\u00006\u0144\u0001\u0000\u0000\u00008\u014b\u0001\u0000\u0000\u0000"+
		":\u0158\u0001\u0000\u0000\u0000<\u015a\u0001\u0000\u0000\u0000>\u015c"+
		"\u0001\u0000\u0000\u0000@\u015e\u0001\u0000\u0000\u0000B\u0160\u0001\u0000"+
		"\u0000\u0000D\u0162\u0001\u0000\u0000\u0000F\u0164\u0001\u0000\u0000\u0000"+
		"H\u0166\u0001\u0000\u0000\u0000J\u0168\u0001\u0000\u0000\u0000L\u016b"+
		"\u0001\u0000\u0000\u0000N\u016d\u0001\u0000\u0000\u0000P\u016f\u0001\u0000"+
		"\u0000\u0000R\u0171\u0001\u0000\u0000\u0000T\u0173\u0001\u0000\u0000\u0000"+
		"V\u0175\u0001\u0000\u0000\u0000X\u0177\u0001\u0000\u0000\u0000Z\u0180"+
		"\u0001\u0000\u0000\u0000\\\u018c\u0001\u0000\u0000\u0000^\u018e\u0001"+
		"\u0000\u0000\u0000`\u0196\u0001\u0000\u0000\u0000b\u019c\u0001\u0000\u0000"+
		"\u0000d\u01aa\u0001\u0000\u0000\u0000f\u01b8\u0001\u0000\u0000\u0000h"+
		"i\u0005n\u0000\u0000ij\u0005a\u0000\u0000jk\u0005m\u0000\u0000kl\u0005"+
		"e\u0000\u0000lm\u0005:\u0000\u0000m\u0003\u0001\u0000\u0000\u0000no\u0005"+
		"w\u0000\u0000op\u0005i\u0000\u0000pq\u0005d\u0000\u0000qr\u0005t\u0000"+
		"\u0000rs\u0005h\u0000\u0000st\u0005:\u0000\u0000t\u0005\u0001\u0000\u0000"+
		"\u0000uv\u0005h\u0000\u0000vw\u0005e\u0000\u0000wx\u0005i\u0000\u0000"+
		"xy\u0005g\u0000\u0000yz\u0005h\u0000\u0000z{\u0005t\u0000\u0000{|\u0005"+
		":\u0000\u0000|\u0007\u0001\u0000\u0000\u0000}~\u0005<\u0000\u0000~\u007f"+
		"\u0005g\u0000\u0000\u007f\u0080\u0005a\u0000\u0000\u0080\u0081\u0005m"+
		"\u0000\u0000\u0081\u0082\u0005e\u0000\u0000\u0082\u0083\u0005>\u0000\u0000"+
		"\u0083\t\u0001\u0000\u0000\u0000\u0084\u0085\u0005b\u0000\u0000\u0085"+
		"\u0086\u0005a\u0000\u0000\u0086\u0087\u0005c\u0000\u0000\u0087\u0088\u0005"+
		"k\u0000\u0000\u0088\u0089\u0005g\u0000\u0000\u0089\u008a\u0005r\u0000"+
		"\u0000\u008a\u008b\u0005o\u0000\u0000\u008b\u008c\u0005u\u0000\u0000\u008c"+
		"\u008d\u0005n\u0000\u0000\u008d\u008e\u0005d\u0000\u0000\u008e\u008f\u0005"+
		":\u0000\u0000\u008f\u000b\u0001\u0000\u0000\u0000\u0090\u0091\u0005s\u0000"+
		"\u0000\u0091\u0092\u0005c\u0000\u0000\u0092\u0093\u0005o\u0000\u0000\u0093"+
		"\u0094\u0005r\u0000\u0000\u0094\u0095\u0005e\u0000\u0000\u0095\u0096\u0005"+
		":\u0000\u0000\u0096\r\u0001\u0000\u0000\u0000\u0097\u0098\u0005t\u0000"+
		"\u0000\u0098\u0099\u0005i\u0000\u0000\u0099\u009a\u0005m\u0000\u0000\u009a"+
		"\u009b\u0005e\u0000\u0000\u009b\u009c\u0005:\u0000\u0000\u009c\u000f\u0001"+
		"\u0000\u0000\u0000\u009d\u009e\u0005i\u0000\u0000\u009e\u009f\u0005n\u0000"+
		"\u0000\u009f\u00a0\u0005i\u0000\u0000\u00a0\u00a1\u0005t\u0000\u0000\u00a1"+
		"\u00a2\u0005:\u0000\u0000\u00a2\u0011\u0001\u0000\u0000\u0000\u00a3\u00a4"+
		"\u0005<\u0000\u0000\u00a4\u00a5\u0005o\u0000\u0000\u00a5\u00a6\u0005b"+
		"\u0000\u0000\u00a6\u00a7\u0005j\u0000\u0000\u00a7\u00a8\u0005e\u0000\u0000"+
		"\u00a8\u00a9\u0005c\u0000\u0000\u00a9\u00aa\u0005t\u0000\u0000\u00aa\u00ab"+
		"\u0005>\u0000\u0000\u00ab\u0013\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005"+
		"i\u0000\u0000\u00ad\u00ae\u0005m\u0000\u0000\u00ae\u00af\u0005a\u0000"+
		"\u0000\u00af\u00b0\u0005g\u0000\u0000\u00b0\u00b1\u0005e\u0000\u0000\u00b1"+
		"\u00b2\u0005:\u0000\u0000\u00b2\u00b6\u0001\u0000\u0000\u0000\u00b3\u00b5"+
		"\u0003`/\u0000\u00b4\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b8\u0001\u0000"+
		"\u0000\u0000\u00b6\u00b4\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000"+
		"\u0000\u0000\u00b7\u00b9\u0001\u0000\u0000\u0000\u00b8\u00b6\u0001\u0000"+
		"\u0000\u0000\u00b9\u00ba\u0006\t\u0000\u0000\u00ba\u0015\u0001\u0000\u0000"+
		"\u0000\u00bb\u00bc\u0005l\u0000\u0000\u00bc\u00bd\u0005i\u0000\u0000\u00bd"+
		"\u00be\u0005f\u0000\u0000\u00be\u00bf\u0005e\u0000\u0000\u00bf\u00c0\u0005"+
		":\u0000\u0000\u00c0\u0017\u0001\u0000\u0000\u0000\u00c1\u00c2\u0005p\u0000"+
		"\u0000\u00c2\u00c3\u0005o\u0000\u0000\u00c3\u00c4\u0005s\u0000\u0000\u00c4"+
		"\u00c5\u0005 \u0000\u0000\u00c5\u00c6\u0005x\u0000\u0000\u00c6\u00c7\u0005"+
		":\u0000\u0000\u00c7\u0019\u0001\u0000\u0000\u0000\u00c8\u00c9\u0005p\u0000"+
		"\u0000\u00c9\u00ca\u0005o\u0000\u0000\u00ca\u00cb\u0005s\u0000\u0000\u00cb"+
		"\u00cc\u0005 \u0000\u0000\u00cc\u00cd\u0005y\u0000\u0000\u00cd\u00ce\u0005"+
		":\u0000\u0000\u00ce\u001b\u0001\u0000\u0000\u0000\u00cf\u00d0\u0005s\u0000"+
		"\u0000\u00d0\u00d1\u0005p\u0000\u0000\u00d1\u00d2\u0005e\u0000\u0000\u00d2"+
		"\u00d3\u0005e\u0000\u0000\u00d3\u00d4\u0005d\u0000\u0000\u00d4\u00d5\u0005"+
		" \u0000\u0000\u00d5\u00d6\u0005x\u0000\u0000\u00d6\u00d7\u0005:\u0000"+
		"\u0000\u00d7\u001d\u0001\u0000\u0000\u0000\u00d8\u00d9\u0005s\u0000\u0000"+
		"\u00d9\u00da\u0005p\u0000\u0000\u00da\u00db\u0005e\u0000\u0000\u00db\u00dc"+
		"\u0005e\u0000\u0000\u00dc\u00dd\u0005d\u0000\u0000\u00dd\u00de\u0005 "+
		"\u0000\u0000\u00de\u00df\u0005y\u0000\u0000\u00df\u00e0\u0005:\u0000\u0000"+
		"\u00e0\u001f\u0001\u0000\u0000\u0000\u00e1\u00e2\u0005u\u0000\u0000\u00e2"+
		"\u00e3\u0005p\u0000\u0000\u00e3\u00e4\u0005d\u0000\u0000\u00e4\u00e5\u0005"+
		"a\u0000\u0000\u00e5\u00e6\u0005t\u0000\u0000\u00e6\u00e7\u0005e\u0000"+
		"\u0000\u00e7\u00e8\u0005:\u0000\u0000\u00e8!\u0001\u0000\u0000\u0000\u00e9"+
		"\u00ea\u0005n\u0000\u0000\u00ea\u00eb\u0005u\u0000\u0000\u00eb\u00ec\u0005"+
		"m\u0000\u0000\u00ec\u00ed\u0005b\u0000\u0000\u00ed\u00ee\u0005e\u0000"+
		"\u0000\u00ee\u00ef\u0005r\u0000\u0000\u00ef\u00f0\u0005:\u0000\u0000\u00f0"+
		"#\u0001\u0000\u0000\u0000\u00f1\u00f2\u0005m\u0000\u0000\u00f2\u00f3\u0005"+
		"a\u0000\u0000\u00f3\u00f4\u0005s\u0000\u0000\u00f4\u00f5\u0005s\u0000"+
		"\u0000\u00f5\u00f6\u0005:\u0000\u0000\u00f6%\u0001\u0000\u0000\u0000\u00f7"+
		"\u00f8\u0005b\u0000\u0000\u00f8\u00f9\u0005o\u0000\u0000\u00f9\u00fa\u0005"+
		"u\u0000\u0000\u00fa\u00fb\u0005n\u0000\u0000\u00fb\u00fc\u0005c\u0000"+
		"\u0000\u00fc\u00fd\u0005e\u0000\u0000\u00fd\u00fe\u0005:\u0000\u0000\u00fe"+
		"\'\u0001\u0000\u0000\u0000\u00ff\u0100\u0005h\u0000\u0000\u0100\u0101"+
		"\u0005a\u0000\u0000\u0101\u0102\u0005v\u0000\u0000\u0102\u0103\u0005e"+
		"\u0000\u0000\u0103\u0104\u0005 \u0000\u0000\u0104\u0105\u0005c\u0000\u0000"+
		"\u0105\u0106\u0005o\u0000\u0000\u0106\u0107\u0005l\u0000\u0000\u0107\u0108"+
		"\u0005l\u0000\u0000\u0108\u0109\u0005i\u0000\u0000\u0109\u010a\u0005s"+
		"\u0000\u0000\u010a\u010b\u0005i\u0000\u0000\u010b\u010c\u0005o\u0000\u0000"+
		"\u010c\u010d\u0005n\u0000\u0000\u010d\u010e\u0005:\u0000\u0000\u010e)"+
		"\u0001\u0000\u0000\u0000\u010f\u0110\u0005<\u0000\u0000\u0110\u0111\u0005"+
		"e\u0000\u0000\u0111\u0112\u0005v\u0000\u0000\u0112\u0113\u0005e\u0000"+
		"\u0000\u0113\u0114\u0005n\u0000\u0000\u0114\u0115\u0005t\u0000\u0000\u0115"+
		"\u0116\u0005>\u0000\u0000\u0116+\u0001\u0000\u0000\u0000\u0117\u0118\u0005"+
		"o\u0000\u0000\u0118\u0119\u0005b\u0000\u0000\u0119\u011a\u0005j\u0000"+
		"\u0000\u011a\u011b\u0005e\u0000\u0000\u011b\u011c\u0005c\u0000\u0000\u011c"+
		"\u011d\u0005t\u0000\u0000\u011d\u011e\u00051\u0000\u0000\u011e\u011f\u0005"+
		":\u0000\u0000\u011f-\u0001\u0000\u0000\u0000\u0120\u0121\u0005o\u0000"+
		"\u0000\u0121\u0122\u0005b\u0000\u0000\u0122\u0123\u0005j\u0000\u0000\u0123"+
		"\u0124\u0005e\u0000\u0000\u0124\u0125\u0005c\u0000\u0000\u0125\u0126\u0005"+
		"t\u0000\u0000\u0126\u0127\u00052\u0000\u0000\u0127\u0128\u0005:\u0000"+
		"\u0000\u0128/\u0001\u0000\u0000\u0000\u0129\u012a\u0005a\u0000\u0000\u012a"+
		"\u012b\u0005c\u0000\u0000\u012b\u012c\u0005t\u0000\u0000\u012c\u012d\u0005"+
		"i\u0000\u0000\u012d\u012e\u0005o\u0000\u0000\u012e\u012f\u0005n\u0000"+
		"\u0000\u012f\u0130\u0005s\u0000\u0000\u0130\u0131\u0005:\u0000\u0000\u0131"+
		"1\u0001\u0000\u0000\u0000\u0132\u0133\u0005<\u0000\u0000\u0133\u0134\u0005"+
		"f\u0000\u0000\u0134\u0135\u0005u\u0000\u0000\u0135\u0136\u0005n\u0000"+
		"\u0000\u0136\u0137\u0005c\u0000\u0000\u0137\u0138\u0005t\u0000\u0000\u0138"+
		"\u0139\u0005i\u0000\u0000\u0139\u013a\u0005o\u0000\u0000\u013a\u013b\u0005"+
		"n\u0000\u0000\u013b\u013c\u0005>\u0000\u0000\u013c3\u0001\u0000\u0000"+
		"\u0000\u013d\u013e\u0005p\u0000\u0000\u013e\u013f\u0005a\u0000\u0000\u013f"+
		"\u0140\u0005r\u0000\u0000\u0140\u0141\u0005a\u0000\u0000\u0141\u0142\u0005"+
		"m\u0000\u0000\u0142\u0143\u0005:\u0000\u0000\u01435\u0001\u0000\u0000"+
		"\u0000\u0144\u0145\u0005b\u0000\u0000\u0145\u0146\u0005o\u0000\u0000\u0146"+
		"\u0147\u0005d\u0000\u0000\u0147\u0148\u0005y\u0000\u0000\u0148\u0149\u0005"+
		":\u0000\u0000\u01497\u0001\u0000\u0000\u0000\u014a\u014c\u0007\u0000\u0000"+
		"\u0000\u014b\u014a\u0001\u0000\u0000\u0000\u014c\u014d\u0001\u0000\u0000"+
		"\u0000\u014d\u014b\u0001\u0000\u0000\u0000\u014d\u014e\u0001\u0000\u0000"+
		"\u0000\u014e9\u0001\u0000\u0000\u0000\u014f\u0150\u0005t\u0000\u0000\u0150"+
		"\u0151\u0005r\u0000\u0000\u0151\u0152\u0005u\u0000\u0000\u0152\u0159\u0005"+
		"e\u0000\u0000\u0153\u0154\u0005f\u0000\u0000\u0154\u0155\u0005a\u0000"+
		"\u0000\u0155\u0156\u0005l\u0000\u0000\u0156\u0157\u0005s\u0000\u0000\u0157"+
		"\u0159\u0005e\u0000\u0000\u0158\u014f\u0001\u0000\u0000\u0000\u0158\u0153"+
		"\u0001\u0000\u0000\u0000\u0159;\u0001\u0000\u0000\u0000\u015a\u015b\u0005"+
		";\u0000\u0000\u015b=\u0001\u0000\u0000\u0000\u015c\u015d\u0005,\u0000"+
		"\u0000\u015d?\u0001\u0000\u0000\u0000\u015e\u015f\u0005.\u0000\u0000\u015f"+
		"A\u0001\u0000\u0000\u0000\u0160\u0161\u0005(\u0000\u0000\u0161C\u0001"+
		"\u0000\u0000\u0000\u0162\u0163\u0005)\u0000\u0000\u0163E\u0001\u0000\u0000"+
		"\u0000\u0164\u0165\u0005[\u0000\u0000\u0165G\u0001\u0000\u0000\u0000\u0166"+
		"\u0167\u0005]\u0000\u0000\u0167I\u0001\u0000\u0000\u0000\u0168\u0169\u0005"+
		"i\u0000\u0000\u0169\u016a\u0005f\u0000\u0000\u016aK\u0001\u0000\u0000"+
		"\u0000\u016b\u016c\u0005{\u0000\u0000\u016cM\u0001\u0000\u0000\u0000\u016d"+
		"\u016e\u0005}\u0000\u0000\u016eO\u0001\u0000\u0000\u0000\u016f\u0170\u0005"+
		"+\u0000\u0000\u0170Q\u0001\u0000\u0000\u0000\u0171\u0172\u0005-\u0000"+
		"\u0000\u0172S\u0001\u0000\u0000\u0000\u0173\u0174\u0007\u0001\u0000\u0000"+
		"\u0174U\u0001\u0000\u0000\u0000\u0175\u0176\u0005=\u0000\u0000\u0176W"+
		"\u0001\u0000\u0000\u0000\u0177\u0178\u0005n\u0000\u0000\u0178\u0179\u0005"+
		"o\u0000\u0000\u0179\u017a\u0005t\u0000\u0000\u017aY\u0001\u0000\u0000"+
		"\u0000\u017b\u017c\u0005a\u0000\u0000\u017c\u017d\u0005n\u0000\u0000\u017d"+
		"\u0181\u0005d\u0000\u0000\u017e\u017f\u0005o\u0000\u0000\u017f\u0181\u0005"+
		"r\u0000\u0000\u0180\u017b\u0001\u0000\u0000\u0000\u0180\u017e\u0001\u0000"+
		"\u0000\u0000\u0181[\u0001\u0000\u0000\u0000\u0182\u0183\u0005=\u0000\u0000"+
		"\u0183\u018d\u0005=\u0000\u0000\u0184\u0185\u0005!\u0000\u0000\u0185\u018d"+
		"\u0005=\u0000\u0000\u0186\u018d\u0005>\u0000\u0000\u0187\u0188\u0005>"+
		"\u0000\u0000\u0188\u018d\u0005=\u0000\u0000\u0189\u018d\u0005<\u0000\u0000"+
		"\u018a\u018b\u0005<\u0000\u0000\u018b\u018d\u0005=\u0000\u0000\u018c\u0182"+
		"\u0001\u0000\u0000\u0000\u018c\u0184\u0001\u0000\u0000\u0000\u018c\u0186"+
		"\u0001\u0000\u0000\u0000\u018c\u0187\u0001\u0000\u0000\u0000\u018c\u0189"+
		"\u0001\u0000\u0000\u0000\u018c\u018a\u0001\u0000\u0000\u0000\u018d]\u0001"+
		"\u0000\u0000\u0000\u018e\u0192\u0007\u0002\u0000\u0000\u018f\u0191\u0007"+
		"\u0003\u0000\u0000\u0190\u018f\u0001\u0000\u0000\u0000\u0191\u0194\u0001"+
		"\u0000\u0000\u0000\u0192\u0190\u0001\u0000\u0000\u0000\u0192\u0193\u0001"+
		"\u0000\u0000\u0000\u0193_\u0001\u0000\u0000\u0000\u0194\u0192\u0001\u0000"+
		"\u0000\u0000\u0195\u0197\u0007\u0004\u0000\u0000\u0196\u0195\u0001\u0000"+
		"\u0000\u0000\u0197\u0198\u0001\u0000\u0000\u0000\u0198\u0196\u0001\u0000"+
		"\u0000\u0000\u0198\u0199\u0001\u0000\u0000\u0000\u0199\u019a\u0001\u0000"+
		"\u0000\u0000\u019a\u019b\u0006/\u0001\u0000\u019ba\u0001\u0000\u0000\u0000"+
		"\u019c\u019d\u0005/\u0000\u0000\u019d\u019e\u0005*\u0000\u0000\u019e\u01a2"+
		"\u0001\u0000\u0000\u0000\u019f\u01a1\t\u0000\u0000\u0000\u01a0\u019f\u0001"+
		"\u0000\u0000\u0000\u01a1\u01a4\u0001\u0000\u0000\u0000\u01a2\u01a3\u0001"+
		"\u0000\u0000\u0000\u01a2\u01a0\u0001\u0000\u0000\u0000\u01a3\u01a5\u0001"+
		"\u0000\u0000\u0000\u01a4\u01a2\u0001\u0000\u0000\u0000\u01a5\u01a6\u0005"+
		"*\u0000\u0000\u01a6\u01a7\u0005/\u0000\u0000\u01a7\u01a8\u0001\u0000\u0000"+
		"\u0000\u01a8\u01a9\u00060\u0001\u0000\u01a9c\u0001\u0000\u0000\u0000\u01aa"+
		"\u01ab\u0005/\u0000\u0000\u01ab\u01ac\u0005/\u0000\u0000\u01ac\u01b0\u0001"+
		"\u0000\u0000\u0000\u01ad\u01af\b\u0005\u0000\u0000\u01ae\u01ad\u0001\u0000"+
		"\u0000\u0000\u01af\u01b2\u0001\u0000\u0000\u0000\u01b0\u01ae\u0001\u0000"+
		"\u0000\u0000\u01b0\u01b1\u0001\u0000\u0000\u0000\u01b1\u01b3\u0001\u0000"+
		"\u0000\u0000\u01b2\u01b0\u0001\u0000\u0000\u0000\u01b3\u01b4\u00061\u0001"+
		"\u0000\u01b4e\u0001\u0000\u0000\u0000\u01b5\u01b7\b\u0006\u0000\u0000"+
		"\u01b6\u01b5\u0001\u0000\u0000\u0000\u01b7\u01ba\u0001\u0000\u0000\u0000"+
		"\u01b8\u01b6\u0001\u0000\u0000\u0000\u01b8\u01b9\u0001\u0000\u0000\u0000"+
		"\u01b9\u01bb\u0001\u0000\u0000\u0000\u01ba\u01b8\u0001\u0000\u0000\u0000"+
		"\u01bb\u01bc\u00062\u0002\u0000\u01bcg\u0001\u0000\u0000\u0000\f\u0000"+
		"\u0001\u00b6\u014d\u0158\u0180\u018c\u0192\u0198\u01a2\u01b0\u01b8\u0003"+
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