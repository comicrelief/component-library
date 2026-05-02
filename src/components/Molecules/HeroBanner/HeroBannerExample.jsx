import React from 'react';
import HeroBanner from './HeroBanner';
import Text from '../../Atoms/Text/Text';
import variants from './_variants';
import { defaultData } from '../../../styleguide/data/data';
import video1080 from '../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4';
import videoMobile from '../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4';

const imageProps = {
  imageSet: defaultData.heroBannerImage,
  image: defaultData.heroBannerImage,
  imageLow: defaultData.heroBannerImage,
  imageAltText: 'Image alt text',
};

export default function HeroBannerExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

      <HeroBanner pageBackgroundColour="teal_light" {...imageProps} variant={variants.FULL_HEIGHT} copyLeft paddingTop="2rem">
        <Text tag="h1">Full Height: Copy Left</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner pageBackgroundColour="teal_light" {...imageProps} variant={variants.FULL_HEIGHT} copyLeft={false} ctaText="Register to fundraise" ctaUrl="http://www.comicrelief.com/register" paddingTop="2rem">
        <Text tag="h1">Full Height: Copy Right w/CTA, Same Tab</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner pageBackgroundColour="teal_light" {...imageProps} variant={variants.FULL_HEIGHT} copyLeft ctaText="Register to fundraise" ctaUrl="http://www.comicrelief.com/register" ctaNewTab paddingTop="2rem">
        <Text tag="h1">Full Height: Copy Left w/CTA, New Tab</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner pageBackgroundColour="blue_dark" {...imageProps} copyLeft={false}>
        <Text tag="h1">Full Height: Copy Right (default variant/padding)</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner pageBackgroundColour="orange" {...imageProps} variant={variants.HALF_HEIGHT} paddingTop="2rem">
        <Text tag="h1">Half Height: min height</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner variant={variants.TEXT_BANNER} copyColour="white">
        <Text tag="h1">Responsive Text Banner, default padding and colours</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner pageBackgroundColour="grey" textBannerCopyBackgroundColour="deep_violet" variant={variants.TEXT_BANNER} ctaUrl="http://www.comicrelief.com/register" ctaText="Register" copyColour="white" ctaNewTab>
        <Text tag="h1">Responsive Text Banner w/CTA, New Tab</Text>
        <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </HeroBanner>

      <HeroBanner
        pageBackgroundColour="teal_light"
        imageSet={defaultData.heroBannerImage}
        imageLow={defaultData.heroBannerImage}
        imageAltText="Video poster"
        variant={variants.FULL_HEIGHT}
        copyLeft
        paddingTop="2rem"
        videoDesktop={video1080}
        videoMobile={videoMobile}
        videoLoop
      >
        <Text tag="h1">Full Height with Ambient Video (looping)</Text>
        <Text tag="p">When imageSet, imageLow, videoDesktop and videoMobile are all provided, HeroBanner uses AmbientVideo.</Text>
      </HeroBanner>

    </div>
  );
}
