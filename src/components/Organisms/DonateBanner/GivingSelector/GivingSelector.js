import React from 'react';

import PropTypes from 'prop-types';
import {
  Switch, Wrapper, MoneyBox, Label
} from './GivingSelector.style';

const GivingSelector = ({
  givingType = null, changeGivingType, setPopOpen, mbshipID
}) => {
  // Only updates giving type and popup status when appropriate
  const handleGivingTypeChange = (thisButtonType, currentGivingType) => {
    if (currentGivingType !== thisButtonType) {
      changeGivingType(thisButtonType);
      setPopOpen(thisButtonType === 'single');
    }
  };

  return (
    <Wrapper>
      <MoneyBox>
        <input
          className="give-once"
          aria-label="Single"
          id={`give-once--${mbshipID}`}
          value="Single"
          type="radio"
          label=""
          checked={givingType === 'single'}
          onChange={() => handleGivingTypeChange('single', givingType)}
        />
        <Label active={givingType === 'single'} htmlFor={`give-once--${mbshipID}`}>
          Single
        </Label>
        <input
          className="give-monthly"
          aria-label="Monthly"
          id={`give-monthly--${mbshipID}`}
          value="Monthly"
          type="radio"
          label=""
          checked={givingType === 'monthly'}
          onChange={() => handleGivingTypeChange('monthly', givingType)}
        />
        <Label active={givingType === 'monthly'} htmlFor={`give-monthly--${mbshipID}`}>
          Monthly
        </Label>
        <Switch />
      </MoneyBox>
    </Wrapper>
  );
};

GivingSelector.propTypes = {
  givingType: PropTypes.string,
  changeGivingType: PropTypes.func.isRequired,
  setPopOpen: PropTypes.func.isRequired,
  mbshipID: PropTypes.string.isRequired
};

export default GivingSelector;
