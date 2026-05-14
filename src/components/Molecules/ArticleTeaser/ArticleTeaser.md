### Article teaser

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

<>
  <span> Max-width container to better show how this reacts when in-situ in CRcom on the XS and SM breakpoints: </span>
  <div style={{ display: 'flex', background: '#E1E2E3', maxWidth: '739px', marginBottom: '2rem', flexFlow: 'wrap', justifyContent: 'space-between' }}>
    <div style={{ margin: '1rem', width: '45%' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        date=" 01 July 2019"
        title="News article"
        alt="Image's description"
      />
    </div>

    <div style={{ margin: '1rem', width: '45%' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        title="Article teaser w/no date; used for Prizes, loads, loads, loads, loads, loads, loads, loads, loads, loads, LOADS more copy to mess with the heights a bit"
        alt="Image's description"
      />
    </div>
  </div>

  <span> Full-width container to better show how this reacts when in-situ in CRcom, namely on the M breakpoint: </span>
  <div style={{ display: 'flex', background: '#E1E2E3', maxWidth: '1023px', marginBottom: '2rem'  }}>
    <div style={{ margin: '1rem', width: '100%' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        date=" 01 July 2019"
        title="News article"
        alt="Image's description"
        time="4 min read"
      />
    </div>
  </div>
</>
```

### Article teaser: Press release

```js
const defaultData = require('../../../styleguide/data/data').defaultData;<div>

  <div style={{ width: '100%', padding: '1rem'}}>
    <ArticleTeaser
      href="/test"
      category=""
      date=" 01 July 2019"
      title="Press Release"
      alt="Image's description"
      logoSize="80px"
    />
  </div>


  <div style={{ width: '100%', padding: '1rem'}}>
    <ArticleTeaser
      href="/test"
      category=""
      title="Press Release w/no date"
      alt="Image's description"
      logoSize="80px"
    />
  </div>

  <div style={{ width: '100%', padding: '1rem'}}>
    <ArticleTeaser
      href="/test"
      category="Red Nose Day"
      title="Red Nose Day Press Release"
      date=" 01 July 2019"
      alt="Image's description"
      logoSize="80px"
    />
  </div>

  <div style={{ width: '100%', padding: '1rem'}}>
    <ArticleTeaser
      href="/test"
      category="Sport Relief"
      title="Sport Relief Press Release"
      date=" 01 July 2019"
      alt="Image's description"
      logoSize="80px"
    />
  </div>

</div>
```
