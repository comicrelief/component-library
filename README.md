Comic Relief React Component Library
--------------

[![GitHub Actions](https://github.com/comicrelief/component-library/actions/workflows/main.yml/badge.svg)](https://github.com/comicrelief/component-library/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React components to be shared across Comic Relief applications

### Use

CR-CL has a dependency of Styled-components.

#### Install the package
```
$ yarn add @comicrelief/component-library
```

#### Theming

Wrap your app with `ThemeProvider` and `crTheme`. For the smallest dependency graph, import from the `theme` entry (see [Subpath entrypoints](#subpath-entrypoints) below) instead of the package root.

```
import { ThemeProvider, crTheme } from '@comicrelief/component-library/theme';
```

The root import is still valid and exposes the same tokens:

```
import { ThemeProvider, crTheme } from '@comicrelief/component-library';
```

#### Subpath entrypoints

The package exposes named entrypoints so you can import only the slice you need. Prefer these over the root barrel when you care about bundle size.

- **`@comicrelief/component-library/theme`** — `ThemeProvider`, `crTheme`, and theme tokens (`zIndex`, `allBreakpoints`, `spacing`, `containers`, `hideVisually`, `allowListed`, `animations`, …).

- **`@comicrelief/component-library/atoms`** — `Text`, `Link`, `Button`, `Input`, `Picture`, `Logo`, `Checkbox`, `RadioButton`, and the rest of the design-system atoms (see `src/components/Atoms` in this repo).

- **`@comicrelief/component-library/molecules`** — Molecules such as `Card`, `Box`, `HeroBanner`, `SingleMessage`, `Typeahead`, `InfoBanner`, and similar building blocks (not full site chrome such as the global header).

- **`@comicrelief/component-library/organisms`** — Larger UI: `Header`, `Header2025`, `Footer`, `Donate`, carousels, `MarketingPreferencesDS`, `DynamicGallery`, and other composed features.

Example: atoms + theme in a small app or route:

```
import { crTheme, ThemeProvider } from '@comicrelief/component-library/theme';
import { Text, Link, Button } from '@comicrelief/component-library/atoms';
```

Example: a molecule and an organism in separate features:

```
import { HeroBanner } from '@comicrelief/component-library/molecules';
import { WYMDCarousel } from '@comicrelief/component-library/organisms';
```

The root entry re-exports everything; use it when you want a single import path and are not optimizing for chunk size.

```
import { crTheme, ThemeProvider, Text, DynamicGallery } from '@comicrelief/component-library';
```

### Develop

To install CR-CL locally, run:

```
$ yarn install
```

To start the dev build and server:
```
$ yarn styleguide
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
