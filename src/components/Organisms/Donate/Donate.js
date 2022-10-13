import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import { screenPixelValues } from '../../../theme/shared/size';
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
  backgroundColor,
  donateLink,
  data,
  title,
  subtitle,
  otherDescription,
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
  chooseAmountText
}) => (
  <Container backgroundColor={backgroundColor} id={mbshipID}>
    {mobileImages && (
    <MediaQuery maxWidth={screenPixelValues.medium - 1}>
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
    </MediaQuery>
    )}

    {images && (
    <MediaQuery minWidth={screenPixelValues.medium}>
      <BgImage
        backgroundColor={backgroundColor}
        image={image}
        images={images}
        imageLow={imageLow}
        objectFit="cover"
        width="100%"
        height="100%"
        alt={alt}
        isBackgroundImage
      />
    </MediaQuery>
    )}

    <Wrapper formAlignRight={formAlignRight} aria-live="polite">
      <Header formAlignRight={formAlignRight}>
        <HeaderInner>
          {subtitle && (
          <>
            <Text
              tag="h2"
              color="white"
              size="big"
              family="Anton"
              weight="normal"
              uppercase
            >
              {title}
            </Text>
            <Text tag="p" color="white" size="m">
              {subtitle}
            </Text>
          </>
          )}
        </HeaderInner>
      </Header>

      <Form
        data={data}
        otherDescription={otherDescription}
        cartID={cartID}
        clientID={clientID}
        mbshipID={mbshipID}
        donateLink={donateLink}
        noMoneyBuys={noMoneyBuys}
        PopUpText={PopUpText}
        chooseAmountText={chooseAmountText}
      />
    </Wrapper>
  </Container>
);

Donate.propTypes = {
  alt: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape),
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  otherDescription: PropTypes.string,
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
  mbshipID: PropTypes.string,
  noMoneyBuys: PropTypes.bool,
  PopUpText: PropTypes.string,
  chooseAmountText: PropTypes.string
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
  backgroundColor: 'blue_dark',
  mbshipID: null,
  otherDescription:
    'will help us fund amazing projects in the UK and around the world.',
  subtitle: '',
  noMoneyBuys: false,
  PopUpText: 'Help us deliver long-term impact by converting your single donation into a monthly gift.',
  chooseAmountText: ''
};

export default Donate;
