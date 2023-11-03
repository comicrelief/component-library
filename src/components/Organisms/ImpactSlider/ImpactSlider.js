import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Slider from './_Slider';
import Moneybuys from './_ImpactMoneybuys';
import handleSubmission from './_utils';

import {
  OuterWrapper, InnerWrapper, Copy, CurrentAmountCopy, SubmitButton
} from './ImpactSlider.style';

const ImpactSlider = ({
  heading, cartID, donateLink, rowID, items, step, max,
  backgroundColour, opacityAnimation, children, defaultSliderValue
}) => {
  // Use the lowest possible amount as our default:
  const [currentAmount, setCurrentAmount] = useState(defaultSliderValue || step);

  const handleChange = thisValue => {
    if (thisValue) {
      // Return the value of the 'thumb' we care about:
      setCurrentAmount(thisValue[1]);
    }
  };

  const handleSubmit = () => {
    handleSubmission(currentAmount, donateLink, cartID, rowID);
  };

  return (
    <OuterWrapper backgroundColour={backgroundColour}>
      <InnerWrapper>
        <Text tag="h1" family="Anton" uppercase weight="normal" size="xl">{heading}</Text>
        <Copy>
          {children}
        </Copy>
        <CurrentAmountCopy tag="p" size="s">
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
        <Moneybuys
          items={items}
          currentAmount={currentAmount}
          opacityAnimation={opacityAnimation}
        />
        <SubmitButton type="submit" onClick={handleSubmit} disabled={currentAmount === 0}>
          Donate £
          {currentAmount}
          {' '}
          now
        </SubmitButton>
      </InnerWrapper>
    </OuterWrapper>
  );
};

ImpactSlider.defaultProps = {
  opacityAnimation: false,
  defaultSliderValue: null,
  backgroundColour: 'grey_extra_light'
};

ImpactSlider.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cartID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  rowID: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultSliderValue: PropTypes.number,
  opacityAnimation: PropTypes.bool,
  backgroundColour: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      poundsPerItem: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImpactSlider;
