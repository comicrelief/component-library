import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PromoVideoButton from './_PromoVideoButton';
import Picture from '../../Atoms/Picture/Picture';
import { sizes } from '../../../theme/shared/breakpoint';

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
  mobilePoster,
  showPosterAfterPlaying,
  video,
  mobileVideoSrc,
  lightVideo
}) => {
  // To be updated via useEffect on load:
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);
  // Store the appropriate prop in state, dependent on the breakpoint
  const [thisVideoSrc, setThisVideoSrc] = useState(null);
  const [thisPoster, setThisPoster] = useState(null);

  const [videoProgress, setVideoProgress] = useState(0);
  const videoEl = useRef(null);

  const togglePlay = () => {
    if (isPlaying) videoEl.current.pause();
    else videoEl.current.play();
    setIsPlaying(!isPlaying);
  };

  const hasVideo = (video || mobileVideoSrc) || false;
  // Video Promo will override and ignore any 'non-Video' images
  const hasImage = (imageSet && !hasVideo) || false;

  const updateTime = () => {
    if (videoEl.current.duration) {
      // Calculate the percentage of the video played:
      const percentage = Math.round((videoEl.current.currentTime / videoEl.current.duration) * 100);
      const nearest = 25; // As a means of smoothing the data a bit, still playing around with it
      const roundedPercentage = (percentage + nearest / 2) - ((percentage + nearest / 2) % nearest);
      setVideoProgress(roundedPercentage);
    }
  };

  // Runs on initial load:
  useEffect(() => {
    if (hasVideo) {
      // Checks size on load ONLY; don't want to mess about with listeners:
      const isDesktop = window.innerWidth >= sizes.nav; // 1024+ px

      // If we've got both desktop AND mobile videos, let
      // the breakpoint define which video src to use:
      if (video && mobileVideoSrc) {
        setThisVideoSrc(isDesktop ? video : mobileVideoSrc);
        setThisPoster(isDesktop ? poster : mobilePoster);
      } else {
        // Else, pick whatever we do actually have
        setThisVideoSrc(video || mobileVideoSrc);
        setThisPoster(poster || mobilePoster);
      }
    }
  }, [hasVideo, video, mobileVideoSrc]);

  // Only loads once the initial screensize check is complete
  useEffect(() => {
    if (hasVideo && thisVideoSrc !== null) {
      videoEl.current.addEventListener('timeupdate', updateTime);
      // Trigger on-load autoplay if apppropriate
      if (autoPlay && hasVideo && !isPlaying) {
        togglePlay();
      }

      videoEl.current.addEventListener('ended', () => {
        // Used purely to halt the CSS animation:
        setIsRestarting(true);

        // If this is a non-looping video, add a listener to update our local state
        // once the video's ended, to let the user retrigger it manually:
        if (!loop) {
          setIsPlaying(false);
          setVideoProgress(0);
          // Reload the video to show the poster image:
          if (showPosterAfterPlaying) videoEl.current.load();
        } else {
          // Rather than using the Video 'loop' property, we retrigger
          // it in *code* as there's no 'restarted' to hook into:
          togglePlay();
        }

        // Grace period to allow the animation to reset
        setTimeout(() => { setIsRestarting(false); }, 100);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thisVideoSrc]);

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
      {(hasVideo && thisVideoSrc) && (
      <Media imageRight={copyLeft}>
        <Video
          ref={videoEl}
          src={thisVideoSrc}
          poster={thisPoster}
          muted
        >
          Your browser does not support video.
        </Video>
        <PromoVideoButton
          copyLeft={copyLeft}
          videoProgress={videoProgress}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          lightVideo={lightVideo}
          isRestarting={isRestarting}
        />
      </Media>
      )}
      <Wrapper copyLeft={copyLeft}>
        <Copy position={position} hasVideo={hasVideo} lightVideo={lightVideo}>
          {children}
        </Copy>
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
  mobileVideoSrc: PropTypes.string,
  poster: PropTypes.string,
  mobilePoster: PropTypes.string,
  showPosterAfterPlaying: PropTypes.bool,
  lightVideo: PropTypes.bool
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
  poster: null,
  mobilePoster: null,
  video: null,
  mobileVideoSrc: null,
  showPosterAfterPlaying: true,
  lightVideo: false
};

export default Promo;
