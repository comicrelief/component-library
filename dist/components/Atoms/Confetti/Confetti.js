"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Confetti;
var _react = _interopRequireWildcard(require("react"));
var _reactCanvasConfetti = _interopRequireDefault(require("react-canvas-confetti"));
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
function Confetti(_ref) {
  let {
    trigger,
    duration = 3000
  } = _ref;
  const refAnimationInstance = (0, _react.useRef)(null);
  const [intervalId, setIntervalId] = (0, _react.useState)();
  const getInstance = (0, _react.useCallback)(instance => {
    refAnimationInstance.current = instance;
  }, []);
  const nextTickAnimation = (0, _react.useCallback)(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);
  const startAnimation = (0, _react.useCallback)(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);
  const pauseAnimation = (0, _react.useCallback)(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);
  const stopAnimation = (0, _react.useCallback)(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    if (refAnimationInstance.current) {
      refAnimationInstance.current.reset();
    }
  }, [intervalId]);

  // eslint-disable-next-line
  (0, _react.useEffect)(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactCanvasConfetti.default, {
    refConfetti: getInstance,
    style: canvasStyles
  }));
}