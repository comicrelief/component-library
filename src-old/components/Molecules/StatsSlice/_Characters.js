import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import {
  AnimatedCharacter,
  AnimatedDigit,
  SpacingCharacter
} from './StatsSlice.style';

const propTypes = {
  character: PropTypes.string.isRequired,
  delay: PropTypes.number,
  ease: PropTypes.string,
  characterDuration: PropTypes.string,
  isVisible: PropTypes.bool.isRequired
};

// MARK: string
export function AnimatedStringCharacter({
  character,
  delay,
  ease,
  characterDuration,
  isVisible
}) {
  const digitRef = useRef();

  if (isVisible) {
    digitRef.current?.style.setProperty('transform', 'translateY(-50%)');
  }

  return (
    <AnimatedCharacter>
      <SpacingCharacter>{character}</SpacingCharacter>
      <AnimatedDigit
        ref={digitRef}
        duration={characterDuration}
        delay={delay}
        data-ease={ease}
      >
        <div>&nbsp;</div>
        <div>{character}</div>
      </AnimatedDigit>
    </AnimatedCharacter>
  );
}
AnimatedStringCharacter.propTypes = propTypes;

// MARK: number
export function AnimatedNumberCharacter({
  character,
  delay,
  ease,
  characterDuration,
  isVisible
}) {
  const digitRef = useRef();

  if (isVisible) {
    // calculate offset to show the required digit
    const transform = `translateY(-${(100 / 11) * (+character || 10)}%)`;
    digitRef.current?.style.setProperty('transform', transform);
  }

  return (
    <AnimatedCharacter>
      <SpacingCharacter>{character}</SpacingCharacter>
      <AnimatedDigit
        ref={digitRef}
        duration={characterDuration}
        delay={delay}
        data-ease={ease}
      >
        <div>&nbsp;</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>0</div>
      </AnimatedDigit>
    </AnimatedCharacter>
  );
}
AnimatedNumberCharacter.propTypes = propTypes;
