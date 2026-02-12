import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledVideo = styled.video.attrs(() => ({
  playsInline: true,
  autoPlay: true,
  muted: true
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const FallbackImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const ReducedMotionPoster = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (prefers-reduced-motion: reduce) {
    display: block;
  }
`;

const ReducedMotionFallback = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;

  @media (prefers-reduced-motion: reduce) {
    display: block;
  }
`;

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
