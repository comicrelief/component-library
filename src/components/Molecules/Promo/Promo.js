import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PromoVideo from './_PromoVideo';
import { sizes } from '../../../theme/shared/breakpoint';

import Picture from '../../Atoms/Picture/Picture';

import {
  Container, Wrapper, Copy, Media
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
  videoSrc,
  mobileVideoSrc,
  lightVideo
}) => {
  // Store the appropriate prop in state, dependent on the breakpoint
  const [thisVideoSrc, setThisVideoSrc] = useState(null);
  const [thisPoster, setThisPoster] = useState(null);

  // Let either field define this, just in case
  const hasVideo = Boolean(videoSrc || mobileVideoSrc);
  // A 'video-y' Promo will override and ignore any 'non-Video' images;
  // none of these fields are required so we have to handle them accordingly:
  const hasImage = Boolean(imageSet && !hasVideo);

  // Runs on initial load:
  useEffect(() => {
    if (hasVideo) {
      // Checks size on load ONLY; don't want to mess about with listeners:
      const isDesktop = window.innerWidth >= sizes.nav; // 1024+ px
      let currentPoster; let currentSrc;

      // If we've got both desktop AND mobile videos, let the
      // *current* screen width define which video src to use:
      if (videoSrc && mobileVideoSrc) {
        currentSrc = isDesktop ? videoSrc : mobileVideoSrc;
        currentPoster = isDesktop ? poster : mobilePoster;
      } else {
        // Else, pick whatever we DO actually have:
        currentSrc = videoSrc || mobileVideoSrc;
        currentPoster = poster || mobilePoster;
      }

      setThisVideoSrc(currentSrc);
      setThisPoster(currentPoster);
    }
  }, [hasVideo, videoSrc, mobileVideoSrc, mobilePoster, poster]);

  return (
    <Container backgroundColor={backgroundColor} position={position}>
      <Media imageRight={copyLeft}>
        {(hasImage && !hasVideo) && (
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={imageSet}
          image={image}
          objectFit="cover"
          width="100%"
          height="100%"
        />
        )}
        {/* If no poster image is supplied, it'll gracefully
        fall back to the first frame, so only checking for a src here */}
        {(hasVideo && thisVideoSrc) && (
        <>
          <PromoVideo
            copyLeft={copyLeft}
            lightVideo={lightVideo}
            thisVideoSrc={thisVideoSrc}
            thisPoster={thisPoster}
            showPosterAfterPlaying={showPosterAfterPlaying}
            autoPlay={autoPlay}
            loop={loop}
          />
        </>
        )}
      </Media>

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
  videoSrc: PropTypes.string,
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
  videoSrc: null,
  mobileVideoSrc: null,
  showPosterAfterPlaying: true,
  lightVideo: false
};

export default Promo;
