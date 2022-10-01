var editorContent = '\/\/ Start writing your game...  '

const keywords=['game:', 'object:', 'event:', 'function:'];
const languageDef = {
  keywords, 
  tokenizer: {
    root: [
      [/[a-zA-Z ]+:/, {
        cases: {
          '@keywords': 'keyword',
          '@default': 'variable',
        }
      }],
      [/".*?"/, 'string'],
      [/\/\/.*/, 'comment'],
    ]
  }
}

const languageConfig = {
  comments: {
    lineComment: "//",
  }
}

const languageTheme = {
  base: "vs",
  inherit: true,
  rules: [
    { token: 'keyword', foreground: '#FF6600', fontStyle: 'bold'}
  ]
}


function configLanguage () {
  // Register a new language
  monaco.languages.register({ id: 'jetej' })
  // Register a tokens provider for the language
  monaco.languages.setMonarchTokensProvider('jetej', languageDef)
  // Set editor themeing
  monaco.editor.defineTheme('jetejTheme', languageTheme)
}

function createEditor () {
  configLanguage()
  monaco.editor.create(document.getElementById('code-block'), {
    value: editorContent,
    language: 'jetej',
    theme: 'jetejTheme',
    minimap: {enabled: false},
  });
}

require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' }});
require(["vs/editor/editor.main"], createEditor);