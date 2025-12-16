HeroBanner

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div>
<HeroBanner
  backgroundColor="blue_light"
  imageSet={defaultData.headerBannerLG}
  image={defaultData.headerBannerLG}
  imageLow={defaultData.headerBannerLG}
  imageAltText=""
  copyLeft
  variant="full_height_image_or_video"
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
</HeroBanner>

<br />

<HeroBanner
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
    Just a wee bit of text for now, but with lots more here so I can test things (using default variant prop value)
  </Text>
  <span>
    <Link href="/" type="button" color="black">
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</HeroBanner>


<HeroBanner
  backgroundColor="blue_light"
  imageSet={defaultData.headerBannerLG}
  image={defaultData.headerBannerLG}
  imageLow={defaultData.headerBannerLG}
  imageAltText=""
  variant="half_height_image_or_video"
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
</HeroBanner>

</div>
```