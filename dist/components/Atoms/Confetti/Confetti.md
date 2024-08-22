# Confetti

```js
import React, { useState } from 'react';
import Confetti from './Confetti';

const [isConfetti, setIsConfetti] = useState(false);

const handleConfettiTrigger = () => setIsConfetti(!isConfetti);

<>
  <Confetti trigger={isConfetti} />
  <button type="button" onClick={handleConfettiTrigger}>trigger confetti</button>
</>
```
