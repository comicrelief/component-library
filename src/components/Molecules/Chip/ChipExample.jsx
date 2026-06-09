import React, { useState } from 'react';
import Chip from './Chip';

export default function ChipExample() {
  const [checked, setChecked] = useState(false);
  const handleToggle = e => {
    setChecked(!checked);
  };

  return (
    <Chip
      category="Gender Justice"
      handleToggle={handleToggle}
      checked={checked}
    />
  );
}
