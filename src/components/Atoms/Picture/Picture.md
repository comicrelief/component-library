Picture has depenciy of <a href="https://github.com/aFarkas/lazysizes#readme" style="color: blue; text-decoration: underline;">lazysizes</a> for lazyload and <a href="https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up" style="color: blue; text-decoration: underline;">blur-up</a> for image loading state.

Picture

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<Picture alt="test Image" imageLow={desktopImages.imageLow} images={desktopImages.images} />;
```

Custom Size.

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;<Picture
  alt="test Image"
  imageLow={desktopImages.imageLow}
  images={desktopImages.images}
  objectFit="cover"
  width="300px"
  height="200px"
/>;
```

Single image

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;<Picture alt="test Image" image={desktopImages.image} objectFit="cover" />;
```
