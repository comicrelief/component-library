import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle from './ProgressRing';
import { PlayButtonWrapper, PlayButton, Icon } from './PromoVideoButton.style';

const PromoVideoButton = ({
  videoProgress, copyLeft, togglePlay, isPlaying
}) => (
  <PlayButtonWrapper>
    <PlayButton
      copyLeft={copyLeft}
      onClick={() => { togglePlay(); }}
      isPlaying={isPlaying}
    >
      <Icon isPlaying={isPlaying} />
      <ProgressCircle
        thisStroke={4}
        thisRadius={25}
        videoProgress={videoProgress}
        isPlaying={isPlaying}
      />
    </PlayButton>
  </PlayButtonWrapper>
);

PromoVideoButton.propTypes = {
  copyLeft: PropTypes.bool.isRequired,
  videoProgress: PropTypes.number.isRequired,
  togglePlay: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default PromoVideoButton;
