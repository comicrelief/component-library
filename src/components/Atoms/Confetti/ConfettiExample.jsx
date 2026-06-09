import React, { useState } from 'react';
import Confetti from './Confetti';

export default function ConfettiExample() {
  const [isConfetti, setIsConfetti] = useState(false);
  const handleConfettiTrigger = () => setIsConfetti(!isConfetti);

  return (
    <>
      <Confetti trigger={isConfetti} />
      <button
        type="button"
        onClick={handleConfettiTrigger}
      >
        trigger confetti
      </button>
    </>
  );
}
