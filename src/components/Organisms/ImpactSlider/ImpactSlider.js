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
const steps = 10;

const ImpactSlider = ({
  copy, heading
}) => {
  const [currentAmount, setCurrentAmount] = useState(0);
  // May not need this:
  const [currentWidth, setCurrentWidth] = useState('10px');

  const handleChange = e => {
    if (e.target.value) {
      setCurrentAmount(parseInt(e.target.value, 10));
    }
  };

  const handleSubmit = () => {
    console.log('Submit is happening', currentAmount);
  };

  useEffect(() => {
    // May not need this... or rather the real calc involved
    setCurrentWidth('50%');
  }, []);

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
        width={currentWidth}
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
