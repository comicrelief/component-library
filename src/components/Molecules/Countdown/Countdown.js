import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import { Wrapper, Digits } from './Countdown.style';


const Countdown = ({endDate, color, endMessage, introMessage}) => {
  const [countdownEnd, setCountdownEnd] = useState(false);
  const [countdownTime, setCountdownTime] = useState({});
  
  const countDownDate = new Date(endDate).getTime();
  // Keep number with two digits
  const formatNumber = number => {
    return ("0" + number).slice(-2);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
  
      const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));
  
      setCountdownTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
  
      if (distance < 0) {
        setCountdownEnd(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  const CountDownClock = (
    <>
      {introMessage && introMessage}
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
  
  if (endMessage == null) {
    return !countdownEnd ? CountDownClock : null;
  }

  return countdownEnd ? endMessage : CountDownClock;
};

Countdown.protoTypes = {
  endDate: PropTypes.string.isRequired,
  color: PropTypes.string,
  endMessage: PropTypes.node,
  introMessage: PropTypes.node
}

Countdown.defaultProps = {
  color: "black",
  endMessage: null,
  introMessage: null
}

export default Countdown;
