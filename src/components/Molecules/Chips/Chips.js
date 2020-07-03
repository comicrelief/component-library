import React from 'react';
import PropTypes from 'prop-types';

import {
  LabelGroup,
  CheckLabel,
  Overlay,
  CheckInput,
  ClearButton
} from './Chips.style';
import Text from '../../Atoms/Text/Text';

const Chips = ({ categories, handleToggle, selected, resetSelection }) => {
  return (
    <LabelGroup>
      {categories.map(category => (
        <CheckLabel key={category.id}>
          <CheckInput
            onChange={handleToggle}
            type="checkbox"
            checked={category.checked}
            value={category.fieldValue}
          />
          <span />
          <Overlay />
          {category.fieldValue}
        </CheckLabel>
      ))}
      {selected.length !== 0 && (
        <ClearButton onClick={resetSelection} type="button">
          <Text size="s">Clear selection</Text>
        </ClearButton>
      )}
    </LabelGroup>
  );
};

Chips.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleToggle: PropTypes.func.isRequired,
  resetSelection: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Chips;
