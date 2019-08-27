Picture has depenciy of <a href="https://github.com/aFarkas/lazysizes#readme" style="color: blue; text-decoration: underline;">lazysizes</a> for lazyload and <a href="https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up" style="color: blue; text-decoration: underline;">blur-up</a> for image loading state.

Picture using jpegSet

```js
const data = require('../../../styleguide/data/data').default;

<Picture alt="test Image" imageLow={data.imageLow} images={data.images} />;
```

Custom Size Webp format.

```js
const data = require('../../../styleguide/data/data').default;
<Picture
  alt="test Image"
  imageLow={data.imageLow}
  webpImageSet={data.webpImageSet}
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
