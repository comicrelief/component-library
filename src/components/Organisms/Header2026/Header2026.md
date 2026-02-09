# Header 2026 - Comic Relief

#### Dev Mode - prepends `https://www.comicrelief.com` to page links

```js
import mockData from './mockData/mockData.json';
import MockPageContent from './_MockPageContent';
import { Wrapper, Wrapper2 } from './_MockWrappers';

const headerMenuNode = mockData.data.allContentfulHeaderMenu.edges[0].node;

// mock page
<div style={{ background: 'pink' }}>

    {/* wrapper that will sit in CR.com */}
    <Wrapper dataId="Wrapper">
        <Header2026
        data={headerMenuNode}
        devMode
        />
    </Wrapper>

    <Wrapperw dataId="Wrapper2">
        <MockPageContent />
    </Wrapper2>
</div>;
```
