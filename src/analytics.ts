import BaseAdapter from './adapters/base-adapter';
import LogAdapter from './adapters/log-adapter';

interface AnalyticsOptions {
  adapter?: BaseAdapter;
}

export default class Analytics {
  private adapter: BaseAdapter;

  constructor(options: AnalyticsOptions) {
    this.adapter = options.adapter || new LogAdapter();
  }

  public pageTrack(pageName: string) {
    const trackData = {
      pageName,
    };

    this.adapter.track(trackData);
  }
}
