import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container, Wrapper, Copy, Media
} from './Promo.style';

const Promo = ({
  copyFirst,
  backgroundColor,
  imageLow,
  imageSet,
  image,
  imageAltText,
  children,
  position
}) => {
  const hasImage = imageSet || false;

  return (
    <Container backgroundColor={backgroundColor} position={position}>
      {hasImage && (
      <Media imageRight={copyFirst}>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={imageSet}
          image={image}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Media>
      )}
      <Wrapper copyFirst={copyFirst}>
        <Copy position={position}>{children}</Copy>
      </Wrapper>
    </Container>
  );
};

Promo.propTypes = {
  backgroundColor: PropTypes.string,
  copyFirst: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'lower', 'end']),
};

Promo.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  imageSet: null,
  imageLow: null,
  image: null,
  imageAltText: '',
  children: null,
  position: 'lower'
};

export default Promo;
