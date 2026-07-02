import React, { useState } from 'react';
import Confetti from './Confetti';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function ConfettiExample() {
  const [isConfetti, setIsConfetti] = useState(false);
  const handleConfettiTrigger = () => setIsConfetti(!isConfetti);

  return (
    <ExampleContainer>
      <Confetti trigger={isConfetti} />
      <button
        type="button"
        onClick={handleConfettiTrigger}
      >
        trigger confetti
      </button>
    </ExampleContainer>
  );
}
