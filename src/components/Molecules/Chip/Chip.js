import React from 'react';
import PropTypes from 'prop-types';

import { CheckLabel, Overlay, CheckInput } from './Chip.style';

const Chip = ({ category, handleToggle, color, checked }) => {
  return (
    <CheckLabel>
      <CheckInput
        onChange={handleToggle}
        type="checkbox"
        value={category}
        color={color}
        checked={checked}
      />
      <span />
      <Overlay />
      {category}
    </CheckLabel>
  );
};

Chip.propTypes = {
  category: PropTypes.string.isRequired,
  color: PropTypes.string,
  checked: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired
};

Chip.defaultProps = {
  color: 'purple',
  checked: false
};

export default Chip;
