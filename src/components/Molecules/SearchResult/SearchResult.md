### Minimalist

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<SearchResult
  href="/test"
  imageLow={defaultData.imageLow}
  images={defaultData.images}
  title="News article"
  alt="Image's description"
/>;
```

### With copy

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<SearchResult
  href="/test"
  imageLow={defaultData.imageLow}
  images={defaultData.images}
  title="News article"
  copy="News article copy"
  alt="Image's description"
/>;
```

### With date

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<SearchResult
  href="/test"
  imageLow={defaultData.imageLow}
  images={defaultData.images}
  date="01 July 2019"
  title="News article"
  alt="Image's description"
/>;
```

### With date and type

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<SearchResult
  href="/test"
  imageLow={defaultData.imageLow}
  images={defaultData.images}
  date="01 July 2019"
  type="article"
  title="News article"
  alt="Image's description"
/>;
```
