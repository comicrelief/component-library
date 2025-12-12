# Footer

```js
import Footer from './Footer';
import data from './data/data';
import footerCopy from './data/footerCopy';

<>
    <p>Standard footer</p>
    <Footer navItems={data} footerCopy={footerCopy.copy} campaign="Comic Relief"  />

    <p>Overrides allowList functionality for external usage</p>
    <Footer
      navItems={data}
      footerCopy={footerCopy.copy}
      campaign="Comic Relief"
      overrideallowList
    />

    <p>Adding an additionalLegalLine to the top of the footer, add FR logo</p>
    <Footer
      additionalLegalLine="CHICKEN RUN: DAWN OF THE NUGGET ™/ © Aardman. Netflix ™/© Netflix. Used with permission/Wallace & Gromit Ltd. All rights reserved/ Shaun the Sheep © & TM /Morph ©/TM Aardman Animations Ltd. All rights reserved."
      navItems={data}
      footerCopy={footerCopy.copy}
      campaign="Comic Relief"
      showFundraisingRegulatorLogo
    />
</>
```
