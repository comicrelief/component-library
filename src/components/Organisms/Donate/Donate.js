import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { screen } from '../../../theme/shared/size';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import Form from './Form/Form';
import {
  BgImage,
  Container,
  Header,
  HeaderInner,
  Wrapper
} from './Donate.style';

const Donate = ({
  alt,
  cartID,
  clientID,
  overlayColor,
  backgroundColor,
  buttonColor,
  textColor,
  donateLink,
  data,
  title,
  subtitle,
  otherAmountText,
  formAlignRight,
  images,
  image,
  imageLow,
  mobileImages,
  mobileImage,
  mobileImageLow,
  mobileAlt,
  mbshipID,
  noMoneyBuys,
  PopUpText,
  chooseAmountText,
  isDesktopOverride
}) => {
  let isDesktop = useMediaQuery({ query: `(min-width: ${screen.medium})` });

  // To let us store any updated override, and force a re-render
  const [overrideValue, setOverrideValue] = useState(null);

  // Store the updated override value
  React.useEffect(() => {
    setOverrideValue(isDesktopOverride);
  }, [isDesktopOverride]);

  // If a boolean value has been passed, let it replace our 'internal' value
  isDesktop = overrideValue !== null ? overrideValue : isDesktop;

  return (
    <Container
      backgroundColor={backgroundColor}
      overlayColor={overlayColor}
      id={mbshipID}
      key={overrideValue}
    >
      {!isDesktop && mobileImages ? (
        <Picture
          backgroundColor={backgroundColor}
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
          backgroundColor={overlayColor}
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

      <Wrapper formAlignRight={formAlignRight} aria-live="polite">
        <Header formAlignRight={formAlignRight}>
          <HeaderInner>
            {subtitle && (
              <>
                <Text
                  tag="h2"
                  color={textColor}
                  size="big"
                  family="Anton"
                  weight="normal"
                  uppercase
                >
                  {title}
                </Text>
                <Text tag="p" color={textColor} size="m">
                  {subtitle}
                </Text>
              </>
            )}
          </HeaderInner>
        </Header>

        <Form
          data={data}
          otherAmountText={otherAmountText}
          cartID={cartID}
          clientID={clientID}
          mbshipID={mbshipID}
          donateLink={donateLink}
          noMoneyBuys={noMoneyBuys}
          PopUpText={PopUpText}
          chooseAmountText={chooseAmountText}
          buttonColor={buttonColor}
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
  title: PropTypes.string.isRequired,
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
  backgroundColor: PropTypes.string,
  overlayColor: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  mbshipID: PropTypes.string,
  noMoneyBuys: PropTypes.bool,
  PopUpText: PropTypes.string,
  chooseAmountText: PropTypes.string,
  isDesktopOverride: PropTypes.bool
};

Donate.defaultProps = {
  alt: '',
  data: {},
  formAlignRight: true,
  imageLow: null,
  image: null,
  images: null,
  mobileImageLow: null,
  mobileImage: null,
  mobileImages: null,
  mobileAlt: '',
  overlayColor: 'transparent',
  backgroundColor: 'blue_dark',
  buttonColor: 'red',
  textColor: 'white',
  mbshipID: null,
  otherAmountText:
    'will help us fund amazing projects in the UK and around the world.',
  subtitle: '',
  noMoneyBuys: false,
  PopUpText: 'Help us deliver long-term impact by converting your single donation into a monthly gift.',
  chooseAmountText: '',
  isDesktopOverride: null
};

export default Donate;
