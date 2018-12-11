import LinkTrack from '../models/link-track';
import PageTrack from '../models/page-track';
import BaseAdapter from './base-adapter';

export default class LegacyAdapter extends BaseAdapter {
  public tracker: LegacyTracker;

  constructor() {
    super();
    this.tracker = new LegacyTracker();

    this.tracker.clientId = 'CLIENT_ID';
    this.tracker.server = 'http://localhost/tracker/';
  }

  public trackPage(pageTrack: PageTrack = { pageName: 'not specified' }): void {
    const { pageName } = pageTrack;

    this.tracker.pageName = pageName;
    this.tracker.trackPage();
  }

  public trackLink(linkTrack: LinkTrack = { linkName: 'not specified' }): void {
    const { linkName } = linkTrack;

    this.tracker.linkName = linkName;
    this.tracker.trackLink();
  }
}
