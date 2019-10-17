import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video.attrs(() => ({
  autoPlay: true,
  playsInline: true,
  muted: true,
  loop: false
}))`
  width: 100%;
  height: 100%;
`;

const VideoBanner = ({ video, poster }) => {
  const videoEl = useRef(null);

  const onPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    onPlay();
  });

  return (
    <Video poster={poster} src={video} ref={videoEl}>
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoBanner;
