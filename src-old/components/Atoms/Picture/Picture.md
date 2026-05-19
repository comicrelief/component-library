Picture has depenciy of <a href="https://github.com/aFarkas/lazysizes#readme" style="color: blue; text-decoration: underline;">lazysizes</a> for lazyload and <a href="https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up" style="color: blue; text-decoration: underline;">blur-up</a> for image loading state.

Picture

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<Picture alt="test Image" imageLow={defaultData.imageLow} images={defaultData.images} />;
```

Custom Size.

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<Picture
  alt="test Image"
  imageLow={defaultData.imageLow}
  images={defaultData.images}
  objectFit="cover"
  width="300px"
  height="200px"
/>;
```

Single image

```js
const defaultData = require('../../../styleguide/data/data').defaultData;<Picture alt="test Image" image={defaultData.image} objectFit="cover" />;
```
