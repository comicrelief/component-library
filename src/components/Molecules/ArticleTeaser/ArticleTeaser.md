### Article teaser

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

<>
  <span> Recreating XS-M breakpoints layout in CRcom (somewhat)</span>
  <div style={{ display: 'flex', background: '#E1E2E3', maxWidth: '1023px', marginBottom: '2rem', flexFlow: 'wrap', justifyContent: 'space-between' }}>
    <div style={{ margin: '1rem', width: 'calc(100% - 2rem)' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        date=" 01 July 2019"
        title="News article"
        alt="Image's description"
      />
    </div>

    <div style={{ margin: '1rem', width: 'calc(100% - 2rem)' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        title="Article teaser w/no date; used for Prizes, loads, loads, loads, loads, loads, loads, loads, loads, loads, LOADS more copy to mess with the heights a bit"
        alt="Image's description"
      />
    </div>

    <div style={{ margin: '1rem', width: 'calc(100% - 2rem)' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        title="Article teaser w/no date; used for Prizes"
        alt="Image's description"
      />
    </div>
  </div>

  <span> Recreating L+ breakpoints layout in CRcom (somewhat)</span>
  <div style={{ display: 'flex', background: '#E1E2E3', maxWidth: '100%', marginBottom: '2rem', flexFlow: 'wrap', justifyContent: 'space-between' }}>
    <div style={{ margin: '1rem', width: 'calc(33.3% - 2rem)' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        date=" 01 July 2019"
        title="News article"
        alt="Image's description"
      />
    </div>

    <div style={{ margin: '1rem', width: 'calc(33.3% - 2rem)' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        title="Article teaser w/no date; used for Prizes, loads, loads, loads, loads, loads, loads, loads, loads, loads, LOADS more copy to mess with the heights a bit"
        alt="Image's description"
      />
    </div>

    <div style={{ margin: '1rem', width: 'calc(33.3% - 2rem)' }}>
      <ArticleTeaser
        href="/test"
        images={defaultData.images}
        imageLow={defaultData.imageLow}
        title="Article teaser w/no date; used for Prizes"
        alt="Image's description"
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
