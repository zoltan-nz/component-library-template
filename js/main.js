requirejs.config({
  baseUrl: './js',

  paths: {
    'jquery': 'vendor/jquery',
    'lodash': 'vendor/lodash',
  }
});

require(['app/app'])();