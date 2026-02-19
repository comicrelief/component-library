import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import AmbientVideo from '../../Atoms/AmbientVideo/AmbientVideo';
import RichText from '../../Atoms/RichText/RichText';
import Form from './Form/Form';

import {
  BgImage,
  BgVideo,
  Container,
  InnerContainer,
  TitleWrapperInner,
  TitleWrapperOuter,
  Wrapper
} from './EmailBanner.style';

const EmailBanner = ({
  formContext,
  onSubmit,
  emailWidgetIsTextOnly = false,
  orientation = 'right',
  paddingAbove = '2rem',
  paddingBelow = '2rem',
  pageBackgroundColour = 'transparent',
  componentBackgroundColour = 'white',
  copyColor = 'black',
  title = null,
  bodyCopy = null,
  privacyCopy = null,
  successCopy = null,
  ctaText = 'Sign up',
  imageL = null,
  imageM = null,
  imageS = null,
  videoDesktop = null,
  videoMobile = null,
  posterDesktop = null,
  posterMobile = null,
  videoLoop = true,
  videoShowFullControls = false,
  videoShowPlayPause = true
}) => {
  const isLargeBreakpoint = useMediaQuery({ query: `(min-width: ${breakpointValues.L}px)` });
  const isMedium = useMediaQuery({ query: `(min-width: ${breakpointValues.M}px)` });

  const shouldShowImage = emailWidgetIsTextOnly === false;

  const shouldShowDesktopImage = shouldShowImage
    && isLargeBreakpoint && imageL
    && (imageL.images || imageL.image);

  const topImage = isMedium ? imageM : imageS;

  const shouldRenderTopImage = Boolean((shouldShowImage && !isLargeBreakpoint)
    && topImage && (topImage.images || topImage.image));

  const useVideoTop = Boolean(
    shouldRenderTopImage
    && topImage?.images
    && topImage?.imageLow
    && videoDesktop
    && videoMobile
  );
  const useVideoDesktop = Boolean(
    shouldShowDesktopImage
    && imageL?.images
    && imageL?.imageLow
    && videoDesktop
    && videoMobile
  );
  const posterTop = posterDesktop || topImage?.images || topImage?.imageLow;
  const posterMobileTop = posterMobile || topImage?.imageLow;
  const posterDesktopBg = posterDesktop || imageL?.images || imageL?.imageLow;
  const posterMobileDesktopBg = posterMobile || imageL?.imageLow;

  const noTitlesAtAll = !title && !bodyCopy;
  const showTitleSection = noTitlesAtAll === false
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
        {shouldRenderTopImage && (useVideoTop ? (
          <AmbientVideo
            src={videoDesktop}
            srcMobile={videoMobile}
            poster={posterTop}
            posterMobile={posterMobileTop}
            loop={videoLoop}
            showFullControls={videoShowFullControls}
            showPlayPause={videoShowPlayPause}
          />
        ) : (
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
        ))}

        {shouldShowDesktopImage && (useVideoDesktop ? (
          <BgVideo>
            <AmbientVideo
              src={videoDesktop}
              srcMobile={videoMobile}
              poster={posterDesktopBg}
              posterMobile={posterMobileDesktopBg}
              loop={videoLoop}
              showFullControls={videoShowFullControls}
              showPlayPause={videoShowPlayPause}
            />
          </BgVideo>
        ) : (
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
        ))}

        <Wrapper
          orientation={orientation}
          aria-live="polite"
          noTitlesAtAll={noTitlesAtAll}
          hasTopImage={shouldRenderTopImage}
          showTitleSection={showTitleSection}
        >
          {showTitleSection && (
          <TitleWrapperOuter orientation={orientation}>
            <TitleWrapperInner $copyColor={copyColor}>
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
            showTitleSection={showTitleSection}
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
  copyColor: PropTypes.string,
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
  videoDesktop: PropTypes.string,
  videoMobile: PropTypes.string,
  posterDesktop: PropTypes.string,
  posterMobile: PropTypes.string,
  videoLoop: PropTypes.bool,
  videoShowFullControls: PropTypes.bool,
  videoShowPlayPause: PropTypes.bool,
  formContext: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EmailBanner;
