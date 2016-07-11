(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    $.extend(true, App, {
        Analytics: {
          Models: {
            Stage: factory(jQuery)
          }
        }
      }
    );
  }
}(function($) {

  /**
   * @namespace app/analytics/services
   * @param stageObject
   * @return {{getName: getName, getSelector: getSelector, getType: getType, getWhen: getWhen}}
   * @constructor
   */
  function Stage(stageObject) {

    var obj = stageObject || {};

    var name = obj.name || '';
    var selector = obj.selector || '';
    var type = obj.type || '';
    var when = obj.when || '';

    var $element = $(selector);

    return {

      getElement: function() {
        return $element;
      },

      getName: function() {
        return name;
      },

      getSelector: function() {
        return selector;
      },

      getType: function() {
        return type;
      },

      getWhen: function() {
        return when;
      },

      callbackData: function() {
        return {
          name: name,
          type: type
        }
      }
    }
  }

  return Stage;
}));
