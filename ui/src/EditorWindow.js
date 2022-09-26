// CodeEditorWindow.js

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { languageDef, languageConfig } from "./LanguageConfig";

/**
 * Set up syntax highlighting for jetej
 */
const beforeMount = (monaco) => {
  console.log('editorwillmount called')
  if (!monaco.languages.getLanguages().some(({ id }) => id === 'jetej')) {
    // Register a new language
    monaco.languages.register({ id: 'jetej' })
    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('jetej', languageDef)
    // Set editor themeing
    monaco.languages.setLanguageConfiguration('jetej', languageConfig)
  }
}

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
  };

  return (
    <div className= {language || "javascript"}>
      <Editor
        height="85vh"
        width="100%"
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        beforeMount={beforeMount}
        onMount={(editor, monaco) => {console.log(monaco.languages.getLanguages())}}
      />
    </div>
  );
};
export default CodeEditorWindow;