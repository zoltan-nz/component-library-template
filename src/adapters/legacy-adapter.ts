import Track from '../models/track';
import BaseAdapter from './base-adapter';

export default class LegacyAdapter extends BaseAdapter {
  private tracker: LegacyTracker;

  constructor() {
    super();
    this.tracker = new LegacyTracker();

    this.tracker.clientId = 'CLIENT_ID';
    this.tracker.server = 'http://localhost/tracker/';
  }

  public track(pageTrack: Track): void {
    const { pageName = 'not specified' } = pageTrack;

    this.tracker.pageName = pageName;
    this.tracker.trackPage();
  }
}
