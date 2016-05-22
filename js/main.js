requirejs.config({
  baseUrl: './js',

  paths: {
    'jquery': 'vendor/jquery',

    'app': 'app/app'
  }
  
});

require(['app'])();