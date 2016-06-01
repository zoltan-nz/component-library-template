import _ from 'lodash';
import stageTypeData from 'data/types';

export default class StageType {

  constructor(dataObject) {

    const obj = dataObject || {};

    this._id = obj.id || 0;
    this._name = obj.name || 'Empty';
  }

  findById(id) {
    return this(_.find(stageTypeData, {id: id}));
  }
  
  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }
}
