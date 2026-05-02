import React from 'react';
import Promo from './Promo';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { defaultData } from '../../../styleguide/data/data';
import poster from '../../../styleguide/assets/VideoBannerPosterImage.png';
import mobilePoster from '../../../styleguide/assets/mobileVideoPosterImage.png';

const videoSrc = 'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';
const mobileVideoSrc = 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4';

const promoChildren = (color = 'white') => (
  <>
    <Text tag="h1" color={color} size="super" family="Anton" uppercase weight="normal">
      Curabitur pretium tincidunt lacus
    </Text>
    <Text tag="p" color={color}>
      Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
      turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
    </Text>
    <span>
      <Link href="/" type="button" color={color}>
        <Text>Show me this</Text>
      </Link>
    </span>
  </>
);

const imageProps = {
  imageSet: defaultData.promoImage,
  image: defaultData.promoImage,
  imageLow: defaultData.promoImage,
  imageAltText: '',
};

export default function PromoExample() {
  return (
    <div>
      <Text tag="h2" size="xl" color="black">Promo Upper</Text>
      <Promo backgroundColor="blue_dark" {...imageProps} copyLeft={true} position="upper">
        {promoChildren()}
      </Promo>

      <br />
      <Text tag="h2" size="xl" color="black">Promo End</Text>
      <Promo backgroundColor="blue_dark" {...imageProps} copyLeft={true} position="end">
        {promoChildren()}
      </Promo>

      <br />
      <Text tag="h2" size="xl" color="black">Promo Lower</Text>
      <Promo backgroundColor="blue_dark" {...imageProps} copyLeft={true} position="lower">
        {promoChildren()}
      </Promo>

      <br />
      <Text tag="h2" size="xl" color="black">Promo Upper w/Video (autoplay, loop, black gradient overlay)</Text>
      <Promo
        backgroundColor="blue_dark"
        {...imageProps}
        copyLeft={true}
        position="upper"
        videoSrc={videoSrc}
        poster={poster}
        loop={true}
        autoplay={true}
        behindTextGradient="black"
      >
        {promoChildren()}
      </Promo>

      <br />
      <Text tag="h2" size="xl" color="black">Promo with mobile-only video</Text>
      <Promo
        backgroundColor="blue_light"
        {...imageProps}
        copyLeft={true}
        mobileVideoSrc={mobileVideoSrc}
        mobilePoster={mobilePoster}
        loop={false}
        autoPlay={false}
        behindTextGradient="white"
        blackPlayButton={true}
      >
        <Text tag="h1" color="black" size="super" family="Anton" uppercase weight="normal">
          One-Line Special
        </Text>
      </Promo>
    </div>
  );
}
