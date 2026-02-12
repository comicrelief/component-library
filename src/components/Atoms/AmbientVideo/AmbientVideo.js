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

  return (
    <Wrapper>
      <StyledVideo
        src={effectiveSrc}
        poster={effectivePoster}
        controls={showControls}
        loop={loop}
        muted
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
