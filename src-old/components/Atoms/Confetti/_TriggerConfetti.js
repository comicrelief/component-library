import React, { useState } from 'react';
import Confetti from './Confetti';

export default function TriggerConfetti() {
  const [isConfetti, setIsConfetti] = useState(false);

  return (

    <>
      <Confetti trigger={isConfetti} />
      <button type="button" onClick={() => setIsConfetti(!isConfetti)}>trigger confetti</button>
    </>

  );
}
