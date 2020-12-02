import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';


const Countdown = ({endDate, color, endMessage}) => {
  const [countdownEnd, setCountdownEnd] = useState(false);
  const [countdownTime, setCountdownTime] = useState("");
  
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
  
      setCountdownTime(`${days}:${hours}:${minutes} ${seconds}`);
  
      if (distance < 0) {
        setCountdownEnd(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  
  if (endMessage.length < 1) {
    return !countdownEnd ? (
      <Text color={color}>
        {countdownTime}
      </Text>
    ) : null;
  }

  return (
    <Text color={color}>
      {countdownEnd ? endMessage : countdownTime}
    </Text>
  )
};

Countdown.protoTypes = {
  endDate: PropTypes.string.isRequired,
  color: PropTypes.string,
  endMessage: PropTypes.string
}

Countdown.defaultProps = {
  color: "black",
  endMessage: ""
}

export default Countdown;
