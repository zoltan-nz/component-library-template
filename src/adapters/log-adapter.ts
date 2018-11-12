import Track from '../models/track';
import BaseAdapter from './base-adapter';

export default class LogAdapter implements BaseAdapter {
  public track(trackData: Track): void {
    console.warn('Log Adapter:', trackData); // tslint:disable-line:no-console
  }
}
