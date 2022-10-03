### Minimalist

```js
const data = require('../../../styleguide/data/data').desktopImages;

<SearchResult
  href="/test"
  imageLow={data.imageLow}
  images={data.images}
  title="News article"
  alt="Image's description"
/>;
```

### With copy

```js
const data = require('../../../styleguide/data/data').desktopImages;

<SearchResult
  href="/test"
  imageLow={data.imageLow}
  images={data.images}
  title="News article"
  copy="News article copy"
  alt="Image's description"
/>;
```

### With date

```js
const data = require('../../../styleguide/data/data').desktopImages;

<SearchResult
  href="/test"
  imageLow={data.imageLow}
  images={data.images}
  date="01 July 2019"
  title="News article"
  alt="Image's description"
/>;
```

### With date and type

```js
const data = require('../../../styleguide/data/data').desktopImages;

<SearchResult
  href="/test"
  imageLow={data.imageLow}
  images={data.images}
  date="01 July 2019"
  type="article"
  title="News article"
  alt="Image's description"
/>;
```
