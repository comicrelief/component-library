import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import spacing from '../../../theme/shared/spacing';

import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';

// Transparent pixel png
const IMAGE_FALLBACK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Wrapper = styled.div`
  // If this browser doesn't support objectFit:
  ${({ nonObjFitImage }) => (nonObjFitImage)
  && `@supports not ((object-fit: cover) or (object-fit: none) or (object-fit: contain)) {
        background-image: url(${nonObjFitImage});
        background-size: cover;
        background-position: center;
      }
  `};

  display: block;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  position: relative;

  ${({ isBackgroundImage }) => isBackgroundImage
    && 'position: absolute; bottom: 0px; left: 0px; right: 0px; height: 100%;'};
  `;

const Image = styled.img`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  display: block;

  object-fit: ${props => (props.objectFit === 'none' && 'none')
    || (props.objectFit === 'cover' && 'cover')
    || (props.objectFit === 'contain' && 'contain')};

  // If this browser doesn't support objectFit:
  ${({ objectFit }) => (objectFit !== 'none')
    && `@supports not ((object-fit: cover) or (object-fit: contain)) {
      visibility: hidden;
    `}
    // Allows image to provide the container height, but make it invisible

  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS and adjust styling for row view */
  ${({ smallBreakpointRowLayout }) => (smallBreakpointRowLayout === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('S')} {
      border-radius: ${spacing('md')};
      width: 80px;
      height: 80px;
    }
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding: none;
      border-radius: 0;
      width: ${props => (props.width ? props.width : '100%')};
      height: ${props => (props.height ? props.height : 'auto')};
    }
  `}

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS and adjust styling for row view */
  ${({ mediumBreakpointRowLayout }) => (mediumBreakpointRowLayout === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      border-radius: ${spacing('md')};
      width: 96px;
      height: 96px;
    }
  `}

  /* Check for Cards/smallBreakpointRowLayout or mediumBreakpointRowLayout prop coming from the CMS and adjust styling back to normal */
  ${({ smallBreakpointRowLayout, mediumBreakpointRowLayout }) => ((smallBreakpointRowLayout === true) || (mediumBreakpointRowLayout === true)) && css`
      @media ${({ theme }) => theme.allBreakpoints('L')} {
        padding: none;
        border-radius: 0;
        width: ${props => (props.width ? props.width : '100%')};
        height: ${props => (props.height ? props.height : 'auto')};
      }
  `}
`;

/** Responsive Picture */
const Picture = ({
  images = null,
  image = null,
  alt = '',
  width = '100%',
  height = 'auto',
  objectFit = 'none',
  imageLow = null,
  isBackgroundImage = false,
  smallBreakpointRowLayout = null,
  mediumBreakpointRowLayout = null,
  ...rest
}) => {
  let nonObjFitImage = null;

  // Determine which image will be used for the nonObjectFit fallback
  if (image) {
    nonObjFitImage = image;
  } else if (images) {
    nonObjFitImage = images.substring(0, images.indexOf('?'));
  }

  if (!images) {
    return (
      <Wrapper
        height={height}
        width={width}
        image={image}
        images={images}
        isBackgroundImage={isBackgroundImage}
        nonObjFitImage={nonObjFitImage}
        {...rest}
      >
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
    <Wrapper
      height={height}
      width={width}
      image={image}
      images={images}
      className="lazyload"
      isBackgroundImage={isBackgroundImage}
      nonObjFitImage={nonObjFitImage}
      {...rest}
    >
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
        smallBreakpointRowLayout={smallBreakpointRowLayout}
        mediumBreakpointRowLayout={mediumBreakpointRowLayout}
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
  height: PropTypes.string,
  isBackgroundImage: PropTypes.bool,
  smallBreakpointRowLayout: PropTypes.bool,
  mediumBreakpointRowLayout: PropTypes.bool
};

export default withTheme(Picture);
