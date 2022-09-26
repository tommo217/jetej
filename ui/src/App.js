import React from 'react';
import './css/App.css';
import CodeEditorWindow from './EditorWindow';
import OutputWindow from './OutputWindow';
import Button from '@mui/material/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function App() {
  function onRun() {
    
  }

  return (
    <React.Fragment>
      <div className="toolbar toolbar-container">
        <Button 
          variant="contained" color="success" startIcon={<DoubleArrowIcon/>}
          onClick={onRun}
        >
          Run
        </Button>
      </div>
      <div className="App code-window-container">
        <div className="editor-container">
          <CodeEditorWindow
            theme={"vs-dark"}
            language={'jetej'}
          />
        </div>
        <div className='output-container'>
          <OutputWindow
            output="Compiled result here"
            compileStatus={1}
          />
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
