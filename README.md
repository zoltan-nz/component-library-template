# Marketing Playground

[![Build Status](https://travis-ci.com/zoltan-nz/marketing-playground.svg?branch=master)](https://travis-ci.com/zoltan-nz/marketing-playground)

## Todo

- [x] Setup TypeScript
- [x] Setup Prettier
- [x] Setup build tools: `tsc`, `rollup`
- [ ] Setup test runners: `TestCafe`, `Jest`
- [x] Add Vendor libraries.

## Using legacy vendor file in TypeScript

- [Library Structures](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)
- [global.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html)

## Mocking legacy code which added to global

```typescript
const legacyTrackerMock = jest
  .fn<LegacyTracker, []>()
  .mockImplementation(() => ({ version: '1', trackLink: jest.fn(), trackPage: jest.fn(), url: () => 'asdf' }));
(global as any).LegacyTracker = mocked(legacyTrackerMock);
```
