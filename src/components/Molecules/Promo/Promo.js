import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container,
  NudgeBottom,
  NudgeTop,
  Wrapper,
  Copy,
  Media
} from './Promo.style';

/** Single Message is our main component usually to build landing pages */
const Promo = ({
  copyFirst,
  backgroundColor,
  imageLow,
  imageSet,
  image,
  imageAltText,
  children,
  nudge
}) => {
  const hasImage = imageSet || false;

  return (
    <Container backgroundColor={backgroundColor} copyFirst={copyFirst}>
      {nudge === 'top' ? <NudgeTop /> : null}
      <Media>
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
      <Wrapper>
        <Copy hasImage={hasImage} copyFirst={copyFirst}>
          {children}
        </Copy>
      </Wrapper>
      {nudge === 'bottom' ? <NudgeBottom /> : null}
    </Container>
  );
};

Promo.propTypes = {
  backgroundColor: PropTypes.string,
  copyFirst: PropTypes.bool,
  nudge: PropTypes.string,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node
};

Promo.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  nudge: null,
  imageSet: null,
  imageLow: null,
  image: null,
  imageAltText: '',
  children: null
};

export default Promo;
