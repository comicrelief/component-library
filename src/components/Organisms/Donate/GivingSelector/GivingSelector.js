import React from 'react';

import PropTypes from 'prop-types';
import {
  Switch, Wrapper, MoneyBox, Label
} from './GivingSelector.style';

const GivingSelector = ({
  givingType, changeGivingType, setPopOpen, mbshipID
}) => {
  // Only updates giving type and popup status values where appropriate
  const handleGivingTypeChange = (thisButtonType, currentGivingType) => {
    if (currentGivingType !== thisButtonType) {
      changeGivingType(thisButtonType);
      if (thisButtonType === 'single') setPopOpen(true);
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
          errormsg=""
          checked={givingType === 'single'}
          onClick={() => handleGivingTypeChange('single', givingType)}
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
          errormsg=""
          checked={givingType === 'monthly'}
          onClick={() => handleGivingTypeChange('monthly', givingType)}
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
  givingType: PropTypes.string.isRequired,
  changeGivingType: PropTypes.func.isRequired,
  setPopOpen: PropTypes.func.isRequired,
  mbshipID: PropTypes.string.isRequired
};

export default GivingSelector;
