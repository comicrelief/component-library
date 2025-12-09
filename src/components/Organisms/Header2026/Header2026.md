# Header 2026 - Comic Relief

```js
import data from './data/data';
import searchIcon from './assets/icon--search--2023.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';

<Header2026
  navItems={data}
  metaIcons={
    <>
      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          id="search"
          isHeader
        />
      </div>
    </>
  }
/>;
```
