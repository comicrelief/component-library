import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PromoVideoButton from './PromoVideoButton';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container, Wrapper, Copy, Media, Video
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
  const [videoProgress, setVideoProgress] = useState(0);
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
      // Calculate the percentage of the video played:
      const percentage = Math.round((videoEl.current.currentTime / videoEl.current.duration) * 100);
      const nearest = 1; // As a means of smoothing the data a bit, still playing around with it
      const roundedPercentage = (percentage + nearest / 2) - ((percentage + nearest / 2) % nearest);
      setVideoProgress(roundedPercentage);
    }
  };

  // On load:
  useEffect(() => {
    if (hasVideo) {
    // Add an event listener to EVERY video
      videoEl.current.addEventListener('timeupdate', updateTime);
      // Trigger on-load autoplay if apppropriate
      if (autoPlay && hasVideo && !isPlaying) {
        togglePlay();
      }

      // If this is a non-looping video, add a listener to update our local state
      // once the video's ended, to let the user retrigger it manually:
      if (!loop) {
        videoEl.current.addEventListener('ended', () => {
          setIsPlaying(false);
          setVideoProgress(0); // good or bad?
          // Reload the video to show the poster image:
          if (showPosterAfterPlaying) videoEl.current.load();
        });
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <PromoVideoButton
          copyLeft={copyLeft}
          videoProgress={videoProgress}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
        />
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
  loop: true,
  video: false,
  showPosterAfterPlaying: true
};

export default Promo;
