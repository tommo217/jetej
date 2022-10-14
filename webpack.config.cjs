const path = require('path');

module.exports = {
  mode: 'production',
  entry: './Compiler/Compiler.js',
  output: {
    path: path.resolve(__dirname, './Game/dist/'),
    filename: 'compiler.js',
    library: 'Compiler',
  },

};