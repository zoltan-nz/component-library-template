define('analytics/services/attacher', ['analytics/models/stage'], function(Stage) {

  //**
  
  function attacherService() {
    
    return {
      attach: function(stageData) {
        var stageRecord = Stage(stageData);
        console.log('Selector:', stageRecord.getSelector());
        console.log('Travel name:', stageRecord.getTravel().getName());
        console.log('When:', stageRecord)
      }
    }
  }
  
  return attacherService;
});