import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import Form from './Form/Form';
import { handleTitles, handleOtherAmountText } from './_utils';

import {
  BgImage,
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
  popUpText = 'Help us deliver long-term impact by converting your single donation into a monthly gift.',
  chooseAmountText = null,
  monthlyChooseAmountText = null,
  otherAmountText = 'will help us fund amazing projects in the UK and around the world.',
  monthlyOtherAmountText = '',
  noMoneyBuys = false,
  textColor = 'white',
  imageL = null,
  imageM = null,
  imageS = null,
  data = {},
  cartID,
  clientID,
  donateLink,
  mbshipID,
  submitButtonColor = 'red'
}) => {
  const isLarge = useMediaQuery({ query: `(min-width: ${breakpointValues.L}px)` });
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
    && isLarge && imageL
    && (imageL.images || imageL.image);

  const shouldShowTopImage = shouldShowImage && !isLarge;
  const topImage = isMedium ? imageM : imageS;

  const shouldRenderTopImage = shouldShowTopImage
    && topImage && (topImage.images || topImage.image);

  // For text-only variants, we hide the title area on non-desktop widths
  // (M and below), so only the form is shown.
  const shouldShowTitleSection = noTitlesAtAll === false && isLarge && donateWidgetIsTextOnly;

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
        {shouldRenderTopImage ? (
          <Picture
            image={topImage.image}
            images={topImage.images}
            imageLow={topImage.imageLow}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={topImage.alt || ''}
            // Force React to re-render with any updated image details
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
                  tag="h2"
                  color={textColor}
                  size="big"
                  family="Anton"
                  weight="normal"
                >
                  {thisTitle}
                </Text>
                <Text tag="p" color={textColor} size="m">
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
            noMoneyBuys={noMoneyBuys}
            popUpText={popUpText}
            chooseAmountText={chooseAmountText}
            monthlyChooseAmountText={monthlyChooseAmountText}
            submitButtonColor={submitButtonColor}
            donateWidgetIsTextOnly={donateWidgetIsTextOnly}
            hasTopImage={shouldRenderTopImage}
            shouldShowTitleSection={shouldShowTitleSection}
            donateOrientation={donateOrientation}
            givingType={givingType}
            changeGivingType={setGivingType}
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
  popUpText: PropTypes.string,
  chooseAmountText: PropTypes.string,
  monthlyChooseAmountText: PropTypes.string,
  otherAmountText: PropTypes.string,
  monthlyOtherAmountText: PropTypes.string,
  noMoneyBuys: PropTypes.bool,
  textColor: PropTypes.string,
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
  data: PropTypes.objectOf(PropTypes.shape),
  cartID: PropTypes.string.isRequired,
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired,
  submitButtonColor: PropTypes.string
};

export default DonateBanner;
