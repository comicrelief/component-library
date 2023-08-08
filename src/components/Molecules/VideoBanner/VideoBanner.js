import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video.attrs(() => ({
  playsInline: true
}))`
  width: 100%;
  height: 100%;
`;

const VideoBanner = ({
  video, poster, controls, autoPlay, loop, muted, showPosterAfterPlaying
}) => {
  // Use the prop as our default
  const [isMuted, setIsMuted] = useState(muted);

  const videoEl = useRef(null);

  const triggerPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    // Trigger onload autoplay based on prop:
    if (autoPlay) {
      triggerPlay();

      // As it's a Chrome requirement to mute any autoplay videos,
      // update accordingly; see https://developer.chrome.com/blog/autoplay/
      setIsMuted(true);
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
      controls={controls}
      loop={loop}
      muted={isMuted}
    >
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.defaultProps = {
  showPosterAfterPlaying: true,
  controls: false,
  autoPlay: true,
  loop: false,
  muted: true
};

VideoBanner.propTypes = {
  showPosterAfterPlaying: PropTypes.bool,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool
};

export default VideoBanner;
