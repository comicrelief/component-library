/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Slider from './_Slider';

import {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton
} from './ImpactSlider.style';

const thisMin = 0;
const thisMax = 100;
// Does this need to be dynamic?
const steps = 1;

const ImpactSlider = ({
  copy, heading
}) => {
  const [currentAmount, setCurrentAmount] = useState(0);

  const handleChange = thisValue => {
    if (thisValue) {
      // Return the value of the 'thumb' we care about:
      setCurrentAmount(thisValue[1]);
    }
  };

  const handleSubmit = () => {
    console.log('Submit is happening', currentAmount);
  };

  return (

    <OuterWrapper>

      <Text tag="h1" family="Anton" uppercase weight="normal" size="xl">{heading}</Text>

      <Copy markup={copy} />

      <CurrentAmountCopy>
        A donation of
        {' '}
        £
        {currentAmount}
        {' '}
        could help pay for:
      </CurrentAmountCopy>
      <Slider
        width="100%"
        currentAmount={currentAmount}
        min={thisMin}
        max={thisMax}
        handleChange={handleChange}
        steps={steps}
      />
      <SubmitButton type="submit" onClick={handleSubmit} disabled={currentAmount === 0}>
        Donate £
        {currentAmount}
        {' '}
        this INSTANT
      </SubmitButton>
    </OuterWrapper>
  );
};

ImpactSlider.propTypes = {
  heading: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired
};

export default ImpactSlider;
