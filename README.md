## Comic Relief React Componet Library

React components to be shared cross Comic Relief applications

### Use

CR-CL has a dependency of Styled-components.

#### Install the package
```
$ yarn add @comicrelief/component-library
```

#### Wrap your app with the ThemeProvider and crTheme
```
import { ThemeProvider, theme as crTheme } from '@comic-relief/component-library';
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

To publish
```
$ yarn publish:npm
```