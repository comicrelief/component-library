Promo2026

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div>
<Promo2026
  backgroundColor="blue_light"
  imageSet={defaultData.headerBannerLG}
  image={defaultData.headerBannerLG}
  imageLow={defaultData.headerBannerLG}
  imageAltText=""
  copyLeft
  variant="full-height"
>
  <Text
    tag="h1"
    color="black"
  >
    Copy Left
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now, but with lots more here so I can test things
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

<br />

<Promo2026
  backgroundColor="blue_light"
  imageSet={defaultData.headerBannerLG}
  image={defaultData.headerBannerLG}
  imageLow={defaultData.headerBannerLG}
  imageAltText=""
  copyLeft={false}
>
  <Text
    tag="h1"
    color="black"
  >
    Copy Right
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now, but with lots more here so I can test things
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>


<Promo2026
  backgroundColor="blue_light"
  imageSet={defaultData.headerBannerLG}
  image={defaultData.headerBannerLG}
  imageLow={defaultData.headerBannerLG}
  imageAltText=""
  variant="half-height"
>
  <Text
    tag="h1"
    color="black"
  >
    Half Height
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now, but with lots more here so I can test things
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

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
  Promo2026 Upper w/Video (autoplay and loop, black text gradient overlay)
</Text>
<Promo2026
  backgroundColor="red"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  videoSrc={videoSrc}
  poster={poster}
  loop={true}
  autoplay={true}
>
<Text
    tag="h1"
    color="black"
  >
    Promo 2026
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

<br />

<Text tag="h2" size="xl" color="black">
  Promo2026 End w/Video (loop only, no text gradient overlay)
</Text>
<Promo2026
  backgroundColor="red"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  videoSrc={videoSrc}
  poster={poster}
  loop={true}
  autoPlay={false}
>
<Text
    tag="h1"
    color="black"
  >
    Promo 2026
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

<br />

<Text tag="h2" size="xl" color="black">
  Promo2026 Lower w/Video (autoplay only, white text gradient overlay)
</Text>
<Promo2026
  backgroundColor="blue_light"
  imageSet={defaultData.promoImage}
  image={defaultData.promoImage}
  imageLow={defaultData.promoImage}
  imageAltText=""
  copyLeft={true}
  videoSrc={videoSrc}
  poster={poster}
  loop={false}
  autoPlay={true}
>
  <Text
    tag="h1"
    color="black"
  >
    Promo 2026
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

<br />
<Text tag="h2" size="xl" color="black">
  Promo2026 None w/Video (no loop or autoplay, no text gradient overlay, copy right aligned)
</Text>
<Promo2026
  backgroundColor="red"
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
    color="black"
  >
    Promo 2026
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

<Text tag="h2" size="xl" color="black">
  Promo2026 None w/Video (no loop or autoplay, white text gradient overlay, different videos and posters for mobile and desktop)
</Text>
<Promo2026
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
>
  <Text
    tag="h1"
    color="black"

  >
    Promo 2026
  </Text>
  <Text tag="p" color="black">
    Just a wee bit of text for now
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo2026>

<Text tag="h2" size="xl" color="black">
  Promo2026 None w/Video (no loop or autoplay, white text gradient overlay, mobile-only video and poster, black play button)
</Text>
<Promo2026
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
  blackPlayButton={true}
>
  <Text
    tag="h1"
    color="black"

  >
    One-Line Special
  </Text>
</Promo2026>

</div>
```
