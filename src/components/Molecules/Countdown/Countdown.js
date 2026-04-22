import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../../Atoms/Text/Text';
import { Wrapper, Digits } from './Countdown.style';

const pad2 = n => String(n).padStart(2, '0');

const Countdown = ({
  endDate, color = 'black', endMessage = null, introMessage = null
}) => {
  const [thisEndDate, setThisEndDate] = useState(null);
  const [countdownHasEnded, setCountdownHasEnded] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const parsed = moment(endDate);
    if (!parsed.isValid()) {
      setThisEndDate(null);
      setCountdownHasEnded(true);
      return;
    }
    setThisEndDate(parsed);
  }, [endDate]);

  useEffect(() => {
    if (!thisEndDate || !thisEndDate.isValid()) {
      return undefined;
    }

    const tick = () => {
      const now = moment();
      const diffSeconds = thisEndDate.diff(now, 'seconds');

      if (diffSeconds < 1) {
        setCountdownHasEnded(true);
        return;
      }

      const dur = moment.duration(thisEndDate.diff(now));
      setCountdownTime({
        days: pad2(Math.max(0, Math.floor(dur.asDays()))),
        hours: pad2(dur.hours()),
        minutes: pad2(dur.minutes()),
        seconds: pad2(dur.seconds())
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [thisEndDate]);

  if (countdownHasEnded) {
    return endMessage;
  }

  return (
    <>
      {introMessage}
      <Wrapper>
        <Digits>
          <Text color={color} family="Anton" size="xl">
            {countdownTime.days}
          </Text>
          <Text color={color} size="xs">
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
          <Text color={color} size="xs">
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
          <Text color={color} size="xs">
            minutes
          </Text>
        </Digits>
        <Digits>
          <Text color={color} family="Anton" size="xl">
            {countdownTime.seconds}
          </Text>
          <Text color={color} size="xs">
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
