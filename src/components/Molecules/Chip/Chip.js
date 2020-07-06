import React from 'react';
import PropTypes from 'prop-types';

import { CheckLabel, Overlay, CheckInput } from './Chip.style';

const Chip = ({ category, handleToggle }) => {
  return (
    <>
      <CheckLabel>
        <CheckInput onChange={handleToggle} type="checkbox" value={category} />
        <span />
        <Overlay />
        {category}
      </CheckLabel>
    </>
  );
};

Chip.propTypes = {
  category: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default Chip;
