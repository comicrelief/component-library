import React from 'react';
import PropTypes from 'prop-types';
import ProgressRing from './_ProgressRing';
import { PlayButtonWrapper, PlayButton, Icon } from './_PromoVideoButton.style';

const PromoVideoButton = ({
  togglePlay, ...rest
}) => (
  <PlayButtonWrapper className="weewee">
    <PlayButton
      onClick={() => { togglePlay(); }}
      {...rest}
    >
      <Icon {...rest} />
      <ProgressRing
        {...rest}
      />
    </PlayButton>
  </PlayButtonWrapper>
);

PromoVideoButton.propTypes = {
  togglePlay: PropTypes.func.isRequired
};

export default PromoVideoButton;
