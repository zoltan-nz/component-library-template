import LinkTrack from '../models/link-track';
import PageTrack from '../models/page-track';

abstract class BaseAdapter {
  public abstract trackPage(trackData: PageTrack): void;
  public abstract trackLink(trackData: LinkTrack): void;
}

export default BaseAdapter;
