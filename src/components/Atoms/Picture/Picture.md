Picture has depenciy of <a href="https://github.com/aFarkas/lazysizes#readme" style="color: blue; text-decoration: underline;">lazysizes</a> for lazyload and <a href="https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up" style="color: blue; text-decoration: underline;">blur-up</a> for image loading state.

Picture

```js
const data = require('../../../styleguide/data/data').default;

<Picture alt="test Image" imageLow={data.imageLow} images={data.images} />;
```

Custom Size.

```js
const data = require('../../../styleguide/data/data').default;
<Picture
  alt="test Image"
  imageLow={data.imageLow}
  images={data.images}
  objectFit="cover"
  width="300px"
  height="200px"
/>;
```

Single image

```js
const data = require('../../../styleguide/data/data').default;
<Picture alt="test Image" image={data.image} objectFit="cover" />;
```
