# Header 2026 - Comic Relief

## Dev Mode

When `devMode` is enabled, all paths will be prepended with `https://www.comicrelief.com`. This is useful when viewing the component library in isolation and you want links to navigate to the live site.

```js
import mockData from './mockData/mockData.json';

const headerMenuNode = mockData.data.allContentfulHeaderMenu.edges[0].node;

<Header2026
  data={headerMenuNode}
  devMode
/>;
```
