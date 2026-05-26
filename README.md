
Comic Relief Components Library
--------------

[![GitHub Actions](https://github.com/comicrelief/component-library/actions/workflows/main.yml/badge.svg)](https://github.com/comicrelief/component-library/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Recent Rebuild Notes (June 2026):
#### All diffs in main exported files are non-functional:
- Styled-Components & syntax updates - CSS output is identical, issues are around assumed "&" in nested CSS.
- Confetti updated to newer react-canvas-confetti API - new prop names to activate confetti.
- _TriggerConfetti.js removed - no current usage, was likely a private helper no longer needed.


### General Usage
#### Main Dependencies
- Vite
- Styled Components

#### Install the package
```
$ yarn add @comicrelief/component-library
```

#### Wrap your app with the ThemeProvider and crTheme
```
import { ThemeProvider, crTheme } from '@comicrelief/component-library';
```

#### Import components
```
import { HeroBanner } from '@comicrelief/component-library';
```

### Develop

To install CR-CL locally, run:

```
$ yarn install
```

To start the dev build and server:
```
$ yarn dev
```

To test:
```
$ yarn test:unit
```
_Test will run through all Jest tests and watch for any changes on snapshots._

To update snapshots with desired changes brought in through your work:
```
$ yarn test:unit:update
```

To publish
```
$ yarn publish:npm
```

### Testing

Install Playwright:
```
yarn playwright install
```

Run the tests:
```
yarn test:e2e:local
```
