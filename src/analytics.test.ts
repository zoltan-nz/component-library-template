import Analytics from '../src/analytics';

jest.mock('../src/adapters/log-adapter');

describe('./analytics', () => {
  let analytics: Analytics;

  beforeEach(() => (analytics = new Analytics()));

  it('creates an instance', () => {
    expect.assertions(1);

    expect(analytics).toBeInstanceOf(Analytics);
  });

  it('tracks page view with #trackPage', () => {
    expect.assertions(1);

    analytics.trackPage({ pageName: 'test-page-name' });
    expect(analytics.adapter.trackPage).toHaveBeenCalledWith({ pageName: 'test-page-name' });
  });

  it('tracks link click with #trackLink', () => {
    expect.assertions(1);

    analytics.trackLink({ linkName: 'test-link-name' });
    expect(analytics.adapter.trackLink).toHaveBeenCalledWith({ linkName: 'test-link-name' });
  });
});
