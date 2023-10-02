import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ProgressRingWrapper, ProgressRingSVG, ProgressRingCircle
} from './ProgressCircle.style';

const ProgressCircle = ({ thisStroke, thisRadius, thisProgress }) => {
  const initNormRadius = thisRadius - thisStroke * 2;
  const thisCircumference = initNormRadius * 2 * Math.PI;
  const [thisDashOffset, setThisDashOffset] = useState(initNormRadius * 2 * Math.PI);

  useEffect(() => {
    const offset = thisCircumference - ((thisProgress / 100) * thisCircumference);
    setThisDashOffset(offset);
  }, [thisProgress, thisCircumference]);

  return (
    <ProgressRingWrapper thisProgress={thisProgress}>
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
  thisProgress: PropTypes.number.isRequired
};

export default ProgressCircle;
