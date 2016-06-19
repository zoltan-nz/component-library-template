(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    $.extend(true, App, {
        Analytics: {
          Models: {
            Travel: factory()
          }
        }
      }
    );
  }
}(function() {

  function Travel(name) {
    console.log('Travel is called');
    var id = Math.floor((Math.random() * 100) + 1);
    var stageStore = [];

    return {
      getId: function() {
        return id;
      },

      addStage: function(newStage) {
        stageStore.push();
        console.log(stageStore);
      }
    }
  }

  return Travel;
}));
