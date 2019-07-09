import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Transparent pixel png
const IMAGE_FALLBACK =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

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

const Picture = ({ images, image, alt, width, height, objectFit }) => {
  if (!images) {
    return (
      <Image
        alt={alt}
        height={height}
        width={width}
        objectFit={objectFit}
        data-src={image}
        className="lazyload"
      />
    );
  }

  return (
    <Image
      alt={alt}
      height={height}
      width={width}
      objectFit={objectFit}
      src={image}
      srcSet={IMAGE_FALLBACK}
      data-srcset={images}
      data-sizes="auto"
      className="lazyload"
    />
  );
};

Picture.propTypes = {
  images: PropTypes.string,
  image: PropTypes.string.isRequired,
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
  images: null,
  objectFit: 'none',
  width: '100%',
  height: 'auto',
  alt: ''
};

export default withTheme(Picture);
