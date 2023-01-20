# Footer

```js
import data from './data/data';
import footerCopy from './data/footerCopy';

<>
    <p>Standard footer</p>
    <Footer navItems={data} footerCopy={footerCopy.copy} campaign="Comic Relief"  />

    <p>Overrides whitelist functionality for external usage</p>
    <Footer 
      navItems={data} 
      footerCopy={footerCopy.copy} 
      campaign="Comic Relief" 
      overrideWhiteList 
    />
    
    <p>Adding a corporate tag to the top of the footer</p>
    <Footer 
      additionalLegalLine="MR. MEN ™ LITTLE MISS ™ © 2022 THOIP (a SANRIO Company). All rights reserved." 
      navItems={data} 
      footerCopy={footerCopy.copy} 
      campaign="Comic Relief" 
    />
</>
```
