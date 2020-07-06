import React from 'react';
import PropTypes from 'prop-types';

import { CheckLabel, Overlay, CheckInput } from './Chip.style';

const Chip = ({ category, handleToggle, color }) => {
  return (
    <CheckLabel>
      <CheckInput
        onChange={handleToggle}
        type="checkbox"
        value={category}
        color={color}
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
  handleToggle: PropTypes.func.isRequired
};

Chip.defaultProps = {
  color: 'purple'
};

export default Chip;
