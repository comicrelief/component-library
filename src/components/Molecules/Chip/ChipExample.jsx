import React, { useState } from 'react';
import Chip from './Chip';

export default function ChipExample() {
  const [checked, setChecked] = useState(false);

  return (
    <Chip
      category="Gender Justice"
      handleToggle={() => setChecked(!checked)}
      checked={checked}
    />
  );
}
