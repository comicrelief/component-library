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
    paddingTop="2rem"
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
      Full Height: Copy Right w/CTA, Same Tab
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
    paddingTop="2rem"
  >
    <Text tag="h1">
      Full Height: Copy Left w/CTA, New Tab
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
    ctaText="Register to fundraise but very very very very long oh it's a big link this one"
    ctaUrl="http://www.comicrelief.com/register"
    ctaNewTab
    copyLeft
    paddingBottom="0"
    paddingTop="0"
  >
    <Text tag="h1">
      Full Height: ZERO padding
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
      Full Height: Copy Right (default variant and padding prop values)
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
    paddingTop="2rem"
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
    variant={variants.TEXT_BANNER}
    copyColour="white"
  >
    <Text tag="h1">
      Responsive Text Banner, default padding and colours
    </Text>
    <Text tag="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="grey"
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
    pageBackgroundColour="grey"
    textBannerCopyBackgroundColour="blue_light"
    variant={variants.TEXT_BANNER}
    textBannerCtaColour="red"
    ctaText="Register"
    ctaUrl="http://www.comicrelief.com/register"
    paddingTop="2rem"
    paddingBotton="2rem"
  >
    <Text tag="h1">
      Responsive Text w/CTA, Same Tab, 2rem padding top and bottom
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

  <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Video poster"
    variant={variants.FULL_HEIGHT}
    copyLeft
    paddingTop="2rem"
    videoDesktop={require('../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4').default}
    videoMobile={require('../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4').default}
    videoLoop
  >
    <Text tag="h1">
      Full Height with Ambient Video (looping)
    </Text>
    <Text tag="p">
      When imageSet, imageLow, videoDesktop and videoMobile are all provided, the HeroBanner uses AmbientVideo instead of Picture. This example loops continuously.
    </Text>
  </HeroBanner>

  <HeroBanner
    pageBackgroundColour="teal_light"
    imageSet={defaultData.heroBannerImage}
    imageLow={defaultData.heroBannerImage}
    imageAltText="Video poster"
    variant={variants.FULL_HEIGHT}
    copyLeft={false}
    paddingTop="2rem"
    videoDesktop={require('../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4').default}
    videoMobile={require('../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4').default}
    videoLoop={false}
  >
    <Text tag="h1">
      Full Height with Ambient Video (no loop)
    </Text>
    <Text tag="p">
      Same video setup but with videoLoop=false. The video plays once then shows the poster image.
    </Text>
  </HeroBanner>

</div>
```
