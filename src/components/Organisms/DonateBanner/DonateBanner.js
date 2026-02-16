import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import AmbientVideo from '../../Atoms/AmbientVideo/AmbientVideo';
import Form from './Form/Form';
import { handleTitles, handleOtherAmountText } from './_utils';

import {
  BgImage,
  BgVideo,
  Container,
  InnerContainer,
  TitleWrapperInner,
  TitleWrapperOuter,
  Wrapper
} from './DonateBanner.style';

const DonateBanner = ({
  donateWidgetIsTextOnly = false,
  donateOrientation = 'right',
  paddingAbove = '2rem',
  paddingBelow = '2rem',
  pageBackgroundColour = 'transparent',
  componentBackgroundColour = 'white',
  title = null,
  subtitle = '',
  monthlyTitle = '',
  monthlySubtitle = '',
  chooseAmountText = null,
  monthlyChooseAmountText = null,
  otherAmountText = 'will help us fund amazing projects in the UK and around the world.',
  monthlyOtherAmountText = '',
  hideMoneyBuys = false,
  imageL = null,
  imageM = null,
  imageS = null,
  videoDesktop = null,
  videoMobile = null,
  posterDesktop = null,
  posterMobile = null,
  videoLoop = true,
  videoShowFullControls = false,
  videoShowPlayPause = true,
  data = {},
  cartID,
  clientID,
  donateLink,
  mbshipID
}) => {
  const isLargeBreakpoint = useMediaQuery({ query: `(min-width: ${breakpointValues.L}px)` });
  const isMedium = useMediaQuery({ query: `(min-width: ${breakpointValues.M}px)` });
  const [givingType, setGivingType] = useState();

  const {
    showCopy,
    thisTitle,
    thisSubtitle,
    noTitlesAtAll
  } = handleTitles(givingType, title, subtitle, monthlyTitle, monthlySubtitle);

  const {
    thisOtherAmountText
  } = handleOtherAmountText(givingType, otherAmountText, monthlyOtherAmountText);

  const shouldShowImage = donateWidgetIsTextOnly === false;

  const shouldShowDesktopImage = shouldShowImage
    && isLargeBreakpoint && imageL
    && (imageL.images || imageL.image);

  const shouldShowTopImage = shouldShowImage && !isLargeBreakpoint;
  const topImage = isMedium ? imageM : imageS;

  const shouldRenderTopImage = !!(
    shouldShowTopImage
    && topImage && (topImage.images || topImage.image)
  );

  const useVideoTop = Boolean(
    shouldRenderTopImage
    && topImage.images
    && topImage.imageLow
    && videoDesktop
    && videoMobile
  );
  const useVideoDesktop = Boolean(
    shouldShowDesktopImage
    && imageL.images
    && imageL.imageLow
    && videoDesktop
    && videoMobile
  );
  const posterTop = posterDesktop || topImage?.images || topImage?.imageLow;
  const posterMobileTop = posterMobile || topImage?.imageLow;
  const posterDesktopBg = posterDesktop || imageL?.images || imageL?.imageLow;
  const posterMobileDesktopBg = posterMobile || imageL?.imageLow;

  // For text-only variants, we hide the title area on non-desktop widths
  // (M and below), so only the form is shown.
  const shouldShowTitleSection = noTitlesAtAll === false
    && isLargeBreakpoint && donateWidgetIsTextOnly;

  return (
    <Container
      paddingAbove={paddingAbove}
      paddingBelow={paddingBelow}
      pageBackgroundColour={pageBackgroundColour}
      id={mbshipID}
    >
      <InnerContainer
        componentBackgroundColour={componentBackgroundColour}
        $donateWidgetIsTextOnly={donateWidgetIsTextOnly}
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
          donateOrientation={donateOrientation}
          aria-live="polite"
          noTitlesAtAll={noTitlesAtAll}
          hasTopImage={shouldRenderTopImage}
          shouldShowTitleSection={shouldShowTitleSection}
        >
          {shouldShowTitleSection && (
          <TitleWrapperOuter donateOrientation={donateOrientation}>
            <TitleWrapperInner>
              {showCopy && (
              <>
                <Text
                  tag="h1"
                  family="Anton"
                  weight="normal"
                >
                  {thisTitle}
                </Text>
                <Text tag="p" size="m">
                  {thisSubtitle}
                </Text>
              </>
              )}
            </TitleWrapperInner>
          </TitleWrapperOuter>
          )}

          <Form
            data={data}
            otherAmountText={thisOtherAmountText}
            cartID={cartID}
            clientID={clientID}
            mbshipID={mbshipID}
            donateLink={donateLink}
            hideMoneyBuys={hideMoneyBuys}
            chooseAmountText={chooseAmountText}
            monthlyChooseAmountText={monthlyChooseAmountText}
            donateWidgetIsTextOnly={donateWidgetIsTextOnly}
            hasTopImage={shouldRenderTopImage}
            shouldShowTitleSection={shouldShowTitleSection}
            donateOrientation={donateOrientation}
            givingType={givingType}
            changeGivingType={setGivingType}
            thisTitle={thisTitle}
            thisSubtitle={thisSubtitle}
            showCopy={showCopy}
            isLargeBreakpoint={isLargeBreakpoint}
            isMediumBreakpoint={isMedium}
          />
        </Wrapper>
      </InnerContainer>
    </Container>
  );
};

DonateBanner.propTypes = {
  donateWidgetIsTextOnly: PropTypes.bool,
  donateOrientation: PropTypes.oneOf(['left', 'right']),
  paddingAbove: PropTypes.string,
  paddingBelow: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  componentBackgroundColour: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  monthlyTitle: PropTypes.string,
  monthlySubtitle: PropTypes.string,
  chooseAmountText: PropTypes.string,
  monthlyChooseAmountText: PropTypes.string,
  otherAmountText: PropTypes.string,
  monthlyOtherAmountText: PropTypes.string,
  hideMoneyBuys: PropTypes.bool,
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
  data: PropTypes.objectOf(PropTypes.shape),
  cartID: PropTypes.string.isRequired,
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired
};

export default DonateBanner;
