"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _Text = _interopRequireDefault(require("../../Atoms/Text/Text"));
var _Countdown = require("./Countdown.style");
const Countdown = _ref => {
  let {
    endDate,
    color = 'black',
    endMessage = null,
    introMessage = null
  } = _ref;
  const [countdownHasEnded, setCountdownHasEnded] = (0, _react.useState)(false);
  const [countdownTime, setCountdownTime] = (0, _react.useState)({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  const countDownDate = (0, _moment.default)(endDate);
  (0, _react.useEffect)(() => {
    const interval = setInterval(() => {
      const now = (0, _moment.default)();
      const timeRemaining = (0, _moment.default)(countDownDate - now);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, introMessage, /*#__PURE__*/_react.default.createElement(_Countdown.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Countdown.Digits, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    family: "Anton",
    size: "xl"
  }, countdownTime.days), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    size: "xs",
    uppercase: true
  }, "days")), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    family: "Anton",
    size: "xl"
  }, ":"), /*#__PURE__*/_react.default.createElement(_Countdown.Digits, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    family: "Anton",
    size: "xl"
  }, countdownTime.hours), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    size: "xs",
    uppercase: true
  }, "hours")), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    family: "Anton",
    size: "xl"
  }, ":"), /*#__PURE__*/_react.default.createElement(_Countdown.Digits, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    family: "Anton",
    size: "xl"
  }, countdownTime.minutes), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    size: "xs",
    uppercase: true
  }, "minutes")), /*#__PURE__*/_react.default.createElement(_Countdown.Digits, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    family: "Anton",
    size: "xl"
  }, countdownTime.seconds), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: color,
    size: "xs",
    uppercase: true
  }, "seconds"))));
};
var _default = exports.default = Countdown;