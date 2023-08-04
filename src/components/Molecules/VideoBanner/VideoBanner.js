import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video.attrs(() => ({
  playsInline: true
}))`
  width: 100%;
  height: 100%;
`;

const VideoBanner = ({
  video, poster, showUserControls, autoPlay, loop, muted, showPosterAfterPlaying
}) => {
  const videoEl = useRef(null);

  const triggerPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    // Trigger onload autoplay based on prop:
    if (autoPlay) {
      triggerPlay();
    }

    // And attach event listener based on prop:
    if (!loop && showPosterAfterPlaying) {
      videoEl.current.addEventListener('ended', () => {
        // Reloads video, which re-shows poster
        videoEl.current.load();
      });
    }
  });

  return (
    <Video
      poster={poster}
      src={video}
      ref={videoEl}
      controls={showUserControls}
      loop={loop}
      muted={muted}
    >
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.defaultProps = {
  showPosterAfterPlaying: true,
  showUserControls: true,
  autoPlay: false,
  loop: false,
  muted: true
};

VideoBanner.propTypes = {
  showPosterAfterPlaying: PropTypes.bool,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  showUserControls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool
};

export default VideoBanner;
