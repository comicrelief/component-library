import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video`
  width: 100%;
  background-image: url(${({ placeholder }) => placeholder});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  object-fit: contain;
`;

const VideoBanner = ({ video, autoPlay, loop, placeholder }) => {
  const videoEl = useRef(null);

  const onPlay = () => {
    videoEl.current.play();
  };

  useEffect(() => {
    onPlay();
  });

  return (
    <Video
      placeholder={placeholder}
      poster="data:image/gif,AAAA"
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
  placeholder: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  loop: PropTypes.bool
};

VideoBanner.defaultProps = {
  loop: false
};

export default VideoBanner;
