import TrackData from '../models/track-data';
import BaseAdapter from './base-adapter';

export default class LogAdapter implements BaseAdapter {
  public track(trackData: TrackData): void {
    console.warn('Log Adapter:', trackData); // tslint:disable-line:no-console
  }
}
