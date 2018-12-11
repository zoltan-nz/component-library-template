import { mocked } from 'ts-jest';
import LegacyAdapter from '../../src/adapters/legacy-adapter';

// @ts-ignore
import { LegacyTracker } from '../../vendor/legacy-tracker';

const legacyTrackerMock = jest
  .fn<LegacyTracker, []>()
  .mockImplementation(() => ({ version: '1', trackLink: jest.fn(), trackPage: jest.fn(), url: () => 'asdf' }));
(global as any).LegacyTracker = mocked(legacyTrackerMock);

describe('./adapters/legacy-adapter', () => {
  let adapter: LegacyAdapter;

  beforeEach(() => (adapter = new LegacyAdapter()));

  it('creates an instance', () => {
    expect.assertions(2);

    expect(adapter).toBeDefined();
    expect(adapter.tracker).toHaveProperty('trackPage');
  });

  it('#trackPage', () => {
    expect.assertions(2);

    adapter.trackPage({ pageName: 'test-page' });
    expect(adapter.tracker.pageName).toEqual('test-page');
    expect(adapter.tracker.trackPage).toHaveBeenCalled();
  });

  it('#trackLink', () => {
    expect.assertions(2);

    adapter.trackLink({ linkName: 'test-link' });
    expect(adapter.tracker.linkName).toEqual('test-link');
    expect(adapter.tracker.trackLink).toHaveBeenCalled();
  });

  it('provides default page and link names', () => {
    adapter.trackLink();
    adapter.trackPage();

    expect(adapter.tracker.pageName).toBe('not specified');
    expect(adapter.tracker.linkName).toBe('not specified');
  });
});
