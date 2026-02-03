import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import RichText from '../../Atoms/RichText/RichText';
import Form from './Form/Form';

import {
  BgImage,
  Container,
  InnerContainer,
  TitleWrapperInner,
  TitleWrapperOuter,
  Wrapper
} from './EmailBanner.style';

const EmailBanner = ({
  emailWidgetIsTextOnly = false,
  orientation = 'right',
  paddingAbove = '2rem',
  paddingBelow = '2rem',
  pageBackgroundColour = 'transparent',
  componentBackgroundColour = 'white',
  title = null,
  bodyCopy = null,
  privacyCopy = null,
  successCopy = null,
  ctaText = 'Sign up',
  imageL = null,
  imageM = null,
  imageS = null,
  formContext,
  onSubmit
}) => {
  const isLargeBreakpoint = useMediaQuery({ query: `(min-width: ${breakpointValues.L}px)` });
  const isMedium = useMediaQuery({ query: `(min-width: ${breakpointValues.M}px)` });

  const shouldShowImage = emailWidgetIsTextOnly === false;

  const shouldShowDesktopImage = shouldShowImage
    && isLargeBreakpoint && imageL
    && (imageL.images || imageL.image);

  const topImage = isMedium ? imageM : imageS;

  const shouldRenderTopImage = (shouldShowImage && !isLargeBreakpoint)
    && topImage && (topImage.images || topImage.image);

  const noTitlesAtAll = !title && !bodyCopy;
  const shouldShowTitleSection = noTitlesAtAll === false
    && isLargeBreakpoint && emailWidgetIsTextOnly;

  return (
    <Container
      paddingAbove={paddingAbove}
      paddingBelow={paddingBelow}
      pageBackgroundColour={pageBackgroundColour}
    >
      <InnerContainer
        componentBackgroundColour={componentBackgroundColour}
        $emailWidgetIsTextOnly={emailWidgetIsTextOnly}
      >
        {shouldRenderTopImage ? (
          <Picture
            image={topImage.image}
            images={topImage.images}
            imageLow={topImage.imageLow}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={topImage.alt || ''}
            key={topImage.imageLow}
          />
        ) : null}

        {shouldShowDesktopImage ? (
          <BgImage
            image={imageL.image}
            images={imageL.images}
            imageLow={imageL.imageLow}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={imageL.alt || ''}
            isBackgroundImage
          />
        ) : null}

        <Wrapper
          orientation={orientation}
          aria-live="polite"
          noTitlesAtAll={noTitlesAtAll}
          hasTopImage={shouldRenderTopImage}
          shouldShowTitleSection={shouldShowTitleSection}
        >
          {shouldShowTitleSection && (
          <TitleWrapperOuter orientation={orientation}>
            <TitleWrapperInner>
              {title && (
                <Text
                  tag="h2"
                  size="big"
                  family="Anton"
                  weight="normal"
                >
                  {title}
                </Text>
              )}
              {bodyCopy && (
                typeof bodyCopy === 'string' ? (
                  <RichText markup={bodyCopy} />
                ) : (
                  bodyCopy
                )
              )}
            </TitleWrapperInner>
          </TitleWrapperOuter>
          )}

          <Form
            title={title}
            bodyCopy={bodyCopy}
            privacyCopy={privacyCopy}
            successCopy={successCopy}
            ctaText={ctaText}
            orientation={orientation}
            hasTopImage={shouldRenderTopImage}
            shouldShowTitleSection={shouldShowTitleSection}
            emailWidgetIsTextOnly={emailWidgetIsTextOnly}
            formContext={formContext}
            onSubmit={onSubmit}
          />
        </Wrapper>
      </InnerContainer>
    </Container>
  );
};

EmailBanner.propTypes = {
  emailWidgetIsTextOnly: PropTypes.bool,
  orientation: PropTypes.oneOf(['left', 'right']),
  paddingAbove: PropTypes.string,
  paddingBelow: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  componentBackgroundColour: PropTypes.string,
  title: PropTypes.string,
  bodyCopy: PropTypes.node,
  privacyCopy: PropTypes.node,
  successCopy: PropTypes.node,
  ctaText: PropTypes.string,
  imageL: PropTypes.shape({
    images: PropTypes.string,
    imageLow: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
  }),
  imageM: PropTypes.shape({
    images: PropTypes.string,
    imageLow: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
  }),
  imageS: PropTypes.shape({
    images: PropTypes.string,
    imageLow: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
  }),
  formContext: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func
};

export default EmailBanner;
