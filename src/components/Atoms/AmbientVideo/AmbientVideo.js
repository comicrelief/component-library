import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const StyledVideo = styled.video.attrs(() => ({
  playsInline: true,
  autoPlay: true,
  muted: true
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

// Normalise webpack module object ({ default }) or string to video URL
const toVideoSrc = value => (typeof value === 'string' ? value : value?.default);

const AmbientVideo = ({
  src,
  srcMobile,
  showControls = false,
  loop = true
}) => {
  const isBelowM = useMediaQuery({ maxWidth: breakpointValues.M - 1 });
  const rawSrc = srcMobile && isBelowM ? srcMobile : src;
  const effectiveSrc = toVideoSrc(rawSrc);

  return (
    <StyledVideo
      src={effectiveSrc}
      controls={showControls}
      loop={loop}
      muted
    >
      Your browser does not support video.
    </StyledVideo>
  );
};

const srcPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({ default: PropTypes.string })
]);

AmbientVideo.propTypes = {
  src: srcPropType.isRequired,
  srcMobile: srcPropType,
  showControls: PropTypes.bool,
  loop: PropTypes.bool
};

export default AmbientVideo;
