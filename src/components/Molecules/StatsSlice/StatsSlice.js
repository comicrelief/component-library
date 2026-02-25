import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  OuterWrapper,
  InnerWrapper,
  StatContainer,
  StatValue,
  AnimatedDigit,
  ValueContainer,
  ValueUnderline
} from './StatsSlice.style';
import Text from '../../Atoms/Text/Text';
import altCtaUnderline from '../../../theme/shared/assets/alt_cta_underline.svg';

const characterDelayMs = 100;

// MARK: stats slice
const StatsSlice = ({ stats }) => {
  const delays = stats?.map(
    stat => String(stat.value).length * characterDelayMs
  );
  let startDelay = 0;

  return (
    <OuterWrapper>
      <InnerWrapper>
        {stats?.map((stat, index) => {
          const key = index + String(stat.value);
          const delay = delays[index];
          const statComponent = (
            <StatComponent
              key={key}
              value={String(stat.value)}
              delay={delay}
              startDelay={startDelay}
              description={stat.description}
            />
          );
          // update the start delay for the next stat
          startDelay += delay;
          return statComponent;
        })}
      </InnerWrapper>
    </OuterWrapper>
  );
};
StatsSlice.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      delay: PropTypes.number,
      description: PropTypes.string
    })
  )
};

/**
 * check whether a string character is a number or a string
 * @param {string} character
 * @returns {'string' | 'number'}
 */
function getValueType(character) {
  return Number.isNaN(parseInt(character, 10)) ? 'string' : 'number';
}

// MARK: individual stat
function StatComponent({
  value,
  delay,
  startDelay,
  description
}) {
  // split the value into characters and get the type of each character
  const characters = value
    .split('')
    .map(character => {
      const type = getValueType(character);
      return {
        character,
        type
      };
    });

  return (
    <StatContainer>
      <ValueContainer>
        <StatValue>
          {characters.map(({ character, type }, index) => {
            const key = index + character;
            const characterDelay = startDelay + (delay - index * characterDelayMs);
            switch (type) {
              case 'string':
                return (
                  <AnimatedString
                    key={key}
                    value={character}
                    delay={characterDelay}
                  />
                );
              case 'number':
                return (
                  <AnimatedNumber
                    key={key}
                    value={character}
                    delay={characterDelay}
                  />
                );
              default:
                return null;
            }
          })}
        </StatValue>
        <ValueUnderline
          src={altCtaUnderline}
          delay={startDelay + delay * 1.5}
        />
      </ValueContainer>
      <Text size="s">{description}</Text>
    </StatContainer>
  );
}
StatComponent.propTypes = {
  value: PropTypes.string.isRequired,
  delay: PropTypes.number,
  startDelay: PropTypes.number,
  description: PropTypes.string
};

// MARK: string
function AnimatedString({ value, delay }) {
  const digitRef = useRef(null);

  useEffect(() => {
    digitRef.current?.style.setProperty('transform', 'translateY(-50%)');
  }, [value]);

  // TODO add more characters?

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <span style={{ visibility: 'hidden', whiteSpace: 'pre' }}>{value}</span>
      <AnimatedDigit style={{ '--delay': `${delay}ms` }} ref={digitRef}>
        <div>&nbsp;</div>
        <div>{value}</div>
      </AnimatedDigit>
    </div>
  );
}
AnimatedString.propTypes = {
  value: PropTypes.string.isRequired,
  delay: PropTypes.number
};

// MARK: number
function AnimatedNumber({ value, delay }) {
  const digitRef = useRef(null);

  useEffect(() => {
    const transform = `translateY(-${(100 / 11) * (+value || 10)}%)`;
    digitRef.current?.style.setProperty('transform', transform);
  }, [value]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <span style={{ visibility: 'hidden' }}>{value}</span>
      <AnimatedDigit style={{ '--delay': `${delay}ms` }} ref={digitRef}>
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
    </div>
  );
}
AnimatedNumber.propTypes = {
  value: PropTypes.string.isRequired,
  delay: PropTypes.number
};

export default StatsSlice;
