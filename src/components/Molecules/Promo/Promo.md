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
const videoSrc =
  'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

let mobileVideoSrc = 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4';

<div>
<Text tag="h2" size="xl" color="black">
  Promo Upper w/Video (autoplay and loop, black text gradient overlay)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  position="upper"
  videoSrc={videoSrc}
  poster={poster}
  loop={true}
  autoplay={true}
  behindTextGradient='black'
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
  Promo End w/Video (loop only, no text gradient overlay)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  position="end"
  videoSrc={videoSrc}
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
  Promo Lower w/Video (autoplay only, white text gradient overlay)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  position="lower"
  videoSrc={videoSrc}
  poster={poster}
  loop={false}
  autoPlay={true}
  behindTextGradient='white'
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

<br />
<Text tag="h2" size="xl" color="black">
  Promo None w/Video (no loop or autoplay, no text gradient overlay)
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={false}
  videoSrc={videoSrc}
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
  Promo None w/Video (no loop or autoplay, white text gradient overlay, different videos and posters for mobile and desktop)
</Text>
<Promo
  backgroundColor="blue_light"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  videoSrc={videoSrc}
  mobileVideoSrc={mobileVideoSrc}
  poster={poster}
  mobilePoster={mobilePoster}
  loop={false}
  autoPlay={false}
  behindTextGradient='white'
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
  Promo None w/Video (no loop or autoplay, white text gradient overlay, mobile-only video and poster)
</Text>
<Promo
  backgroundColor="blue_light"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  mobileVideoSrc={mobileVideoSrc}
  mobilePoster={mobilePoster}
  loop={false}
  autoPlay={false}
  behindTextGradient='white'
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
