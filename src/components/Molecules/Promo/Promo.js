/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container, Wrapper, Copy, Media, Video, PlayButton, PlayButtonWrapper
} from './Promo.style';

const Promo = ({
  copyLeft,
  backgroundColor,
  imageLow,
  imageSet,
  image,
  imageAltText,
  children,
  position,
  autoPlay,
  loop,
  poster,
  showPosterAfterPlaying,
  video
}) => {
  // To be updated via useEffect on load:
  const [isPlaying, setIsPlaying] = useState(null);
  const [percentLeft, setPercentLeft] = useState(0);
  const videoEl = useRef(null);

  const togglePlay = () => {
    if (isPlaying) videoEl.current.pause();
    else videoEl.current.play();
    setIsPlaying(!isPlaying);
  };

  const hasVideo = video || false;
  // Video Promo will override and ignore any 'non-Video' images
  const hasImage = (imageSet && !hasVideo) || false;

  const updateTime = () => {
    if (videoEl.current.duration) {
      setPercentLeft(Math.round((videoEl.current.currentTime / videoEl.current.duration) * 100));
    }
  };

  // On load:
  useEffect(() => {
    videoEl.current.addEventListener('timeupdate', updateTime, true);
    // Trigger onload autoplay based on prop:
    if (autoPlay && hasVideo && !isPlaying) {
      // As it's a Chrome requirement to mute any autoplay videos,
      // update accordingly; see https://developer.chrome.com/blog/autoplay/
      // Need to suss out if this is still needed, given that this component
      // is ALWAYS muted?
      // setIsMuted(true);
      togglePlay();
    }

    // If this is a non-looping video, add a listener to update our local state
    // once the video's ended, to let the user retrigger it manually:
    if (!loop) {
      videoEl.current.addEventListener('ended', () => {
        setIsPlaying(false);
        // Reload the video to show the poster image:
        if (showPosterAfterPlaying) videoEl.current.load();
      });
    }
  }, []);

  return (
    <Container backgroundColor={backgroundColor} position={position}>
      {(hasImage && !hasVideo) && (
      <Media imageRight={copyLeft}>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={imageSet}
          image={image}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Media>
      )}
      {(hasVideo && !hasImage) && (
      <Media imageRight={copyLeft}>
        <Video
          ref={videoEl}
          src={video}
          loop={loop}
          muted
          poster={poster}
        >
          Your browser does not support video.
        </Video>
        <PlayButtonWrapper>
          <PlayButton
            copyLeft={copyLeft}
            percentLeft={percentLeft}
            onClick={() => { togglePlay(); }}
          >
            {percentLeft}
            %
          </PlayButton>
        </PlayButtonWrapper>

      </Media>
      )}
      <Wrapper copyLeft={copyLeft}>
        <Copy position={position} hasVideo={hasVideo}>{children}</Copy>
      </Wrapper>
    </Container>
  );
};

Promo.propTypes = {
  backgroundColor: PropTypes.string,
  copyLeft: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  position: PropTypes.oneOf(['upper', 'lower', 'end', 'none']),
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  video: PropTypes.string,
  poster: PropTypes.string.isRequired,
  showPosterAfterPlaying: PropTypes.bool
};

Promo.defaultProps = {
  backgroundColor: 'white',
  copyLeft: false,
  imageSet: null,
  imageLow: null,
  image: null,
  imageAltText: '',
  children: null,
  position: 'none',
  autoPlay: true,
  loop: false, // DEBUG
  video: false,
  showPosterAfterPlaying: true
};

export default Promo;
