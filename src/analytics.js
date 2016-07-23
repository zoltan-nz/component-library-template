import LogAdapter from 'adapters/log';
import AttacherService from 'services/attacher';

export default class Analytics {

  constructor(options = {}) {
    debugger;
    const opt = options || {};
    this._adapter = opt.adapter || LogAdapter;
    this._stages = opt.stages || {};

    this._attacherService = AttacherService();
  }

  init() {
    this._attacherService.attach(this._stages[1]);
  }
}
