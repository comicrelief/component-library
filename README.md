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

- **`@comicrelief/component-library/atoms`** — This is split into these sub-categories: **`atoms/form`**, **`atoms/actions`**, **`atoms/text`**, **`atoms/media`**, **`atoms/brand`**, **`atoms/navigation`**, **`atoms/icons`**, **`atoms/effects`**.

- **`@comicrelief/component-library/molecules`** — This is split into these sub-categories: **`molecules/search-lookup`**, **`molecules/cards-ctas`**, **`molecules/banners-heroes`**, **`molecules/engagement`**, **`molecules/footer`** , **`molecules/icons`** 

- **`@comicrelief/component-library/organisms`** — This is split into these sub-categories: **`organisms/headers`**, **`organisms/footers`**, **`organisms/compliance`**, **`organisms/donation`**, **`organisms/email-contact`**, **`organisms/media`**.

If desired you can import the whole sections (`/atoms`, `/molecules`, `/organisms`) which re-export the same set of names as the subpaths combined.

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

#### Tree shaking hint 'sideEffects'

`package.json` sets `sideEffects` so Webpack 4+ and similar tools can treat most of the published JavaScript as free of import time side effects, while still keeping anything that is: all `*.css` files inside this package, and a few modules that pull in CSS files from dependencies (like `lazysizes` on `Picture`, carousel CSS from `pure-react-carousel`, and the range-slider stylesheet from `react-range-slider-input` on the ImpactSlider). 

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
