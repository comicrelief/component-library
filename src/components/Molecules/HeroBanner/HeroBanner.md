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
    imageAltText="Image alt text"
    variant="full_height_media"
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
    <span>
      <Link href="/" type="button" color="black">
        <Text>
          CTA label
        </Text>
      </Link>
    </span>
  </HeroBanner>

  <HeroBanner
    backgroundColor="blue_light"
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
    <span>
      <Link href="/" type="button" color="black">
        <Text>
          CTA label
        </Text>
      </Link>
    </span>
  </HeroBanner>

  <HeroBanner
    backgroundColor="blue_light"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant="half_height_media"
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
    <span>
      <Link href="/" type="button" color="black">
        <Text>
          CTA label
        </Text>
      </Link>
    </span>
  </HeroBanner>

  <HeroBanner
    backgroundColor="blue_light"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant="half_height_media"
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
    <span>
      <Link href="/" type="button" color="black">
        <Text>
          CTA label
        </Text>
      </Link>
    </span>
  </HeroBanner>

  <HeroBanner
    backgroundColor="blue_light"
    imageSet={defaultData.headerBannerLG}
    image={defaultData.headerBannerLG}
    imageLow={defaultData.headerBannerLG}
    imageAltText="Image alt text"
    variant="text_banner"
  >
    <Text
      tag="h1"
      color="black"
    >
      Responsive Text
    </Text>
    <Text tag="p" color="black">
      Just a wee bit of text for now
    </Text>
    <span>
      <Link href="/" type="button" color="black">
        <Text>
          CTA label
        </Text>
      </Link>
    </span>
  </HeroBanner>

</div>
```