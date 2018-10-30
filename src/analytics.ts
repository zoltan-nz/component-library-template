import BaseAdapter from './adapters/base-adapter';
import LogAdapter from './adapters/log-adapter';

interface AnalyticsOptions {
  adapter: BaseAdapter;
}

export default class Analytics {
  private adapter: BaseAdapter;

  constructor(options: AnalyticsOptions = { adapter: new LogAdapter() }) {
    this.adapter = options.adapter;
  }

  public pageTrack(num: number) {
    this.adapter.track({ number1: 1, number2: num });
  }
}
