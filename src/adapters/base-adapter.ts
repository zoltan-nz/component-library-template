import TrackData from '../models/track-data';

abstract class BaseAdapter {
  public abstract track(trackData: TrackData): void;
}

export default BaseAdapter;
