import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Transparent pixel png
const IMAGE_FALLBACK =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Image = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
`;

const Picture = ({ images, alt, theme }) => {
  const { breakpoint } = theme;
  console.log(theme);
  return (
    <picture>
      <source media={`${breakpoint('large')}`} srcSet={images.large} />
      <source media={`${breakpoint('medium')}`} srcSet={images.medium} />
      <source srcSet={images.small} />
      <Image src={IMAGE_FALLBACK} alt={alt} />
    </picture>
  );
};

Picture.propTypes = {
  images: PropTypes.array,
  alt: PropTypes.string
};

export default withTheme(Picture);
