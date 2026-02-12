import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

import {
  Wrapper,
  WrapperWithHover,
  StyledVideo,
  FallbackImg,
  ReducedMotionPoster,
  ReducedMotionFallback,
  PlayPauseButton
} from './AmbientVideo.style';

// Inline SVGs with currentColor so they inherit button text color (white on grey_4)
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M39.6845 22.5846L11.457 6.22056C10.9505 5.92706 10.326 5.92656 9.819 6.21856C9.3125 6.51056 9 7.05156 9 7.63656V40.3641C9 40.9491 9.3125 41.4901 9.8195 41.7821C10.0725 41.9276 10.3545 42.0001 10.6365 42.0001C10.92 42.0001 11.2035 41.9266 11.4575 41.7796L39.685 25.4161C40.189 25.1231 40.5 24.5836 40.5 24.0001C40.5 23.4166 40.189 22.8771 39.6845 22.5846Z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C10.8954 6 10 6.89543 10 8V40C10 41.1046 10.8954 42 12 42H17C18.1046 42 19 41.1046 19 40V8C19 6.89543 18.1046 6 17 6H12ZM31 6C29.8954 6 29 6.89543 29 8V40C29 41.1046 29.8954 42 31 42H36C37.1046 42 38 41.1046 38 40V8C38 6.89543 37.1046 6 36 6H31Z" fill="currentColor" />
  </svg>
);

// Normalise webpack module object ({ default }) or string to video URL
const normaliseSrc = value => (typeof value === 'string' ? value : value?.default);

const AmbientVideo = ({
  src,
  srcMobile,
  poster,
  showFullControls = false,
  showPlayPause = false,
  loop = true
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
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
      setIsPlaying(false);
    }
  };

  const handlePlayPauseClick = useCallback(() => {
    const videoPlayingRef = videoRef.current;
    if (!videoPlayingRef) return;

    if (videoPlayingRef.paused) {
      videoPlayingRef.play();
      setIsPlaying(true);
    } else {
      videoPlayingRef.pause();
      setIsPlaying(false);
    }
  }, []);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const VideoWrapper = showPlayPause ? WrapperWithHover : Wrapper;

  return (
    <VideoWrapper>
      <StyledVideo
        ref={videoRef}
        src={effectiveSrc}
        poster={effectivePoster}
        controls={showFullControls}
        loop={loop}
        muted
        onEnded={handleEnded}
        onPlay={handlePlay}
        onPause={handlePause}
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
      {showPlayPause && (
        <PlayPauseButton type="button" onClick={handlePlayPauseClick} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </PlayPauseButton>
      )}
    </VideoWrapper>
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
  showFullControls: PropTypes.bool,
  showPlayPause: PropTypes.bool,
  loop: PropTypes.bool
};

export default AmbientVideo;
