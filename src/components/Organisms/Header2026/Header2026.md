# Header 2026 - Comic Relief

#### Dev Mode - prepends `https://www.comicrelief.com` to page links

```js
import mockData from './mockData/mockData.json';
import MockPageContent from './_MockPageContent';
import Wrapper from './_Wrapper';

const headerMenuNode = mockData.data.allContentfulHeaderMenu.edges[0].node;

// mock page
<div style={{ background: 'pink' }}>

    {/* wrapper that will sit in CR.com */}
    <Wrapper>
        <Header2026
        data={headerMenuNode}
        devMode
        />
    </Wrapper>

    <Wrapper>
        <MockPageContent />
    </Wrapper>
</div>;
```
