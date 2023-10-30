import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Slider from './_Slider';
import Moneybuys from './_Moneybuys';

import handleSubmission from './_utils';

import {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton
} from './ImpactSlider.style';

const ImpactSlider = ({
  copy, heading, clientID, donateLink, rowID, items, step, max
}) => {
  const [currentAmount, setCurrentAmount] = useState(step);

  const handleChange = thisValue => {
    if (thisValue) {
      // Return the value of the 'thumb' we care about:
      setCurrentAmount(thisValue[1]);
    }
  };

  const handleSubmit = () => {
    handleSubmission(currentAmount, donateLink, clientID, rowID);
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
        currentAmount={currentAmount}
        min={step}
        max={max}
        handleChange={handleChange}
        steps={step}
      />
      <Moneybuys items={items} currentAmount={currentAmount} />
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
  copy: PropTypes.string.isRequired,
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  rowID: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  max: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      itemPerPound: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImpactSlider;
