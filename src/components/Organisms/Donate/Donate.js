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
  mbshipID
}) => {
  return (
    <Container backgroundColor={backgroundColor} id={mbshipID}>
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

      <Wrapper formAlignRight={formAlignRight}>
        <Header formAlignRight={formAlignRight}>
          <HeaderInner>
            <Text tag="h2" color="white" size="xl" uppercase={true}>
              {title}
            </Text>
            <Text tag="p" color="white">
              {subtitle}
            </Text>
          </HeaderInner>
        </Header>

        <Form
          data={data}
          otherDescription={otherDescription}
          cartID={cartID}
          mbshipID={mbshipID}
          donateLink={donateLink}
        />
      </Wrapper>
    </Container>
  );
};

Donate.propTypes = {
  alt: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape),
  donateLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  otherDescription: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  formAlignRight: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  backgroundColor: PropTypes.string,
  mbshipID: PropTypes.string
};

Donate.defaultProps = {
  alt: '',
  data: {},
  formAlignRight: true,
  imageLow: null,
  image: null,
  images: null,
  backgroundColor: null,
  mbshipID: null
};
export default Donate;
