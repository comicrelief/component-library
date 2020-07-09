import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Form from './Form/Form';
import {
  BgImage, Container, Header, Wrapper
} from './Membership.style';

const Membership = ({
  alt,
  cartID,
  backgroundColor,
  donateLink,
  data,
  title,
  subtitle,
  otherDescription,
  formAligntRight,
  images,
  image,
  imageLow,
  mbshipID
}) => (
  <Container
    formAligntRight={formAligntRight}
    backgroundColor={backgroundColor}
    id={mbshipID}
  >
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

    <Wrapper>
      <Header>
        <Text tag="h2" size="l" weight="800">
          {title}
        </Text>
        <Text tag="p">{subtitle}</Text>
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

Membership.propTypes = {
  alt: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape),
  donateLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  otherDescription: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  formAligntRight: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  backgroundColor: PropTypes.string,
  mbshipID: PropTypes.string
};

Membership.defaultProps = {
  alt: '',
  data: {},
  formAligntRight: true,
  imageLow: null,
  image: null,
  images: null,
  backgroundColor: null,
  mbshipID: null
};
export default Membership;
