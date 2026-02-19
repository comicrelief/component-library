# PictureOrVideo

Renders either Picture or AmbientVideo based on whether all required video props are present.
When `images`, `imageLow`, `videoDesktop` and `videoMobile` are all provided, AmbientVideo is used; otherwise Picture.

Used internally by HeroBanner, DonateBanner and EmailBanner.

## With image (Picture)

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

<PictureOrVideo
  images={defaultData.heroBannerImage}
  imageLow={defaultData.heroBannerImage}
  image={defaultData.heroBannerImage}
  alt="Image alt text"
  objectFit="cover"
  width="100%"
  height="100%"
/>
```

## With video (AmbientVideo)

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

<PictureOrVideo
  images={defaultData.heroBannerImage}
  imageLow={defaultData.heroBannerImage}
  videoDesktop={require('../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4')}
  videoMobile={require('../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4')}
  videoLoop
  objectFit="cover"
  width="100%"
  height="100%"
/>
```

## With image object

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

const imageObj = {
  images: defaultData.heroBannerImage,
  imageLow: defaultData.heroBannerImage,
  image: defaultData.heroBannerImage,
  alt: 'Image alt'
};

<PictureOrVideo
  image={imageObj}
  objectFit="cover"
  width="100%"
  height="100%"
/>
```

## As background (positioned wrapper)

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

<div style={{ position: 'relative', height: '300px' }}>
  <PictureOrVideo
    image={{
      images: defaultData.heroBannerImage,
      imageLow: defaultData.heroBannerImage,
      alt: 'Video poster'
    }}
    videoDesktop={require('../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4')}
    videoMobile={require('../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4')}
    asBackground
    objectFit="cover"
    width="100%"
    height="100%"
  />
</div>
```
