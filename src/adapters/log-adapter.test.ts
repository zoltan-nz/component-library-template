import LogAdapter from './log-adapter';

describe('LogAdapter for debugging', () => {
  let adapter: LogAdapter;

  beforeEach(() => (adapter = new LogAdapter()));

  it('logs page tracking with #trackPage', () => {
    expect.assertions(1);

    console.warn = jest.fn(); // tslint:disable-line:no-console
    adapter.trackPage({ pageName: 'log-page-name' });
    expect(console.warn).toHaveBeenCalledWith('log-adapter:page-tracking:', '{"pageName":"log-page-name"}'); // tslint:disable-line:no-console
  });

  it('logs link tracking with #trackLink', () => {
    expect.assertions(1);

    console.warn = jest.fn(); // tslint:disable-line:no-console
    adapter.trackLink({ linkName: 'log-link-name' });
    expect(console.warn).toHaveBeenCalledWith('log-adapter:link-tracking:', '{"linkName":"log-link-name"}'); // tslint:disable-line:no-console
  });
});
