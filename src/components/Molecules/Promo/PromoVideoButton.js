import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle from './ProgressCircle';
import { PlayButtonWrapper, PlayButton } from './ProgressCircle.style'; // move these

const PromoVideoButton = ({ videoProgress, copyLeft, togglePlay }) => (
  <PlayButtonWrapper>
    <PlayButton
      copyLeft={copyLeft}
      onClick={() => { togglePlay(); }}
    >
      <ProgressCircle thisStroke={4} thisRadius={25} videoProgress={videoProgress} />
    </PlayButton>
  </PlayButtonWrapper>
);

PromoVideoButton.propTypes = {
  copyLeft: PropTypes.bool.isRequired,
  videoProgress: PropTypes.number.isRequired,
  togglePlay: PropTypes.func.isRequired
};

export default PromoVideoButton;
