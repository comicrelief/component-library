Picture has depenciy of <a href="https://github.com/aFarkas/lazysizes#readme" style="color: blue; text-decoration: underline;">lazysizes</a> for lazyload

Picture

```js
const data = require('../../../styleguide/data/data').default;

<Picture alt="test Image" images={data.images} image={data.image} />;
```

Custom value.

```js
const data = require('../../../styleguide/data/data').default;
console.log(data.images);
<Picture
  alt="test Image"
  images={data.images}
  image={data.image}
  objectFit="cover"
  width="300px"
  height="200px"
/>;
```

Single image

```js
const data = require('../../../styleguide/data/data').default;
<Picture alt="test Image" images={data.image} image={data.image} />;
```
