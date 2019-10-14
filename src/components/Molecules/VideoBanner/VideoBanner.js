import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video`
  width: 100%;
  background-size: 100%;
  object-fit: contain;
  overflow: hidden;
`;

const VideoBanner = ({ video, autoPlay, loop, poster }) => {
  const videoEl = useRef(null);

  const onPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    onPlay();
  });

  return (
    <Video
      poster={poster}
      ref={videoEl}
      autoPlay={autoPlay}
      loop={loop}
      muted
      playsinline
    >
      <source src={video} type="video/mp4" />
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  loop: PropTypes.bool
};

VideoBanner.defaultProps = {
  loop: false
};

export default VideoBanner;
