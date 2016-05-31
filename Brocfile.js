const babel = require('broccoli-babel-transpiler');
const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');

// // const funnel = require('broccoli-funnel');
// // const concat = require('broccoli-concat');
// // const mergeTrees = require('broccoli-merge-trees');
// const babel = require('broccoli-babel-transpiler');
// const pkg = require('./package.json');
//
// const sourceRoot = 'src';
// const moduleId = 'Analytics';
//
const options = {
  modules: 'umd',
  moduleIds: true,
};
//
// const lib = babel(sourceRoot, options);
//
// module.exports = lib;



// Babel transpiler

// filter trees (subsets of files)

// concatenate trees

// merge trees
var mergeTrees = require('broccoli-merge-trees');

// Transpile the source files
var appJs = babel('src', options);

// Concatenate all the JS files into a single file
appJs = concat(appJs, {
  // we specify a concatenation order
  inputFiles: ['**/*.js'],
  outputFile: '/js/my-app.js'
});

// Grab the index file
var index = funnel('src', {files: ['index.html']});

// Grab all our trees and
// export them as a single and final tree
module.exports = mergeTrees([index, appJs]);
