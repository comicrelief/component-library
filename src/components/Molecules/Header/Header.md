# Comic Relief header

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import HeaderEsuWithIcon from '../HeaderEsuWithIcon/HeaderEsuWithIcon';
import searchIcon from './assets/icon--search.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';

<Header
  navItems={data}
  rotate
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Sport Relief header

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Header
  navItems={data}
  campaign="sportrelief"
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Comic Relief header with Search and ESU

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import HeaderEsuWithIcon from '../HeaderEsuWithIcon/HeaderEsuWithIcon';
import searchIcon from './assets/icon--search.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';

<Header
  navItems={data}
  rotate
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
        />
      </div>

      <HeaderEsuWithIcon
        link={'#'}
        iconType="email"
        title="Sign up for our emails"
      />
    </>
  }
/>;
```
