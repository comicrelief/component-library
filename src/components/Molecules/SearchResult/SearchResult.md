### Minimalist

```js
const data = require('../../../styleguide/data/data').default;

<SearchResult
  href="/test"
  image={data.image}
  title="News article"
  alt="Image's description"
/>;
```

### With copy

```js
const data = require('../../../styleguide/data/data').default;

<SearchResult
  href="/test"
  image={data.image}
  title="News article"
  copy="News article copy"
  alt="Image's description"
/>;
```

### With date

```js
const data = require('../../../styleguide/data/data').default;

<SearchResult
  href="/test"
  image={data.image}
  date="01 July 2019"
  title="News article"
  alt="Image's description"
/>;
```

### With date and type

```js
const data = require('../../../styleguide/data/data').default;

<SearchResult
  href="/test"
  image={data.image}
  date="01 July 2019"
  type="article"
  title="News article"
  alt="Image's description"
/>;
```
