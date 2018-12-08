import { mocked } from 'ts-jest';
import LegacyAdapter from '../../src/adapters/legacy-adapter';

// @ts-ignore
import { legacyTracker } from '../../vendor/legacy-tracker';

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
});
