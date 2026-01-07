import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import variants from './_variants';
import { CtaArrow } from '../../Atoms/Icons/index';

import './annoying.css';

// PLACEHOLDER:
// import facebookCircled from '../../Atoms/SocialIcons/assets/circled/facebook.svg';

import {
  Container, CopyOuterWrapper, Copy, MediaWrapper,
  CopyInnerWrapper, OuterWrapper, CTAWrapper, HeroBannerLink, CtaIconWrapper, CtaText
} from './HeroBanner.style';

const HeroBanner = ({
  pageBackgroundColour = 'grey_light',
  textBannerCopyBackgroundColour = 'deep_violet',
  // Defaults, but will be overriden via the logic within comicrelief-contentful:
  CtaColour = 'red',
  textBannerCtaColour = 'white',
  copyColour = 'black',
  //
  variant = variants.FULL_HEIGHT,
  copyLeft = true,
  imageAltText = '',
  ctaNewTab = false,
  imageSet = null,
  imageLow = null,
  image = null,
  children = null,
  ctaUrl = null,
  ctaText = null
}) => {
  const hasImage = Boolean(imageSet && variant !== variants.TEXT_BANNER);
  const hasCTA = Boolean(ctaUrl) && Boolean(ctaText);

  const copySection = (
    <Copy
      className="COPY"
      variant={variant}
      copyColour={copyColour}
      textBannerCopyBackgroundColour={textBannerCopyBackgroundColour}
    >
      {children}

      {(hasCTA) && (
        <CTAWrapper variant={variant} CtaColour={CtaColour}>
          {(variant !== variants.TEXT_BANNER) ? (
            <>
              <CtaText className="cta">
                {ctaText}
              </CtaText>

              <CtaIconWrapper CtaColour={CtaColour}>
                <CtaArrow />
              </CtaIconWrapper>
            </>

          ) : (
            <Text>
              <Link
                href={ctaUrl}
                type="button"
                color={textBannerCtaColour}
                ctaTextarget={ctaNewTab ? 'blank' : 'self'}
              >
                {ctaText}
              </Link>
            </Text>

          )
        }
        </CTAWrapper>
      )}

    </Copy>
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

        <CopyOuterWrapper copyLeft={copyLeft} variant={variant} className="COPY-OUTER-WRAPPER">
          <CopyInnerWrapper copyLeft={copyLeft} className="COPY-INNER-WRAPPER" variant={variant}>

            {/* Wraps the 'cards' in a link for non-Text Banners (which use CTA buttons) */}
            {hasCTA && variant !== variants.TEXT_BANNER ? (
              <HeroBannerLink href={ctaUrl} target={ctaNewTab ? '_blank' : '_self'}>
                { copySection }
              </HeroBannerLink>
            ) : (
              <>
                { copySection }
              </>
            )}
          </CopyInnerWrapper>

        </CopyOuterWrapper>

      </OuterWrapper>
    </Container>
  );
};

HeroBanner.propTypes = {
  pageBackgroundColour: PropTypes.string,
  textBannerCopyBackgroundColour: PropTypes.string,
  textBannerCtaColour: PropTypes.string,
  CtaColour: PropTypes.string,
  copyColour: PropTypes.string,
  copyLeft: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  ctaUrl: PropTypes.string,
  ctaText: PropTypes.string,
  ctaNewTab: PropTypes.bool,
  variant: PropTypes.oneOf([
    variants.FULL_HEIGHT,
    variants.HALF_HEIGHT,
    variants.TEXT_BANNER
  ])
};

export default HeroBanner;
