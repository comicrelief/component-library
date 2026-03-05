import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import altCtaUnderline from '../../../theme/shared/assets/alt_cta_underline.svg';
import {
  AccessibleValue,
  Body,
  StatContainer,
  StatValue,
  ValueContainer,
  ValueUnderline,
  Word
} from './StatsSlice.style';
import splitStatString from './_utils';
import { AnimatedStringCharacter, AnimatedNumberCharacter } from './_Characters';

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
  const wordObjList = splitStatString(stat);

  // track delay for each character for a staggered effect
  let characterDelay = startDelayRef.current;

  return (
    <StatContainer>
      <ValueContainer>
        <StatValue aria-hidden="true" ref={elRef}>
          {wordObjList.map((wordObj, wordIndex) => {
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
                  const characterKey = String(characterIndex) + character;
                  // update the character delay for the next character;
                  // this gives us a nice staggered effect
                  characterDelay += characterStagger;

                  let CharacterComponent = null;
                  let characterDuration = null;
                  switch (type) {
                    case 'string':
                    default:
                      CharacterComponent = AnimatedStringCharacter;
                      characterDuration = stringCharacterDuration;
                      break;
                    case 'number':
                      CharacterComponent = AnimatedNumberCharacter;
                      characterDuration = numberCharacterDuration;
                      break;
                  }

                  return (
                    <CharacterComponent
                      key={characterKey}
                      character={character}
                      delay={characterDelay}
                      ease={ease}
                      characterDuration={characterDuration}
                      isVisible={isVisible}
                    />
                  );
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
  body: PropTypes.node
};
