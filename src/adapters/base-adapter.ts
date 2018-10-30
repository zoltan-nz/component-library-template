import TrackData from '../models/track-data';

abstract class BaseAdapter {
  public abstract track(data: TrackData): void;
}

export default BaseAdapter;
