requirejs.config({

  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'bootstrap': {
      deps: ['jquery']
    }
  },

  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'lodash': '../bower_components/lodash/lodash',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap'
  }
});

require(['app', 'data/travels', 'analytics', 'bootstrap'])();
