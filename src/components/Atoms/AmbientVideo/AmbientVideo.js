import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

import {
  Wrapper,
  StyledVideo,
  FallbackImg,
  ReducedMotionPoster,
  ReducedMotionFallback
} from './AmbientVideo.style';

// Normalise webpack module object ({ default }) or string to video URL
const normaliseSrc = value => (typeof value === 'string' ? value : value?.default);

const AmbientVideo = ({
  src,
  srcMobile,
  poster,
  showControls = false,
  loop = true
}) => {
  const isBelowM = useMediaQuery({ maxWidth: breakpointValues.M - 1 });
  const rawSrc = srcMobile && isBelowM ? srcMobile : src;
  const effectiveSrc = normaliseSrc(rawSrc);
  const effectivePoster = poster ? normaliseSrc(poster) : undefined;

  const handleEnded = e => {
    if (!loop && effectivePoster) {
      // If the video is not looping and there is a poster,
      // Show the poster by loading the video again and immediately pausing it
      // This is a workaround to avoid the video from restarting automatically
      // It will default to the poster image.
      const video = e.target;
      video.load();
      video.pause();
    }
  };

  return (
    <Wrapper>
      <StyledVideo
        src={effectiveSrc}
        poster={effectivePoster}
        controls={showControls}
        loop={loop}
        muted
        onEnded={handleEnded}
      >
        {effectivePoster ? (
          <FallbackImg src={effectivePoster} alt="Video playback not supported" />
        ) : (
          'Your browser does not support video.'
        )}
      </StyledVideo>
      {effectivePoster ? (
        <ReducedMotionPoster src={effectivePoster} alt="" />
      ) : (
        <ReducedMotionFallback>Video playback not supported</ReducedMotionFallback>
      )}
    </Wrapper>
  );
};

const srcPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({ default: PropTypes.string })
]);

AmbientVideo.propTypes = {
  src: srcPropType.isRequired,
  srcMobile: srcPropType,
  poster: srcPropType,
  showControls: PropTypes.bool,
  loop: PropTypes.bool
};

export default AmbientVideo;
