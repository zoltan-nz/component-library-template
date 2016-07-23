let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class LogAdapter {

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw 'Cannot construct singleton';
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new LogAdapter(singletonEnforcer);
    }
    return this[singleton];
  }

  static send(message) {
    // eslint-disable-next-line no-console
    console.warn('Log Adapter:', message);
  }
}
