import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

import PlayIcon from './assets/Play.svg';
import PauseIcon from './assets/Pause.svg';

import {
  Wrapper,
  WrapperWithHover,
  StyledVideo,
  FallbackImg,
  ReducedMotionPoster,
  ReducedMotionFallback,
  PlayPauseButton,
  PlayPauseIcon
} from './AmbientVideo.style';

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
        controlsList={showFullControls ? 'nodownload nofullscreen noremoteplayback' : undefined}
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
        <PlayPauseButton type="button" onClick={handlePlayPauseClick} aria-label={isPlaying ? 'Pause' : 'Play'} data-icon={isPlaying ? 'pause' : 'play'}>
          <PlayPauseIcon $icon={normaliseSrc(isPlaying ? PauseIcon : PlayIcon)} aria-hidden />
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
