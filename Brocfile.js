const babel = require('broccoli-babel-transpiler');
const Funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');
const liveReload = require('broccoli-inject-livereload');
const log = require('broccoli-stew').log;

// Use ember-cli for running the development environment
// it runs livereload server on port 49152
let publicFiles = liveReload('src', {
  files: ['index.html'],
  port: 49152
});

publicFiles = new Funnel(publicFiles);

const vendorFiles = [
  'loader.js',
  'jquery.js',
  'lodash.js'
];

let vendorScripts = merge([
  'bower_components/loader.js/lib/loader',
  'bower_components/jquery/dist',
  'bower_components/lodash/'
], { overwrite: true });

vendorScripts = new Funnel(vendorScripts, {
  files: vendorFiles,
  annotation: 'Funnel: vendorFiles'
});

vendorScripts = concat(vendorScripts, {
  inputFiles: vendorFiles,
  outputFile: '/vendor.js'
});

const babelOptions = {
  modules: 'amd',
  moduleIds: true
};

let libScript = babel('src', babelOptions);

libScript = concat(libScript, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/analytics.js'
});

module.exports = merge([
  publicFiles,
  vendorScripts,
  libScript
]);
