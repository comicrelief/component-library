/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Slider from './_Slider';
import Moneybuys from './_Moneybuys';

import handleSubmission from './_utils';

import {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton
} from './ImpactSlider.style';

const thisMin = 0;
const thisMax = 100;
// Does this need to be dynamic?
const steps = 1;

const ImpactSlider = ({
  copy, heading, clientID, donateLink, rowID, items
}) => {
  const [currentAmount, setCurrentAmount] = useState(0);

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
        width="100%"
        currentAmount={currentAmount}
        min={thisMin}
        max={thisMax}
        handleChange={handleChange}
        steps={steps}
      />
      <Moneybuys items={items} />
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImpactSlider;
