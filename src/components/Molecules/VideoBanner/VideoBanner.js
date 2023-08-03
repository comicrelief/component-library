import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video.attrs(() => ({
  playsInline: true,
  muted: true,
  loop: false
}))`
  width: 100%;
  height: 100%;
`;

const VideoBanner = ({
  video, poster, showUserControls, autoPlay
}) => {
  const videoEl = useRef(null);

  const onPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    if (autoPlay) {
      onPlay();
    } else {
      console.log('No autoplay');
    }
  });

  return (
    <Video poster={poster} src={video} ref={videoEl} controls={showUserControls}>
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.defaultProps = {
  showUserControls: true, // CHANGE
  autoPlay: false // CHANGE
};

VideoBanner.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  showUserControls: PropTypes.bool,
  autoPlay: PropTypes.bool
};

export default VideoBanner;
