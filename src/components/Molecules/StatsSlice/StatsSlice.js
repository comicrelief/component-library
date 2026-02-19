import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  OuterWrapper,
  InnerWrapper,
  StatContainer,
  StatValue,
  AnimatedDigit
} from './StatsSlice.style';
import Text from '../../Atoms/Text/Text';

/**
  stats slice
 */
const StatsSlice = ({ stats }) => {
  const localStats = stats;
  return (
    <OuterWrapper>
      <InnerWrapper>
        {localStats?.map((stat, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StatComponent key={index} {...stat} />
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
};

const StatPropTypes = {
  prefix: PropTypes.string,
  value: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  description: PropTypes.string
};

StatsSlice.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape(StatPropTypes))
};

function StatComponent({ prefix, value, suffix, description }) {
  return (
    <StatContainer>
      <StatValue>
        <AnimatedString value={value} />
        {/* {prefix}
        {value}
        {suffix} */}
      </StatValue>
      <Text size="s">{description}</Text>
    </StatContainer>
  );
}

StatComponent.propTypes = StatPropTypes;

function getValueType(value) {
  return Number.isNaN(parseInt(value, 10)) ? 'string' : 'number';
}

function AnimatedString({ value, delay }) {
  const totalDelay = String(value).length * 100;

  return (
    <div style={{ display: 'flex' }}>
      {String(value)
        .split('')
        .map((character, index) => {
          const type = getValueType(character);
          return (
            <AnimatedCharacter
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              value={character}
              type={type}
              delay={totalDelay - index * 100}
            />
          );
        })}
    </div>
  );
}

function AnimatedCharacter({ value, type, delay }) {
  const digitRef = useRef(null);

  useEffect(() => {
    digitRef.current.style.transform = `translateY(-${(100 / 11) * +value}%)`;
  }, [value]);

  switch (type) {
    case 'string': {
      return (
        <div>
          <div> </div>
          <span>{value}</span>
        </div>
      );
    }
    case 'number':
    default: {
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
  }
}

export const ValueTypes = {
  String: 'string',
  Number: 'number'
};

AnimatedCharacter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(Object.values(ValueTypes)),
  delay: PropTypes.number
};

export default StatsSlice;
