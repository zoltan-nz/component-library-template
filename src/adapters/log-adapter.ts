import TrackData from '../models/track-data';
import BaseAdapter from './base-adapter';

export default class LogAdapter implements BaseAdapter {
  public track(data: TrackData): void {
    console.warn('Log Adapter:', data); // tslint:disable-line:no-console
  }
}
