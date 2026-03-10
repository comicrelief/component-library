import PropTypes from 'prop-types';
import React from 'react';
import MediaQuery from 'react-responsive';
import { breakpointValues2026 as breakpointValues } from '../../../theme/shared/breakpoints2026';
import Picture from '../../Atoms/Picture/Picture';
import {
  Body,
  CTAButton,
  Heading,
  InnerWrapper,
  OuterWrapper,
  PictureWrapper,
  TextWrapper
} from './QuoteSlice.style';

const QuoteSlice = ({
  heading,
  body,
  imageS,
  imageSPlaceholder,
  imageM,
  imageMPlaceholder,
  imageL,
  imageLPlaceholder,
  ctaUrl,
  ctaLabel,
  pageBackgroundColour = 'teal_dark',
  textColour = 'white',
  paddingTop = '2rem',
  paddingBottom = '2rem'
}) => {
  const hasLink = Boolean(ctaUrl && ctaLabel);

  // scale heading (the main quote) text as the text grows longer:
  // - shorter quotes, up to 100 characters, will be full size
  // - longer quotes, over 500 characters, will be at the smallest size
  // - mid-length quotes, between 100 and 500 characters, will scale down proportionally
  const minCharacterCount = 30;
  const maxCharacterCount = 500;
  const characterCount = heading?.length;

  // we calculate the ratio and set it as a CSS variable;
  // the heading text uses a CSS clamp function to enfore a min and max font size
  // so we don't go too small or too large;
  // this also lets us use CSS breakpoints to set different min/max sizes for different screen sizes
  let ratio = 1;

  switch (true) {
    // small quotes
    case characterCount < minCharacterCount:
      ratio = 1;
      break;
    // longer quotes
    case characterCount > maxCharacterCount:
      ratio = 0.3;
      break;
    // mid-length quotes
    default:
      ratio = 1 - (characterCount - minCharacterCount) / (maxCharacterCount - minCharacterCount);
      break;
  }

  return (
    <OuterWrapper
      backgroundColour={pageBackgroundColour}
      textColour={textColour}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <InnerWrapper>
        <PictureWrapper>
          <MediaQuery maxWidth={breakpointValues.M - 1}>
            <Picture
              height="100%"
              objectFit="cover"
              images={imageS}
              imageLow={imageSPlaceholder}
            />
          </MediaQuery>
          <MediaQuery
            minWidth={breakpointValues.M}
            maxWidth={breakpointValues.L - 1}
          >
            <Picture
              height="100%"
              objectFit="cover"
              images={imageM}
              imageLow={imageMPlaceholder}
            />
          </MediaQuery>
          <MediaQuery minWidth={breakpointValues.L}>
            <Picture
              height="100%"
              objectFit="cover"
              images={imageL}
              imageLow={imageLPlaceholder}
            />
          </MediaQuery>
        </PictureWrapper>
        <TextWrapper>
          {heading && (
            <Heading tag="h2" ratio={ratio}>
              {heading}
            </Heading>
          )}
          {body && <Body textAlign="center">{body}</Body>}
          {hasLink && (
            <CTAButton
              type="button"
              href={ctaUrl}
              color={textColour}
              fullWidth={false}
            >
              {ctaLabel}
            </CTAButton>
          )}
        </TextWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

QuoteSlice.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  imageS: PropTypes.string,
  imageSPlaceholder: PropTypes.string,
  imageM: PropTypes.string,
  imageMPlaceholder: PropTypes.string,
  imageL: PropTypes.string,
  imageLPlaceholder: PropTypes.string,
  ctaUrl: PropTypes.string,
  ctaLabel: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  textColour: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string
};

export default QuoteSlice;
