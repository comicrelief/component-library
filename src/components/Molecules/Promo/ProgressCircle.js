import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle
} from './ProgressCircle.style';

const ProgressCircle = ({ thisStroke, thisRadius, videoProgress }) => {
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
        />
      </ProgressRingSVG>
    </ProgressRingWrapper>
  );
};

ProgressCircle.propTypes = {
  thisStroke: PropTypes.number.isRequired,
  thisRadius: PropTypes.number.isRequired,
  videoProgress: PropTypes.number.isRequired
};

export default ProgressCircle;
