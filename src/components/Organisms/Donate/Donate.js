import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import Form from './Form/Form';
import { handleTitles, handleCopy } from './_utils';

import {
  BgImage,
  Container,
  TitleWrapperInner,
  TitleWrapperOuter,
  Wrapper
} from './Donate.style';

const Donate = ({
  alt = '',
  data = {},
  formAlignRight = true,
  imageLow = null,
  image = null,
  images = null,
  mobileImageLow = null,
  mobileImage = null,
  mobileImages = null,
  mobileAlt = '',
  desktopOverlayColor = 'transparent',
  mobileBackgroundColor = 'blue_dark',
  submitButtonColor = 'red',
  textColor = 'white',
  mbshipID = null,
  otherAmountText =
    'will help us fund amazing projects in the UK and around the world.',
  subtitle = '',
  noMoneyBuys = false,
  PopUpText = 'Help us deliver long-term impact by converting your single donation into a monthly gift.',
  chooseAmountText = '',
  isDesktopOverride = null,
  otherAmountValue = null,
  title = null,
  additionalSingleCopy = null,
  additionalMonthlyCopy = null,
  defaultGivingType = null,
  monthlyTitle = '',
  monthlySubtitle = '',
  cartID,
  clientID,
  paddingOption = null,
  donateLink,
  monthlyChooseAmountText = '', //
  monthlyOtherAmountText = '', //
  monthlyChooseAmountText =monthlyChoose, //
  monthlyOtherAmountText =monthlyOther //
}) => {
  let isDesktop = useMediaQuery({ query: `(min-width: ${breakpointValues.L}px)` });

  // To let us store any updated override, and force a re-render
  const [overrideValue, setOverrideValue] = useState(null);
  const [givingType, setGivingType] = useState();

  // Store the updated override value
  useEffect(() => {
    setOverrideValue(isDesktopOverride);
  }, [isDesktopOverride]);

  // If a boolean value has been passed, let it replace our 'internal' value
  isDesktop = overrideValue !== null ? overrideValue : isDesktop;

  // Handy helper functions to process copy, based on givingType
  const {
    showCopy,
    thisTitle,
    thisSubtitle,
    noTitlesAtAll
  } = handleTitles(givingType, title, subtitle, monthlyTitle, monthlySubtitle);

  const {
    thisOtherAmountText,
    thisChooseAmountText
  } = handleCopy(givingType, otherAmountText, chooseAmountText, monthlyOther, monthlyChoose);

  return (
    <Container
      mobileBackgroundColor={mobileBackgroundColor}
      desktopOverlayColor={desktopOverlayColor}
      id={mbshipID}
      key={overrideValue}
    >
      {!isDesktop && mobileImages ? (
        <Picture
          backgroundColor={mobileBackgroundColor}
          image={mobileImage}
          images={mobileImages}
          imageLow={mobileImageLow}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={mobileAlt}
        />
      ) : null}

      {isDesktop && images ? (
        <BgImage
          backgroundColor={desktopOverlayColor}
          image={image}
          images={images}
          imageLow={imageLow}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={alt}
          isBackgroundImage
        />
      ) : null}

      <Wrapper formAlignRight={formAlignRight} aria-live="polite" noTitlesAtAll={noTitlesAtAll} paddingOption={paddingOption}>

        {/* Only render if there is SOME title copy; otherwise,
        we need to the space to centre-align the form */}
        { !noTitlesAtAll && (
        <TitleWrapperOuter formAlignRight={formAlignRight} data-test="this-one-here">
          <TitleWrapperInner>
            {showCopy && (
            <>
              <Text
                tag="h2"
                color={textColor}
                size="big"
                family="Anton"
                weight="normal"
                uppercase
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
          PopUpText={PopUpText}
          chooseAmountText={thisChooseAmountText}
          submitButtonColor={submitButtonColor}
          otherAmountValue={otherAmountValue}
          additionalSingleCopy={additionalSingleCopy}
          additionalMonthlyCopy={additionalMonthlyCopy}
          defaultGivingType={defaultGivingType}
          givingType={givingType}
          changeGivingType={setGivingType}
        />
      </Wrapper>
    </Container>
  );
};

Donate.propTypes = {
  alt: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape),
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  title: PropTypes.string,
  otherAmountText: PropTypes.string,
  subtitle: PropTypes.string,
  formAlignRight: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  mobileImageLow: PropTypes.string,
  mobileImage: PropTypes.string,
  mobileImages: PropTypes.string,
  mobileAlt: PropTypes.string,
  mobileBackgroundColor: PropTypes.string,
  desktopOverlayColor: PropTypes.string,
  submitButtonColor: PropTypes.string,
  textColor: PropTypes.string,
  mbshipID: PropTypes.string,
  noMoneyBuys: PropTypes.bool,
  PopUpText: PropTypes.string,
  chooseAmountText: PropTypes.string,
  isDesktopOverride: PropTypes.bool,
  otherAmountValue: PropTypes.number,
  additionalSingleCopy: PropTypes.string,
  additionalMonthlyCopy: PropTypes.string,
  defaultGivingType: PropTypes.string,
  monthlyTitle: PropTypes.string,
  monthlySubtitle: PropTypes.string,
  monthlyChooseAmountText: PropTypes.string,
  monthlyOtherAmountText: PropTypes.string,
  paddingOption: PropTypes.string
};

export default Donate;
