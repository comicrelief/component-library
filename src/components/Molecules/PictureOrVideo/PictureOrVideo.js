import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Picture from '../../Atoms/Picture/Picture';
import AmbientVideo from '../../Atoms/AmbientVideo/AmbientVideo';

const BackgroundWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

/**
 * Renders either Picture or AmbientVideo based on whether all required video props
 * (images, imageLow, videoDesktop, videoMobile) are present.
 */
const PictureOrVideo = ({
  image,
  images,
  imageLow,
  alt = '',
  videoDesktop,
  videoMobile,
  posterDesktop,
  posterMobile,
  videoLoop = true,
  videoShowFullControls = false,
  videoShowPlayPause = true,
  asBackground = false,
  objectFit = 'cover',
  width = '100%',
  height = '100%',
  isBackgroundImage
}) => {
  const imageObj = image && typeof image === 'object' ? image : null;
  const resolvedImages = imageObj?.images ?? images;
  const resolvedImageLow = imageObj?.imageLow ?? imageLow;
  let resolvedImage;
  if (imageObj) {
    resolvedImage = imageObj.image;
  } else if (typeof image === 'string') {
    resolvedImage = image;
  } else {
    resolvedImage = undefined;
  }
  const resolvedAlt = imageObj?.alt ?? alt;

  const useVideo = Boolean(
    resolvedImages
    && resolvedImageLow
    && videoDesktop
    && videoMobile
  );
  const poster = posterDesktop || resolvedImages || resolvedImageLow;
  const posterMobileResolved = posterMobile || resolvedImageLow;

  const media = useVideo ? (
    <AmbientVideo
      src={videoDesktop}
      srcMobile={videoMobile}
      poster={poster}
      posterMobile={posterMobileResolved}
      loop={videoLoop}
      showFullControls={videoShowFullControls}
      showPlayPause={videoShowPlayPause}
    />
  ) : (
    <Picture
      image={resolvedImage}
      images={resolvedImages}
      imageLow={resolvedImageLow}
      alt={resolvedAlt}
      objectFit={objectFit}
      width={width}
      height={height}
      isBackgroundImage={!asBackground && isBackgroundImage}
    />
  );

  if (asBackground) {
    return <BackgroundWrapper>{media}</BackgroundWrapper>;
  }

  return media;
};

PictureOrVideo.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      image: PropTypes.string,
      images: PropTypes.string,
      imageLow: PropTypes.string,
      alt: PropTypes.string
    })
  ]),
  images: PropTypes.string,
  imageLow: PropTypes.string,
  alt: PropTypes.string,
  videoDesktop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ default: PropTypes.string })
  ]),
  videoMobile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ default: PropTypes.string })
  ]),
  posterDesktop: PropTypes.string,
  posterMobile: PropTypes.string,
  videoLoop: PropTypes.bool,
  videoShowFullControls: PropTypes.bool,
  videoShowPlayPause: PropTypes.bool,
  asBackground: PropTypes.bool,
  objectFit: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  isBackgroundImage: PropTypes.bool
};

export default PictureOrVideo;
