// Register babel to trasnpile before tests run.
require('babel-register')();

// Ignore file types that Mocha doesn't understand.
require.extensions['.css'] = function(){};
