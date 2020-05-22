import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
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
  mbshipID,
  noMoneyBuys
}) => {
  return (
    <Container backgroundColor={backgroundColor} id={mbshipID}>
      {images ? (
        <BgImage
          backgroundColor={backgroundColor}
          image={image}
          images={images}
          imageLow={imageLow}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={alt}
        />
      ) : null}

      <Wrapper formAlignRight={formAlignRight}>
        <Header formAlignRight={formAlignRight}>
          <HeaderInner>
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
  subtitle: PropTypes.string.isRequired,
  formAlignRight: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  backgroundColor: PropTypes.string,
  mbshipID: PropTypes.string,
  noMoneyBuys: PropTypes.bool
};

Donate.defaultProps = {
  alt: '',
  data: {},
  formAlignRight: true,
  imageLow: null,
  image: null,
  images: null,
  backgroundColor: null,
  mbshipID: null,
  otherDescription:
    'will help us fund amazing projects in the UK and around the world.',
  noMoneyBuys: false
};

export default Donate;
