import Route from '@ember/routing/route';
import { on } from '@ember/object/evented';
import { assert } from '@ember/debug';
import Analytics from 'marketing-playground';
import { LegacyAdapter } from 'marketing-playground';

export default Route.extend({
  trackPageView: on('didTransition', function() {
    const analytics = new Analytics({ adapter: LegacyAdapter, server: 'http://localhost:3001' });

    assert('Could not find the analytics package.', analytics);

    const pageName = this.get.currentRouteName;
    analytics.trackPage({ pageName });
  }),
});
