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

// prop type for an individual stat
const StatPropTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  delay: PropTypes.number,
  description: PropTypes.string
};

/**
  stats slice
 */
// MARK: stats slice
const StatsSlice = ({ stats }) => {
  const localStats = stats;
  return (
    <OuterWrapper>
      <InnerWrapper>
        {localStats?.map((stat, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StatComponent key={index} {...stat} delay={index * 1000} />
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
};

StatsSlice.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape(StatPropTypes))
};

// MARK: individual stat
function StatComponent({ value, description, delay }) {
  return (
    <StatContainer>
      <ValueContainer>
        <StatValue>
          <AnimatedText value={value} delay={delay} />
        </StatValue>
        <ValueUnderline src={altCtaUnderline} className="cta-text-underline" />
      </ValueContainer>
      <Text size="s">{description}</Text>
    </StatContainer>
  );
}

StatComponent.propTypes = StatPropTypes;

function getValueType(value) {
  return Number.isNaN(parseInt(value, 10)) ? 'string' : 'number';
}

// MARK: string
function AnimatedText({ value, delay }) {
  const totalDelay = String(value).length * 100;

  const characters = String(value)
    .split('')
    .map((character) => {
      const type = getValueType(character);
      return {
        character,
        type
      };
    });

  return (
    <div style={{ display: 'flex' }}>
      {characters.map(({ character, type }, index) => {
        const key = index + character;
        const characterDelay = delay + (totalDelay - index * 100);
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
    </div>
  );
}

AnimatedText.propTypes = {
  value: PropTypes.string.isRequired,
  delay: PropTypes.number
};

// MARK: string char
function AnimatedString({ value, delay }) {
  const digitRef = useRef(null);

  useEffect(() => {
    const transform = `translateY(-50%)`;
    digitRef.current?.style.setProperty('transform', transform);
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

// MARK: numeric char
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
  value: PropTypes.number.isRequired,
  delay: PropTypes.number
};

export default StatsSlice;
