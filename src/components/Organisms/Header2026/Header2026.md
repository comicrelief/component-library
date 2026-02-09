# Header 2026 - Comic Relief

#### Dev Mode - prepends `https://www.comicrelief.com` to page links

```js
import mockData from './mockData/mockData.json';
import MockPageContent from './_MockPageContent';

const headerMenuNode = mockData.data.allContentfulHeaderMenu.edges[0].node;

<>
  <Header2026
    data={headerMenuNode}
    devMode
  />
  <MockPageContent />
</>;
```
