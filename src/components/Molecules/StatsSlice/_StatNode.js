import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import altCtaUnderline from '../../../theme/shared/assets/alt_cta_underline.svg';
import {
  AccessibleValue,
  AnimatedCharacter,
  AnimatedDigit,
  Body,
  SpacingCharacter,
  StatContainer,
  StatValue,
  ValueContainer,
  ValueUnderline,
  Word
} from './StatsSlice.style';

/**
 * check whether a string character is a number or a string
 * @param {string} character
 * @returns {'string' | 'number'}
 */
function getValueType(character) {
  return Number.isNaN(parseInt(character, 10)) ? 'string' : 'number';
}

// MARK: stat
export default function StatNodeComponent({
  stat,
  characterStagger,
  stringCharacterDuration,
  numberCharacterDuration,
  ease,
  body
}) {
  // calculate the duration for the animation
  // based on the number of characters and the stagger;
  // limit the duration to 1600ms to avoid overly long animations
  const duration = Math.min(String(stat).length, 16) * characterStagger;

  // use an intersection observer to postpone the animation until the stats slice is visible
  const elRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const startDelayRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // set the start delay based on the x position of the element;
          // this lets us delay stats incrementally, showing columns one after another (ish),
          // while allowing rows to control their own entry times
          startDelayRef.current = (entry.boundingClientRect.left / window.innerWidth) * 1600;
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0 });

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // split value into words and characters,
  // and get the type of each character;
  // we animate string and numeric values differently
  const words = stat
    .split(' ')
    .map(word => word.split('').map(character => {
      const type = getValueType(character);
      return {
        word,
        character,
        type
      };
    }));

  // track delay for each character for a staggered effect
  let characterDelay = startDelayRef.current;

  return (
    <StatContainer>
      <ValueContainer>
        <StatValue aria-hidden="true" ref={elRef}>
          {words.map((wordObj, wordIndex) => {
            // slightly gnarly here as we need to create a span for each word,
            // then the characters within that span;
            // this is to allow us to break lines at word boundaries,
            // rather than flex's preferred middle-of-the-word approach;
            // NB this does mean we can't break super-long strings like "456,789,123.109"
            // but that's unlikely to be a problem in practice
            const wordKey = String(wordIndex) + wordObj.word;
            return (
              <Word key={wordKey}>
                {wordObj.map(({ character, type }, characterIndex) => {
                  const characterKey = wordKey + String(characterIndex) + character;
                  // update the character delay for the next character;
                  // this gives us a nice staggered effect
                  characterDelay += characterStagger;
                  // characterIndex += 1;
                  switch (type) {
                    case 'string':
                      return (
                        <AnimatedStringCharacter
                          key={characterKey}
                          character={character}
                          delay={characterDelay}
                          ease={ease}
                          characterDuration={stringCharacterDuration}
                          isVisible={isVisible}
                        />
                      );
                    case 'number':
                      return (
                        <AnimatedNumberCharacter
                          key={characterKey}
                          character={character}
                          delay={characterDelay}
                          ease={ease}
                          characterDuration={numberCharacterDuration}
                          isVisible={isVisible}
                        />
                      );
                    default:
                      return null;
                  }
                })}
              </Word>
            );
          })}
        </StatValue>
        {isVisible && (
        <ValueUnderline
          src={altCtaUnderline}
          delay={startDelayRef.current + duration * 1.5}
          data-ease={ease}
        />
        )}
        <AccessibleValue>{stat}</AccessibleValue>
      </ValueContainer>
      <Body>{body}</Body>
    </StatContainer>
  );
}
StatNodeComponent.propTypes = {
  stat: PropTypes.string.isRequired,
  characterStagger: PropTypes.number,
  ease: PropTypes.string,
  stringCharacterDuration: PropTypes.string,
  numberCharacterDuration: PropTypes.string,
  body: PropTypes.string
};

// MARK: string
function AnimatedStringCharacter({
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
      <AnimatedDigit ref={digitRef} duration={characterDuration} delay={delay} data-ease={ease}>
        <div>&nbsp;</div>
        <div>{character}</div>
      </AnimatedDigit>
    </AnimatedCharacter>
  );
}
AnimatedStringCharacter.propTypes = {
  character: PropTypes.string.isRequired,
  delay: PropTypes.number,
  ease: PropTypes.string,
  characterDuration: PropTypes.string,
  isVisible: PropTypes.bool
};

// MARK: number
function AnimatedNumberCharacter({
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
      <AnimatedDigit ref={digitRef} duration={characterDuration} delay={delay} data-ease={ease}>
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
AnimatedNumberCharacter.propTypes = {
  character: PropTypes.string.isRequired,
  delay: PropTypes.number,
  ease: PropTypes.string,
  characterDuration: PropTypes.string,
  isVisible: PropTypes.bool
};
