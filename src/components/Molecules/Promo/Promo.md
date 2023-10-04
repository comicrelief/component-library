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
import mobilePoster from '../../../styleguide/assets/mobileVideoPosterImage.png';
const src =
  'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

let mobileVideoSrc = 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4';

<div>
<Text tag="h2" size="xl" color="black">
  Promo Upper w/Video (autoplay and loop)
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
  video={src}
  poster={poster}
  loop={true}
  autoplay={true}
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
  Promo End w/Video (loop only)
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
  video={src}
  poster={poster}
  loop={true}
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
  Promo Lower w/Video (autoplay only)
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
  video={src}
  poster={poster}
  loop={false}
  autoPlay={true}
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
  Promo None w/Video (no loop or autoplay)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={false}
  hasOverlay={true}
  video={src}
  poster={poster}
  loop={false}
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

<Text tag="h2" size="xl" color="black">
  Promo None w/Video (no loop or autoplay, 'light video' setting, different videos and posters for mobile and desktop)
</Text>
<Promo
  backgroundColor="blue_light"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  video={src}
  mobileVideoSrc={mobileVideoSrc}
  poster={poster}
  mobilePoster={mobilePoster}
  loop={false}
  autoPlay={false}
  lightVideo={true}
>
  <Text
    tag="h1"
    color="black"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="black">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>

<Text tag="h2" size="xl" color="black">
  Promo None w/Video (no loop or autoplay, 'light video' setting, mobile-only video and poster)
</Text>
<Promo
  backgroundColor="blue_light"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  hasOverlay={true}
  mobileVideoSrc={mobileVideoSrc}
  mobilePoster={mobilePoster}
  loop={false}
  autoPlay={false}
  lightVideo={true}
>
  <Text
    tag="h1"
    color="black"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="black">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>

</div>
```
