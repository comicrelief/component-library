# Header 2026 - Comic Relief

```js
import mockData from './mockData/oldMockData';
import newData from './mockData/mockData.json';

const headerMenuNode = newData.data.allContentfulHeaderMenu.edges[0].node;

<Header2026
  data={mockData}
  newData={headerMenuNode}
/>;
```
