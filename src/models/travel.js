import travelsData from 'data/travels';
import _ from 'lodash';

export default class Travel {

  constructor(dataObject = {}) {
    this._id = dataObject.id || 0;
    this._name = dataObject.name || 'Empty';
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  static findAll() {
    return travelsData;
  }

  static findById(id) {
    return Travel(_.find(travelsData, {id: id}));
  }
}
