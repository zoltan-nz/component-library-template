import BaseAdapter from './adapters/base-adapter';
import LogAdapter from './adapters/log-adapter';
import LinkTrack from './models/link-track';
import PageTrack from './models/page-track';

interface AnalyticsOptions {
  adapter: BaseAdapter;
}

export default class Analytics {
  public readonly adapter: BaseAdapter = new LogAdapter();

  constructor(options?: AnalyticsOptions) {
    Object.assign(this, options);
  }

  public trackPage(track: PageTrack) {
    this.adapter.trackPage(track);
  }

  public trackLink(track: LinkTrack) {
    this.adapter.trackLink(track);
  }
}
