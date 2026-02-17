import PropTypes from 'prop-types';
import React from 'react';
import MediaQuery from 'react-responsive';
import { breakpointValues2026 as breakpointValues } from '../../../theme/shared/breakpoints2026';
import Picture from '../../Atoms/Picture/Picture';
import {
  CTAButton,
  Heading,
  InnerWrapper,
  OuterWrapper,
  PictureWrapper,
  TextWrapper,
  Body
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
            <Picture height="100%" objectFit="cover" images={imageS} imageLow={imageSPlaceholder} />
          </MediaQuery>
          <MediaQuery
            minWidth={breakpointValues.M}
            maxWidth={breakpointValues.L - 1}
          >
            <Picture height="100%" objectFit="cover" images={imageM} imageLow={imageMPlaceholder} />
          </MediaQuery>
          <MediaQuery minWidth={breakpointValues.L}>
            <Picture height="100%" objectFit="cover" images={imageL} imageLow={imageLPlaceholder} />
          </MediaQuery>
        </PictureWrapper>
        <TextWrapper>
          {heading && <Heading>{heading}</Heading>}
          {body && <Body textAlign="center">{body}</Body>}
          {hasLink && (
            <CTAButton type="button" href={ctaUrl} color={textColour} fullWidth={false}>
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
