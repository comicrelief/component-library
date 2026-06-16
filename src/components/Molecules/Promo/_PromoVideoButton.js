import React from 'react';
import PropTypes from 'prop-types';
import ProgressRing from './_ProgressRing';
import { PlayButtonWrapper, PlayButton, Icon } from './_PromoVideoButton.style';

const PromoVideoButton = ({
  togglePlay,
  copyLeft,
  videoProgress,
  isPlaying,
  blackPlayButton,
  isRestarting,
  behindTextGradient // consumed to prevent DOM forwarding
}) => (
  <PlayButtonWrapper className="weewee">
    <PlayButton
      onClick={() => { togglePlay(); }}
      $copyLeft={copyLeft}
      $blackPlayButton={blackPlayButton}
    >
      <Icon
        $blackPlayButton={blackPlayButton}
        $isPlaying={isPlaying}
      />
      <ProgressRing
        videoProgress={videoProgress}
        $isRestarting={isRestarting}
        $blackPlayButton={blackPlayButton}
        $copyLeft={copyLeft}
      />
    </PlayButton>
  </PlayButtonWrapper>
);

PromoVideoButton.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  copyLeft: PropTypes.bool,
  videoProgress: PropTypes.number,
  isPlaying: PropTypes.bool,
  blackPlayButton: PropTypes.bool,
  isRestarting: PropTypes.bool,
  behindTextGradient: PropTypes.string
};

export default PromoVideoButton;
