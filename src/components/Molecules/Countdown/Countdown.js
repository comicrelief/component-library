import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../../Atoms/Text/Text';
import { Wrapper, Digits } from './Countdown.style';

const Countdown = ({
  endDate, color = 'black', endMessage = null, introMessage = null
}) => {
  const [countdownHasEnded, setCountdownHasEnded] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const countDownDate = moment(endDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const timeRemaining = moment(countDownDate - now);

      const days = timeRemaining.format('DDD');
      const hours = timeRemaining.format('HH');
      const minutes = timeRemaining.format('mm');
      const seconds = timeRemaining.format('ss');

      setCountdownTime({
        days: days - 1,
        hours: hours - 1,
        minutes,
        seconds
      });

      if (countDownDate.diff(now, 'seconds') < 1) {
        setCountdownHasEnded(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  if (countdownHasEnded) return endMessage;

  return (
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

Countdown.propTypes = {
  endDate: PropTypes.string.isRequired,
  color: PropTypes.string,
  endMessage: PropTypes.node,
  introMessage: PropTypes.node
};

export default Countdown;
