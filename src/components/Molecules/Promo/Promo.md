Promo

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div>
<Text tag="h2" size="xl" color="black">
  Promo Upper
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  position="upper"
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
<br />
<Text tag="h2" size="xl" color="black">
  Promo End
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  position="end"
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
<br />
<Text tag="h2" size="xl" color="black">
  Promo Lower
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  position="lower"
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
<br />
<Text tag="h2" size="xl" color="black">
  Promo None
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
</div>
```

Promo w/Video

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import poster from '../../../styleguide/assets/VideoBannerPosterImage.png';
const shortVideoSrc =
  'https://videos.ctfassets.net/zsfivwzfgl3t/6E6MTXiKrqCNviLx6uW9L9/54554151bc846a9946c5cae17533ec64/6-second-video.mp4';
const longVideoSrc =
  'https://videos.ctfassets.net/zsfivwzfgl3t/5ZHe4jVngF1uAVeSXEQdNI/8ac0c9ab100e610adb8f3bff6a113e14/15-second-video.mp4';

<div>
<Text tag="h2" size="xl" color="black">
  Promo Upper w/Video (autoplay by default)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  position="upper"
  video={shortVideoSrc}
  poster={poster}
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>

<br />

<Text tag="h2" size="xl" color="black">
  Promo End w/Video (autoplay disabled)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  position="end"
  video={shortVideoSrc}
  autoPlay={false}
  poster={poster}
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>

<br />

<Text tag="h2" size="xl" color="black">
  Promo Lower w/Video
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  position="lower"
  video={shortVideoSrc}
  poster={poster}
  autoPlay={false}
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>

<br />
<Text tag="h2" size="xl" color="black">
  Promo None w/Video (no loop)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={false}
  hasOverlay={true}
  video={shortVideoSrc}
  loop={false}
  poster={poster}
  autoPlay={false}
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
</div>
```
