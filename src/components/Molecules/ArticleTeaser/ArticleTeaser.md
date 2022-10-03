### Article teaser

```js
const data = require('../../../styleguide/data/data').desktopImages;
<div style={{ display: 'flex', background: '#E1E2E3' }}>
  <div style={{ margin: '1rem', width: '300px' }}>
    <ArticleTeaser
      href="/test"
      images={data.images}
      imageLow={data.imageLow}
      date=" 01 July 2019"
      title="News article"
      alt="Image's description"
      time="4 min read"
    />
  </div>
  <div style={{ margin: '1rem', width: '300px' }}>
    <ArticleTeaser
      href="/test"
      images={data.images}
      imageLow={data.imageLow}
      date=" 01 July 2019"
      title="News article News article"
      alt="Image's description"
      time="4 min read"
    />
  </div>
</div>;
```

### Article teaser: Press release

```js
const data = require('../../../styleguide/data/data').desktopImages;
<ArticleTeaser
  href="/test"
  category=""
  date=" 01 July 2019"
  title="Press Release"
  alt="Image's description"
  logoSize="80px"
/>;
```
