import AdapterConfig, { DEFAULT_CLIENT_ID, DEFAULT_SERVER } from '../models/adapter-config';
import LinkTrack from '../models/link-track';
import PageTrack from '../models/page-track';
import BaseAdapter from './base-adapter';

const defaultAdapterConfig = { clientId: DEFAULT_CLIENT_ID, server: DEFAULT_SERVER };

export default class LegacyAdapter extends BaseAdapter {
  public tracker: LegacyTracker;

  constructor(public adapterConfig: AdapterConfig = defaultAdapterConfig) {
    super();
    const { clientId, server } = adapterConfig;
    this.tracker = new LegacyTracker();

    this.tracker.clientId = clientId;
    this.tracker.server = server;
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
