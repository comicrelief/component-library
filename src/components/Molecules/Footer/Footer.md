# Footer

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Footer
  navItems={data}
  footerCopy={data.footerCopy}
  metaIcons={
    <>
      <Link color="green" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```
