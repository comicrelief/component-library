import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { screen } from '../../../theme/shared/size';
import Text from '../../Atoms/Text/Text';
import Form from './Form/Form';
import {
  MobImage,
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
  mbshipID,
  noMoneyBuys,
  PopUpText
}) => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${screen.medium})` });

  return (
    <Container backgroundColor={backgroundColor} id={mbshipID}>
      {!isDesktop && mobileImages ? (
        <MobImage
          backgroundColor={backgroundColor}
          image={mobileImage}
          images={mobileImages}
          imageLow={mobileImageLow}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={alt}
        />
      ) : null}

      {isDesktop && images ? (
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
      ) : null}

      <Wrapper formAlignRight={formAlignRight}>
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
  otherDescription: PropTypes.string,
  subtitle: PropTypes.string,
  formAlignRight: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  mobileImageLow: PropTypes.string,
  mobileImage: PropTypes.string,
  mobileImages: PropTypes.string,
  backgroundColor: PropTypes.string,
  mbshipID: PropTypes.string,
  noMoneyBuys: PropTypes.bool,
  PopUpText: PropTypes.string
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
  backgroundColor: null,
  mbshipID: null,
  otherDescription:
    'will help us fund amazing projects in the UK and around the world.',
  subtitle: '',
  noMoneyBuys: false,
  PopUpText: "Will you become one of our valued monthly supporters by converting your single donation into a smaller, monthly donation? By giving monthly, you'll help us deliver long-term impact."
};

export default Donate;
