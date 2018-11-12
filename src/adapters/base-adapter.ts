import Track from '../models/track';

abstract class BaseAdapter {
  public abstract track(trackData: Track): void;
}

export default BaseAdapter;
