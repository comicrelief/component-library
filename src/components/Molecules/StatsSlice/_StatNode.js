import PropTypes from 'prop-types';
import React, { useRef, useContext } from 'react';
import altCtaUnderline from '../../../theme/shared/assets/alt_cta_underline.svg';
import Text from '../../Atoms/Text/Text';
import {
  AnimatedDigit,
  StatContainer,
  StatValue,
  ValueContainer,
  ValueUnderline,
  AnimatedCharacter,
  SpacingCharacter,
  AccessibleValue

} from './StatsSlice.style';
import StatContext from './_utils';

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
  duration,
  startDelay,
  characterStagger,
  body
}) {
  const isVisible = useContext(StatContext);

  // split the value into characters and get the type of each character
  const characters = stat.split('').map(character => {
    const type = getValueType(character);
    return {
      character,
      type
    };
  });

  return (
    <StatContainer>
      <ValueContainer>
        <StatValue aria-hidden="true">
          {characters.map(({ character, type }, index) => {
            const key = index + character;
            const characterDelay = startDelay + (duration - index * characterStagger);
            switch (type) {
              case 'string':
                return (
                  <AnimatedStringCharacter
                    key={key}
                    character={character}
                    delay={characterDelay}
                  />
                );
              case 'number':
                return (
                  <AnimatedNumberCharacter
                    key={key}
                    character={character}
                    delay={characterDelay}
                  />
                );
              default:
                return null;
            }
          })}
        </StatValue>
        {isVisible && (
        <ValueUnderline
          src={altCtaUnderline}
          delay={startDelay + duration * 1.5}
        />
        )}
        <AccessibleValue>{stat}</AccessibleValue>
      </ValueContainer>
      <Text size="s">{body}</Text>
    </StatContainer>
  );
}
StatNodeComponent.propTypes = {
  stat: PropTypes.string.isRequired,
  duration: PropTypes.number,
  startDelay: PropTypes.number,
  characterStagger: PropTypes.number,
  body: PropTypes.string
};

// MARK: string
function AnimatedStringCharacter({ character, delay }) {
  const isVisible = useContext(StatContext);
  const digitRef = useRef();

  if (isVisible) {
    digitRef.current?.style.setProperty('transform', 'translateY(-50%)');
  }

  // TODO add more characters?

  return (
    <AnimatedCharacter>
      <SpacingCharacter>{character}</SpacingCharacter>
      <AnimatedDigit ref={digitRef} duration={1200} delay={delay}>
        <div>&nbsp;</div>
        <div>{character}</div>
      </AnimatedDigit>
    </AnimatedCharacter>
  );
}
AnimatedStringCharacter.propTypes = {
  character: PropTypes.string.isRequired,
  delay: PropTypes.number
};

// MARK: number
function AnimatedNumberCharacter({ character, delay }) {
  const isVisible = useContext(StatContext);
  const digitRef = useRef();

  if (isVisible) {
    // calculate offset to show the required digit
    const transform = `translateY(-${(100 / 11) * (+character || 10)}%)`;
    digitRef.current?.style.setProperty('transform', transform);
  }

  return (
    <AnimatedCharacter>
      <SpacingCharacter>{character}</SpacingCharacter>
      <AnimatedDigit ref={digitRef} duration={2000} delay={delay}>
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
  delay: PropTypes.number
};
