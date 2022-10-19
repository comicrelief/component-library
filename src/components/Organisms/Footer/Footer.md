# Footer

```js
import data from './data/data';
import footerCopy from './data/footerCopy';

<>
    <p>Standard footer</p>
    <Footer navItems={data} footerCopy={footerCopy.copy} campaign="Comic Relief"  />

    <p>Overrides whitelist functionality for external usage</p>
    <Footer navItems={data} footerCopy={footerCopy.copy} campaign="Comic Relief" overrideWhiteList />
</>

```