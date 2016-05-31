import Stage from 'models/stage';

export default class Attacher {

  static attach(stageData) {
    const stage = Stage(stageData);

    /* eslint-disable no-console */

    console.log('Selector:', stage.getSelector());
    console.log('Travel name:', stage.getTravel().getName());
    console.log('When:', stage);
  }

}
