import TrackData from '../models/track-data';
import BaseAdapter from './base-adapter';

export default class LegacyAdapter extends BaseAdapter {
  private tracker: LegacyCalculator;

  constructor() {
    super();
    this.tracker = new LegacyCalculator();
  }

  public track(trackData: TrackData): void {
    // tslint:disable-next-line:no-console
    console.log(this.tracker.summerizer(trackData.number1, trackData.number2));
  }
}
