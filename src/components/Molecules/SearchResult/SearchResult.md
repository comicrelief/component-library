### Minimalist

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SearchResult
  href="/test"
  imageLow={desktopImages.imageLow}
  images={desktopImages.images}
  title="News article"
  alt="Image's description"
/>;
```

### With copy

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SearchResult
  href="/test"
  imageLow={desktopImages.imageLow}
  images={desktopImages.images}
  title="News article"
  copy="News article copy"
  alt="Image's description"
/>;
```

### With date

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SearchResult
  href="/test"
  imageLow={desktopImages.imageLow}
  images={desktopImages.images}
  date="01 July 2019"
  title="News article"
  alt="Image's description"
/>;
```

### With date and type

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SearchResult
  href="/test"
  imageLow={desktopImages.imageLow}
  images={desktopImages.images}
  date="01 July 2019"
  type="article"
  title="News article"
  alt="Image's description"
/>;
```
