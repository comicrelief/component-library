import React from 'react';
import PropTypes from 'prop-types';
import './annoying.css';

import Picture from '../../Atoms/Picture/Picture';

import {
  Container, CopyOuterWrapper, Copy, MediaWrapper, CopyInnerWrapper, OuterWrapper
} from './HeroBanner.style';

const HeroBanner = ({
  pageBackgroundColour = 'grey',
  componentBackgroundColour = 'transparent',
  variant = 'full_height_media',
  copyLeft = true,
  imageAltText = '',
  imageSet = null,
  imageLow = null,
  image = null,
  children = null
}) => {
  const hasImage = Boolean(imageSet && variant !== 'text_banner');

  return (
    <Container pageBackgroundColour={pageBackgroundColour} className="CONTAINER">

      <OuterWrapper className="OUTER-WRAPPER" variant={variant} componentBackgroundColour={componentBackgroundColour}>

        {(hasImage) && (
          <MediaWrapper imageRight={copyLeft} variant={variant} className="MEDIA-WRAPPER">
            <Picture
              alt={imageAltText}
              imageLow={imageLow}
              images={imageSet}
              image={image}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </MediaWrapper>
        )}

        <CopyOuterWrapper copyLeft={copyLeft} variant={variant} className="COPY-OUTER-WRAPPER">
          <CopyInnerWrapper copyLeft={copyLeft} className="COPY-INNER-WRAPPER">
            <Copy className="COPY">
              {children}
            </Copy>
          </CopyInnerWrapper>
        </CopyOuterWrapper>

      </OuterWrapper>
    </Container>
  );
};

HeroBanner.propTypes = {
  pageBackgroundColour: PropTypes.string,
  componentBackgroundColour: PropTypes.string,
  copyLeft: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'full_height_media',
    'half_height_media',
    'text_banner'
  ])
};

export default HeroBanner;
