import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import PropTypes from 'prop-types';

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2
    }
  };
}

export default function Confetti({ trigger, duration }) {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    if (refAnimationInstance.current) {
      refAnimationInstance.current.reset();
    }
  }, [intervalId]);

  // eslint-disable-next-line
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    let timeOut;
    if (trigger) {
      startAnimation();
      timeOut = setTimeout(() => {
        // This gracefully ends the animation
        pauseAnimation();
      }, duration);
    }
    return () => {
      if (timeOut) {
        // this clears up the animation
        stopAnimation();
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, duration]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}

Confetti.defaultProps = {
  duration: 3000
};

Confetti.propTypes = {
  trigger: PropTypes.bool.isRequired,
  duration: PropTypes.number
};
