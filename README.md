# Marketing Playground

[![Build Status](https://travis-ci.com/zoltan-nz/marketing-playground.svg?branch=master)](https://travis-ci.com/zoltan-nz/marketing-playground)

## Todo

- [x] Setup TypeScript
- [x] Setup Prettier
- [x] Setup build tools: `tsc`, `rollup`
- [x] Setup acceptance test: `Pupetter`, `Jest`
- [x] Add Vendor libraries
- [x] Acceptance test for a dummy React App
- [x] Acceptance test for a static "legacy" page
- [ ] Acceptance test for a dummy Ember App

## Using legacy vendor file in TypeScript

- [Library Structures](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)
- [global.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html)

## Mocking legacy code which added to global

```typescript
const legacyTrackerMock = jest
  .fn()
  .mockImplementation(() => ({ version: '1', trackLink: jest.fn(), trackPage: jest.fn(), url: () => 'asdf' }));
(global as any).LegacyTracker = mocked(legacyTrackerMock);
```
