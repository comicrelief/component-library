import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle
} from './PromoVideoButton.style';

const ProgressRing = ({
  thisStroke, thisRadius, videoProgress, isPlaying
}) => {
  const initNormRadius = thisRadius - thisStroke * 2;
  const thisCircumference = initNormRadius * 2 * Math.PI;
  const [thisDashOffset, setThisDashOffset] = useState(initNormRadius * 2 * Math.PI);

  useEffect(() => {
    const offset = thisCircumference - ((videoProgress / 100) * thisCircumference);
    setThisDashOffset(offset);
  }, [videoProgress, thisCircumference]);

  return (
    <ProgressRingWrapper videoProgress={videoProgress}>
      <ProgressRingSVG height={thisRadius * 2} width={thisRadius * 2}>
        <ProgressRingCircle
          strokeDasharray={`${thisCircumference} ${thisCircumference}`}
          strokeDashOffsetStyle={thisDashOffset}
          strokeWidth={`${thisStroke}`}
          r={`${initNormRadius}`}
          cx={`${thisRadius}`}
          cy={`${thisRadius}`}
          isPlaying={isPlaying}
        />
      </ProgressRingSVG>
    </ProgressRingWrapper>
  );
};

ProgressRing.propTypes = {
  thisStroke: PropTypes.number.isRequired,
  thisRadius: PropTypes.number.isRequired,
  videoProgress: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default ProgressRing;
