/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* fix theme, breakpoint and object types */
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

const Picture = ({ images, alt, theme, width, height, objectFit }) => {
  const { breakpoint } = theme;

  const isSingle = typeof images === 'object';

  if (!isSingle) {
    return (
      <picture>
        <source srcSet={images} />
        <Image
          src={IMAGE_FALLBACK}
          alt={alt}
          height="400px"
          width={width}
          objectFit={objectFit}
        />
      </picture>
    );
  }

  return (
    <picture>
      <source media={`${breakpoint('large')}`} srcSet={images.large} />
      <source media={`${breakpoint('medium')}`} srcSet={images.medium} />
      <source srcSet={images.small} />
      <Image
        src={IMAGE_FALLBACK}
        alt={alt}
        height={height}
        width={width}
        objectFit={objectFit}
      />
    </picture>
  );
};

Picture.propTypes = {
  images: PropTypes.object.isRequired,
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
  objectFit: 'none',
  width: '100%',
  height: 'auto',
  alt: ''
};

export default withTheme(Picture);
