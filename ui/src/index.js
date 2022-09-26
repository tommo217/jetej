import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';


// monaco.languages.register({id: 'jetej'});
// const keywords=['game', 'object', 'event', 'function'];
// monaco.languages.setMonarchTokensProvider('jetej', {
//   keywords, 
//   tokenizer: {
//     root: [
//       [/[a-zA-Z ]+:/, {
//         cases: {
//           '@keywords': 'keyword',
//           '@default': 'variable',
//         }
//       }],
//       [/".*?"/, 'string'],
//       [/\/\//, 'comment'],
//     ]
//   }
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);