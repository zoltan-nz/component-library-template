import LegacyAdapter from './adapters/legacy-adapter';
import Analytics from './analytics';

const analytics = new Analytics({ adapter: new LegacyAdapter() });
analytics.pageTrack({ pageName: 'sample-data' });
