import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PromoVideo from './_PromoVideo';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import './annoying.css';

import Picture from '../../Atoms/Picture/Picture';

import {
  Container, CopyOuterWrapper, Copy, MediaWrapper, CopyInnerWrapper, OuterWrapper
} from './Promo2026.style';

const Promo2026 = ({
  backgroundColor = 'white',
  copyLeft = true,
  imageSet = null,
  imageLow = null,
  image = null,
  imageAltText = '',
  children = null,
  autoPlay = true,
  loop = true,
  poster = null,
  mobilePoster = null,
  videoSrc = null,
  mobileVideoSrc = null,
  showPosterAfterPlaying = true,
  blackPlayButton = false,
  variant = 'full-height'
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
      const isDesktop = window.innerWidth >= breakpointValues.Nav; // 1024+ px
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
    <Container backgroundColor={backgroundColor} className="CONTAINER">

      <OuterWrapper className="OUTER-WRAPPER" variant={variant}>

        <MediaWrapper imageRight={copyLeft} variant={variant} className="MEDIA-WRAPPER">
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
              blackPlayButton={blackPlayButton}
              thisVideoSrc={thisVideoSrc}
              thisPoster={thisPoster}
              showPosterAfterPlaying={showPosterAfterPlaying}
              autoPlay={autoPlay}
              loop={loop}
            />
          </>
          )}
        </MediaWrapper>

        <CopyOuterWrapper copyLeft={copyLeft} className="COPY-OUTER-WRAPPER">
          <CopyInnerWrapper hasVideo={hasVideo} copyLeft={copyLeft} className="COPY-INNER-WRAPPER">
            <Copy hasVideo={hasVideo} className="COPY">
              {children}
            </Copy>
          </CopyInnerWrapper>
        </CopyOuterWrapper>

      </OuterWrapper>
    </Container>
  );
};

Promo2026.propTypes = {
  backgroundColor: PropTypes.string,
  copyLeft: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  videoSrc: PropTypes.string,
  mobileVideoSrc: PropTypes.string,
  poster: PropTypes.string,
  mobilePoster: PropTypes.string,
  showPosterAfterPlaying: PropTypes.bool,
  blackPlayButton: PropTypes.bool,
  variant: PropTypes.oneOf(['full-height', 'half-height', 'text-banner'])
};

export default Promo2026;
