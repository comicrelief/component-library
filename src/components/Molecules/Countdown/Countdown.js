import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import { Wrapper, Digits } from './Countdown.style';

const Countdown = ({
  endDate, color, endMessage, introMessage
}) => {
  const [countdownHasEnded, setCountdownHasEnded] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const countDownDate = new Date(endDate).getTime();
  // Keep number with two digits
  const formatNumber = number => (`0${number}`).slice(-2);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = countDownDate - now;

      const days = formatNumber(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
      const hours = formatNumber(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = formatNumber(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = formatNumber(Math.floor((timeRemaining % (1000 * 60)) / 1000));

      setCountdownTime({
        days,
        hours,
        minutes,
        seconds
      });

      if (timeRemaining < 0) {
        setCountdownHasEnded(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return countdownHasEnded ? endMessage : (
    <>
      {introMessage}
      <Wrapper>
        <Digits>
          <Text color={color} family="Anton" size="xl">
            {countdownTime.days}
          </Text>
          <Text color={color} size="xs" uppercase>
            days
          </Text>
        </Digits>
        <Text color={color} family="Anton" size="xl">
          :
        </Text>
        <Digits>
          <Text color={color} family="Anton" size="xl">
            {countdownTime.hours}
          </Text>
          <Text color={color} size="xs" uppercase>
            hours
          </Text>
        </Digits>
        <Text color={color} family="Anton" size="xl">
          :
        </Text>
        <Digits>
          <Text color={color} family="Anton" size="xl">
            {countdownTime.minutes}
          </Text>
          <Text color={color} size="xs" uppercase>
            minutes
          </Text>
        </Digits>
        <Digits>
          <Text color={color} family="Anton" size="xl">
            {countdownTime.seconds}
          </Text>
          <Text color={color} size="xs" uppercase>
            seconds
          </Text>
        </Digits>
      </Wrapper>
    </>
  );
};

Countdown.protoTypes = {
  endDate: PropTypes.string.isRequired,
  color: PropTypes.string,
  endMessage: PropTypes.node,
  introMessage: PropTypes.node
};

Countdown.defaultProps = {
  color: 'black',
  endMessage: null,
  introMessage: null
};

export default Countdown;
