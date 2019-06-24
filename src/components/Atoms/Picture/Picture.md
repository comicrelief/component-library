Picture

```js
const images = require('./data/pictures').default;
<Picture alt="test Image" images={images} />;
```

Custom value.

```js
const images = require('./data/pictures').default;
<Picture
  alt="test Image"
  images={images}
  objectFit="cover"
  width="300px"
  height="200px"
/>;
```
