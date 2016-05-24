define(['analytics/models/when'], function(when) {
  return [
    // Page Visit, travel_id: 1
    {id: 1, selector: 'body', when: when.ONLOAD, travel_id: 1, stage_type_id: 1},
    {id: 2, selector: 'body', when: when.ONUNLOAD, travel_id: 1, stage_type_id: 3},
    
    // Form Usage, travel_id: 2
    {id: 3, selector: '#enterNameForm', when: when.ONCLICK, travel_id: 2, stage_type_id: 1},
    {id: 4, selector: '#name', when: when.CHANGE, travel_id: 2, stage_type_id: 2},
    {id: 5, selector: '#email', when: when.CHANGE, travel_id: 2, stage_type_id: 2},
    {id: 6, selector: 'button[type="submit"]', when: when.ONCLICK, travel_id: 2, stage_type_id: 3}
  ]
});