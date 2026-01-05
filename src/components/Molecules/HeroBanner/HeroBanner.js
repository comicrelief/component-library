import React from 'react';
import PropTypes from 'prop-types';
import './annoying.css';
import variants from './_variants';

import Picture from '../../Atoms/Picture/Picture';

import {
  Container, CopyOuterWrapper, Copy, MediaWrapper,
  CopyInnerWrapper, OuterWrapper, CTAWrapper, HeroBannerLink
} from './HeroBanner.style';

const HeroBanner = ({
  pageBackgroundColour = 'grey_light',
  textBannerCopyBackgroundColour = 'deep_violet',
  variant = variants.FULL_HEIGHT,
  copyLeft = true,
  imageAltText = '',
  imageSet = null,
  imageLow = null,
  image = null,
  children = null,
  ctaLink = null,
  ctaLabel = null
}) => {
  const hasImage = Boolean(imageSet && variant !== variants.TEXT_BANNER);
  const hasCTA = Boolean(ctaLink) && Boolean(ctaLink);

  const copySection = (
    <CopyOuterWrapper copyLeft={copyLeft} variant={variant} className="COPY-OUTER-WRAPPER">
      <CopyInnerWrapper copyLeft={copyLeft} className="COPY-INNER-WRAPPER" variant={variant}>
        <Copy className="COPY" variant={variant} textBannerCopyBackgroundColour={textBannerCopyBackgroundColour}>
          {children}

          {(ctaLabel && ctaLink) && (
          <CTAWrapper>
            {ctaLabel}
            :
            {ctaLink}
          </CTAWrapper>
          )}
        </Copy>
      </CopyInnerWrapper>
    </CopyOuterWrapper>
  );

  return (
    <Container pageBackgroundColour={pageBackgroundColour} className="CONTAINER">

      <OuterWrapper className="OUTER-WRAPPER" variant={variant} textBannerCopyBackgroundColour={textBannerCopyBackgroundColour}>

        {(hasImage) && (
          <MediaWrapper imageRight={copyLeft} variant={variant} className="MEDIA-WRAPPER">
            <Picture
              alt={imageAltText}
              imageLow={imageLow}
              images={imageSet}
              image={image}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </MediaWrapper>
        )}

        {hasCTA ? (
          <HeroBannerLink href={ctaLink} target="blank">
            { copySection }
          </HeroBannerLink>
        ) : (
          <>
            { copySection }
          </>
        )}

      </OuterWrapper>
    </Container>
  );
};

HeroBanner.propTypes = {
  pageBackgroundColour: PropTypes.string,
  textBannerCopyBackgroundColour: PropTypes.string,
  copyLeft: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  ctaLink: PropTypes.string,
  ctaLabel: PropTypes.string,
  variant: PropTypes.oneOf([
    variants.FULL_HEIGHT,
    variants.HALF_HEIGHT,
    variants.TEXT_BANNER
  ])
};

export default HeroBanner;
