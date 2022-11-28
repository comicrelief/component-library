import React, { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import focalPointCalc from '../../../utils/focalPointCalc';
import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import { Wrapper, Image } from './Picture.style';

// Transparent pixel png
const IMAGE_FALLBACK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

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
  focalPoint,
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

  const calculatedFocalPoints = focalPointCalc(focalPoint);

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
          focalPointX={calculatedFocalPoints.x}
          focalPointY={calculatedFocalPoints.y}
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
        focalPointXPos={calculatedFocalPoints.x}
        focalPointYPos={calculatedFocalPoints.y}
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
  focalPoint: PropTypes.shape({
    focalPointX: PropTypes.number,
    focalPointY: PropTypes.number,
    rawImageWidth: PropTypes.number,
    rawImageHeight: PropTypes.number
  })
};

Picture.defaultProps = {
  imageLow: null,
  image: null,
  images: null,
  objectFit: 'none',
  width: '100%',
  height: 'auto',
  alt: '',
  isBackgroundImage: false,
  focalPoint: {
    focalPointX: null,
    focalPointY: null,
    rawImageWidth: null,
    rawImageHeigh: null
  }
};

export default withTheme(Picture);
