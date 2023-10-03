import React from 'react';
import PropTypes from 'prop-types';
import ProgressRing from './_ProgressRing';
import { PlayButtonWrapper, PlayButton, Icon } from './_PromoVideoButton.style';

const PromoVideoButton = ({
  videoProgress, togglePlay, ...rest
}) => (
  <PlayButtonWrapper>
    <PlayButton
      onClick={() => { togglePlay(); }}
      {...rest}
    >
      <Icon {...rest} />
      <ProgressRing
        videoProgress={videoProgress}
        {...rest}
      />
    </PlayButton>
  </PlayButtonWrapper>
);

PromoVideoButton.propTypes = {
  videoProgress: PropTypes.number.isRequired,
  togglePlay: PropTypes.func.isRequired
};

export default PromoVideoButton;
