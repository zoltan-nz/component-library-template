import StageType from 'models/stage-type';
import Travel from 'models/travel';

export default class Stage {

  constructor(stageData = {}) {
    this._id = stageData.id || 0;
    this._selector = stageData.selector || 'input';
    this._when = stageData.when || 'onchange';
    this._travelId = stageData.travel_id || 0;
    this._stageTypeId = stageData.stage_type_id || 0;
  }

  getId() {
    return this._id;
  }

  getWhen() {
    return this._when;
  }

  getSelector() {
    return this._selector;
  }

  getTravel() {
    return Travel.findById(this._travelId);
  }

  getType() {
    return StageType.findById(this._stageTypeId);
  }
}
