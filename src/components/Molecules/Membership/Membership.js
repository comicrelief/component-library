import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Form from './Form/Form';
import { BgImage, Container, Header, Wrapper } from './Membership.style';

const Membership = ({
  cartID,
  backgroundColor,
  data,
  title,
  subtitle,
  otherDescription,
  formAligntRight,
  vhFull,
  fullImage,
  images,
  image,
  imageLow,
  mbshipID
}) => {
  return (
    <Container
      formAligntRight={formAligntRight}
      vhFull={vhFull}
      fullImage={fullImage}
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
        />
      </Wrapper>
    </Container>
  );
};

Membership.propTypes = {
  cartID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape),
  title: PropTypes.string.isRequired,
  otherDescription: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  formAligntRight: PropTypes.bool,
  vhFull: PropTypes.bool,
  fullImage: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  backgroundColor: PropTypes.string,
  mbshipID: PropTypes.string
};

Membership.defaultProps = {
  data: {},
  formAligntRight: true,
  vhFull: false,
  fullImage: false,
  imageLow: null,
  image: null,
  images: null,
  backgroundColor: null,
  mbshipID: null
};
export default Membership;
