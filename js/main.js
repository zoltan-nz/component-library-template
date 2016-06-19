requirejs.config({

  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'lodash': '../bower_components/lodash/lodash'
  }
});

require(['app', 'travels', 'analytics'])();
