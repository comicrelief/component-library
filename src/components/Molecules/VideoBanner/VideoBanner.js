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

  const onPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    // Only trigger play where appropriate:
    if (autoPlay) {
      onPlay();
    }

    // Only attach event listener where appropriate:
    if (!loop && showPosterAfterPlaying) {
      videoEl.current.addEventListener('ended', () => {
        // Reloads video, showing poster
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
  showUserControls: true,
  autoPlay: false,
  loop: false,
  muted: true,
  showPosterAfterPlaying: true
};

VideoBanner.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  showUserControls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  showPosterAfterPlaying: PropTypes.bool
};

export default VideoBanner;
