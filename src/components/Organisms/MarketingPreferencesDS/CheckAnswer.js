import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CheckContainer,
  CheckLabel,
  CheckInput
} from './MarketingPreferencesDS.style';

const CheckAnswer = ({ name, onChange }) =>
/*
  const [newValue, setNewValue] = useState({ [name]: '' });

  useEffect(() => {
    console.log(newValue);
  }, [newValue]);
  const onChange = e => {
    if (e.target.checked) {
      if (e.target.value === 'yes') {
        setNewValue({ [name]: 'yes' });
      } else {
        setNewValue({ [name]: 'no' });
      }
    } else {
      setNewValue({ [name]: '' });
    }
  }; */

  (
    <CheckContainer>
      <CheckLabel htmlFor={`${name}-yes`}>
        <CheckInput
          type="checkbox"
          name={name}
          id={`${name}-yes`}
          value="yes"
          onChange={e => { onChange(name, e, 'yes'); }}
        />
        <span />
        Yes, please
      </CheckLabel>
      <CheckLabel htmlFor={`${name}-no`}>
        <CheckInput
          type="checkbox"
          id={`${name}-no`}
          name={name}
          value="no"
          onChange={e => { onChange(name, e, 'no'); }}
        />
        <span />
        No, thanks
      </CheckLabel>
    </CheckContainer>
  );
CheckAnswer.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckAnswer;
