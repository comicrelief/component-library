Comic Relief React Component Library 
--------------

[![CircleCI](https://circleci.com/gh/comicrelief/component-library.svg?style=svg)](https://circleci.com/gh/comicrelief/component-library)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React components to be shared cross Comic Relief applications

### Use

CR-CL has a dependency of Styled-components.

#### Install the package
```
$ yarn add @comicrelief/component-library
```

#### Wrap your app with the ThemeProvider and crTheme
```
import { ThemeProvider, crTheme } from '@comic-relief/component-library';
```

#### Import components
```
import { HeroBanner } from '@comic-relief/component-library';
```

### Develop

To install CR-CL locally run

```
$ yarn install
```

To start
```
$ yarn styleguide
```

To test
```
$ yarn test
```
_Test will run through all jest tests and watch for any changes on snapshots._

To publish
```
$ yarn publish:npm
```
