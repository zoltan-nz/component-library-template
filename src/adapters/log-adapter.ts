import LinkTrack from '../models/link-track';
import PageTrack from '../models/page-track';
import BaseAdapter from './base-adapter';

export default class LogAdapter implements BaseAdapter {
  public trackLink(trackData: LinkTrack): void {
    console.warn('log-adapter:link-tracking:', JSON.stringify(trackData)); // tslint:disable-line:no-console
  }

  public trackPage(trackData: PageTrack): void {
    console.warn('log-adapter:page-tracking:', JSON.stringify(trackData)); // tslint:disable-line:no-console
  }
}
