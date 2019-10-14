import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video`
  width: 100%;
  background-image: url(${({ poster }) => poster});
  background-size: 100% 100%;
  object-fit: contain;
  overflow: hidden;
`;

const VideoBanner = ({ video, autoPlay, loop }) => {
  const videoEl = useRef(null);

  const onPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    onPlay();
  });

  return (
    <Video ref={videoEl} autoPlay={autoPlay} loop={loop} muted playsinline>
      <source src={video} type="video/mp4" />
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.propTypes = {
  video: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  loop: PropTypes.bool.isRequired
};

export default VideoBanner;
