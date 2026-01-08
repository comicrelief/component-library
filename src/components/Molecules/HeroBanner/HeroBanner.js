import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import variants from './_variants';
import { CtaArrow } from '../../Atoms/Icons/index';
import altCtaUnderline from './assets/alt_cta_underline.svg';
import './local-preview-layout-fixes.css';

import {
  Container, CopyOuterWrapper, Copy, MediaWrapper,
  CopyInnerWrapper, OuterWrapper, CTAWrapper, HeroBannerLink,
  CtaIconWrapper, CtaText, CtaTextUnderline
} from './HeroBanner.style';

const HeroBanner = ({
  // All variants:
  copyColour = 'black',
  CtaColour = 'red',
  pageBackgroundColour = 'grey_light',
  variant = variants.FULL_HEIGHT,
  copyLeft = true,
  imageAltText = '',
  ctaNewTab = false,
  paddingTop = '0rem',
  paddingBottom = '2rem',
  // Text Banner variant
  textBannerCopyBackgroundColour = 'deep_violet',
  textBannerCtaColour = 'white',
  // 'Media' variants (fallbacks to be provided in the CRcom integration, just in case):
  imageSet = null,
  imageLow = null,
  image = null,
  // All variants:
  children = null,
  ctaUrl = null,
  ctaText = null
}) => {
  const hasImage = Boolean(imageSet && variant !== variants.TEXT_BANNER);
  const hasCTA = Boolean(ctaUrl) && Boolean(ctaText);

  const copySection = (
    <Copy
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
                <CtaTextUnderline src={altCtaUnderline} alt="" className="cta-text-underline" />
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
                target={ctaNewTab ? 'blank' : 'self'}
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
    <Container
      pageBackgroundColour={pageBackgroundColour}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >

      <OuterWrapper
        variant={variant}
        textBannerCopyBackgroundColour={textBannerCopyBackgroundColour}
      >

        {(hasImage) && (
          <MediaWrapper imageRight={copyLeft} variant={variant}>
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

        <CopyOuterWrapper copyLeft={copyLeft} variant={variant}>
          <CopyInnerWrapper copyLeft={copyLeft} variant={variant}>
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
  children: PropTypes.node.isRequired,
  ctaUrl: PropTypes.string,
  ctaText: PropTypes.string,
  ctaNewTab: PropTypes.bool,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  variant: PropTypes.oneOf([
    variants.FULL_HEIGHT,
    variants.HALF_HEIGHT,
    variants.TEXT_BANNER
  ])
};

export default HeroBanner;
