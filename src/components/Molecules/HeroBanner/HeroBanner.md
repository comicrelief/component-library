HeroBanner

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import variants from './_variants';

<div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

  <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.heroBannerImage}
    image={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Image alt text"
    variant={variants.FULL_HEIGHT}
    copyLeft
  >
    <Text tag="h1">
      Full Height: Copy Left
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.heroBannerImage}
    image={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Image alt text"
    variant={variants.FULL_HEIGHT}
    copyLeft={false}
    ctaText="Register to fundraise"
    ctaUrl="http://www.comicrelief.com/register"
    paddingTop="2rem"
  >
    <Text tag="h1">
      Full Height:  Additional Top Padding, Copy Right w/CTA, Same Tab
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.heroBannerImage}
    image={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Image alt text"
    variant={variants.FULL_HEIGHT}
    ctaText="Register to fundraise but longer"
    ctaUrl="http://www.comicrelief.com/register"
    ctaNewTab
    copyLeft
  >
    <Text tag="h1">
      Full Height: Copy Left w/CTA, New Tab
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="blue_dark"
    imageSet={defaultData.heroBannerImage}
    image={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Image alt text"
    copyLeft={false}
  >
    <Text tag="h1">
      Full Height: Copy Right (default variant prop value)
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="orange"
    imageSet={defaultData.heroBannerImage}
    image={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Image alt text"
    variant={variants.HALF_HEIGHT}
  >
    <Text tag="h1">
      Half Height: min height
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="teal"
    imageSet={defaultData.heroBannerImage}
    image={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Image alt text"
    variant={variants.HALF_HEIGHT}
    paddingBottom="0"
    copyLeft={false}
  >
    <Text tag="h1">
      Half Height: adapting to content,  no bottom paddding
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>

    <Text tag="p">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="grey_light"
    textBannerCopyBackgroundColour="deep_violet"
    variant={variants.TEXT_BANNER}
    copyColour="white"
  >
    <Text tag="h1">
      Responsive Text Banner
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="grey_light"
    textBannerCopyBackgroundColour="deep_violet"
    variant={variants.TEXT_BANNER}
    ctaUrl="http://www.comicrelief.com/register"
    ctaText="Register"
    copyColour="white"
    paddingBottom="0"
    ctaNewTab
  >
    <Text tag="h1">
      Responsive Text Banner w/CTA, New Tab, no top and bottom padding
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="grey_light"
    textBannerCopyBackgroundColour="deep_violet"
    // Will be provided as an override within comicrelief-contentful
    copyColour="white"
    variant={variants.TEXT_BANNER}
    ctaText="Register"
    ctaUrl="http://www.comicrelief.com/register"
  >
    <Text tag="h1">
      Responsive Text w/CTA, Same Tab
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>

    <Text tag="p">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>

    <Text tag="p">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </Text>
  </HeroBanner>

</div>
```
