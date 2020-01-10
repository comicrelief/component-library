import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';

// Transparent pixel png
const IMAGE_FALLBACK =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Wrapper = styled.picture`
  position: relative;
  display: block;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
`;

const Image = styled.img`
  display: block;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  object-fit: ${props =>
    (props.objectFit === 'none' && 'none') ||
    (props.objectFit === 'cover' && 'cover') ||
    (props.objectFit === 'contain' && 'contain')};
`;

/** Responsive Picture */

const Picture = ({
  images,
  image,
  alt,
  width,
  height,
  objectFit,
  imageLow,
  ...rest
}) => {
  if (!images) {
    return (
      <Wrapper height={height} width={width} {...rest}>
        <Image
          alt={alt}
          height={height}
          width={width}
          objectFit={objectFit}
          data-src={image}
          className="lazyload"
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper height={height} width={width} {...rest}>
      <Image
        alt={alt}
        height={height}
        width={width}
        objectFit={objectFit}
        src={image}
        srcSet={IMAGE_FALLBACK}
        data-src={image}
        data-srcset={images}
        data-sizes="auto"
        data-lowsrc={imageLow}
        className="lazyload"
      />
    </Wrapper>
  );
};

Picture.propTypes = {
  images: PropTypes.string,
  image: PropTypes.string,
  imageLow: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.oneOf([
    'none',
    'cover',
    'contain',
    'fill',
    'scale-down'
  ]),
  width: PropTypes.string,
  height: PropTypes.string
};

Picture.defaultProps = {
  imageLow: null,
  image: null,
  images: null,
  objectFit: 'none',
  width: '100%',
  height: 'auto',
  alt: ''
};

export default withTheme(Picture);
