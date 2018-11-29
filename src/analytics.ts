import BaseAdapter from './adapters/base-adapter';
import LogAdapter from './adapters/log-adapter';
import Track from './models/track';

interface AnalyticsOptions {
  adapter: BaseAdapter;
}

export default class Analytics {
  public readonly adapter: BaseAdapter = new LogAdapter();

  constructor(options?: AnalyticsOptions) {
    Object.assign(this, options);
  }

  public pageTrack(track: Track) {
    this.adapter.track(track);
  }
}
