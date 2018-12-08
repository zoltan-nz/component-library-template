import Analytics from '../src/analytics';

jest.mock('../src/adapters/log-adapter');

describe('./analytics', () => {
  it('creates an instance', () => {
    expect.assertions(1);
    const analytics = new Analytics();

    expect(analytics).toBeInstanceOf(Analytics);
  });

  it('tracks', () => {
    expect.assertions(1);
    const analytics = new Analytics();

    analytics.pageTrack({ pageName: 'test-page-name' });
    expect(analytics.adapter.track).toHaveBeenCalled();
  });
});
