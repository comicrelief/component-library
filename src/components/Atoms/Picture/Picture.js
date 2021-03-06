import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';

// Transparent pixel png
const IMAGE_FALLBACK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Wrapper = styled.div`
  ${({ objFitState, nonObjFitImage }) => (!objFitState && nonObjFitImage) && `background-image: url(${nonObjFitImage}); background-size: cover; background-position: center;`};
  display: block;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  position: relative;
  ${({ isBackgroundImage }) => isBackgroundImage && 'position: absolute; bottom: 0px; left: 0px; right: 0px; height: 100%;'};
  `;

const Image = styled.img`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  display: block;
  object-fit: ${props => (props.objectFit === 'none' && 'none')
    || (props.objectFit === 'cover' && 'cover')
    || (props.objectFit === 'contain' && 'contain')};  
  ${({ objectFit, objFitState }) => (objectFit !== 'none' && !objFitState) && 'visibility: hidden;'}; // Allows image to provide the container height, but make it invisible
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
  isBackgroundImage,
  ...rest
}) => {
  const document = typeof window !== 'undefined' ? window.document : null;
  const [objFitState, setObjFitState] = useState(true);
  let nonObjFitImage = null;

  useEffect(() => {
    // Once document is available, determine if this browser supports object-fit
    if ('objectFit' in document.documentElement.style === false) {
      setObjFitState(false);
    }
  }, [document]);

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
        objFitState={objFitState}
        {...rest}
      >
        <Image
          alt={alt}
          height={height}
          width={width}
          objectFit={objectFit}
          data-src={image}
          className="lazyload"
          objFitState={objFitState}
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
      setObjFitState={setObjFitState}
      className="lazyload"
      isBackgroundImage={isBackgroundImage}
      nonObjFitImage={nonObjFitImage}
      objFitState={objFitState}
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
        objFitState={objFitState}
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
  isBackgroundImage: PropTypes.bool
};

Picture.defaultProps = {
  imageLow: null,
  image: null,
  images: null,
  objectFit: 'none',
  width: '100%',
  height: 'auto',
  alt: '',
  isBackgroundImage: false
};

export default withTheme(Picture);
