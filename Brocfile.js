const babel = require('broccoli-babel-transpiler');
const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const merge = require('broccoli-merge-trees');
const liveReload = require('broccoli-inject-livereload');
const serveLiveReload = require('broccoli-live-reload');
const log = require('broccoli-stew').log;


let publicFiles = liveReload('public');

publicFiles = funnel(publicFiles, {
  files: ['index.html']
});

// serveLiveReload(publicFiles, {path: 'public', include: ['*.html']});

const vendorFiles = [
  'jquery.js',
  'lodash.js'
];

let vendorScripts = merge([
  'bower_components/jquery/dist',
  'bower_components/lodash/'
], { overwrite: true });


vendorScripts = funnel(vendorScripts, {
  files: vendorFiles,
  annotation: 'Funnel: vendorFiles'
});

vendorScripts = concat(vendorScripts, {
  inputFiles: vendorFiles,
  outputFile: '/vendor.js'
});

const babelOptions = {
  modules: 'umd',
  moduleIds: true
};

let libScript = babel('src', babelOptions);

libScript = concat(libScript, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/analytics.js'
});

// serveLiveReload(publicFiles, serveLiveReload({
//   path: './',
//   include: [
//     '**/*.js',
//     '**/*.html'
//   ]
// }));

module.exports = merge([
  publicFiles,
  vendorScripts,
  libScript
]);
