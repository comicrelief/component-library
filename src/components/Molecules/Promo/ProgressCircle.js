import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ProgressBar, ProgressBarSvg, ProgresBarSvgCircle
} from './ProgressCircle.style';

const ProgressCircle = ({ percentLeft, degreesLeft }) => {
  // Somewhere to store our updated and mapped numbers
  const [thisOffset, setThisOffset] = useState(percentLeft);

  // Remap on update:
  useEffect(() => {
    console.log('percentLeft', typeof percentLeft, percentLeft);
    const updated = 440 - (440 * percentLeft) / 100;
    console.log('updated', updated);
    // setThisOffset(440 - (440 * percentLeft) / 100);
    setThisOffset(percentLeft);
  }, [percentLeft]);

  return (
    <ProgressBar degreesLeft={degreesLeft}>
      <ProgressBarSvg class="progressbar__svg">
        <ProgresBarSvgCircle cx="80" cy="80" r="70" thisOffset={thisOffset}> </ProgresBarSvgCircle>
      </ProgressBarSvg>
    </ProgressBar>
  );
};

ProgressCircle.propTypes = {
  percentLeft: PropTypes.number,
  degreesLeft: PropTypes.number
};

ProgressCircle.defaultProps = {
  percentLeft: 0,
  degreesLeft: 0

};

export default ProgressCircle;
