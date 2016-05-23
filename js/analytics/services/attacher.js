define('analytics/services/attacher', ['analytics/models/travel'], function(Travel) {

  function attacherService() {

    return {
      attach: function(travelData) {
        console.log('Attached:', Travel(travelData).getName());
      }
    }
  }
  
  return attacherService;
});