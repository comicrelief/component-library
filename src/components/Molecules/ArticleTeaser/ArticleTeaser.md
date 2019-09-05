### Article teaser

```js
const data = require('../../../styleguide/data/data').default;
<ArticleTeaser
  href="/test"
  images={data.images}
  imageLow={data.imageLow}
  date=" 01 July 2019"
  title="News article"
  alt="Image's description"
/>;
```

### Article teaser: Press release

```js
const data = require('../../../styleguide/data/data').default;
<ArticleTeaser
  href="/test"
  images={data.images}
  category="Red Nose Day"
  imageLow={data.imageLow}
  date=" 01 July 2019"
  title="Press Release"
  alt="Image's description"
/>;
```
