Picture

```js
const data = require('../../../styleguide/data/data').default;

<Picture alt="test Image" images={data.pictures} />;
```

Custom value.

```js
const data = require('../../../styleguide/data/data').default;

<Picture
  alt="test Image"
  images={data.pictures}
  objectFit="cover"
  width="300px"
  height="200px"
/>;
```

Single image

```js
const data = require('../../../styleguide/data/data').default;
<Picture alt="test Image" images={data.pictures.small} />;
```
