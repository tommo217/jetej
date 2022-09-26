const keywords=['game:', 'object:', 'event:', 'function:'];
export const languageDef = {
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

export const languageConfig = {
  comments: {
    lineComment: "//",
  }
}

const languageTheme = {
  base: "vs",
  rules: [
    { token: 'keyword', foreground: '#FF6600', fontStyle: 'bold'}
  ]
}