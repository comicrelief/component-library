HeroBanner

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import variants from './_variants';

<div>

  <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant={variants.FULL_HEIGHT}
    copyLeft
  >
    <Text
      tag="h1"
      color="black"
    >
      Full Height: Copy Left
    </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

    <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant={variants.FULL_HEIGHT}
    copyLeft
    ctaText="Register to fundraise"
    ctaUrl="http://www.comicrelief.com/register"
    ctaNewTab
  >
    <Text
      tag="h1"
      color="black"
    >
      Full Height: Copy Left w/Link, New Tab
    </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

      <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant={variants.FULL_HEIGHT}
    copyLeft
    ctaText="Register to fundraise"
    ctaUrl="http://www.comicrelief.com/register"
  >
    <Text
      tag="h1"
      color="black"
    >
      Full Height: Copy Left w/Link, Same Tab
    </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="blue_dark"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    copyLeft={false}
  >
    <Text
      tag="h1"
      color="black"
    >
      Full Height: Copy Right (default variant prop value)
    </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="orange"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant={variants.HALF_HEIGHT}
  >
    <Text
      tag="h1"
      color="black"
    >
      Half Height: min height
    </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="teal"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant={variants.HALF_HEIGHT}
  >
    <Text
      tag="h1"
      color="black"
    >
      Half Height: adapting to content
    </Text>
    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>

    <Text tag="p" color="black">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="grey_light"
    textBannerCopyBackgroundColour="deep_violet"
    variant={variants.TEXT_BANNER}
  >
    <Text
      tag="h1"
      color="white"
    >
      Responsive Text
    </Text>
    <Text tag="p" color="white">
      Body copy
    </Text>
  </HeroBanner>

</div>
```