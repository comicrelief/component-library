"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PromoVideoButton = require("./_PromoVideoButton.style");
const ProgressRing = _ref => {
  let {
    videoProgress,
    ...rest
  } = _ref;
  const thisStroke = 4;
  const thisRadius = 28;
  const initNormRadius = thisRadius - thisStroke * 2;
  const thisCircumference = initNormRadius * 2 * Math.PI;
  const [thisDashOffset, setThisDashOffset] = (0, _react.useState)(initNormRadius * 2 * Math.PI);
  (0, _react.useEffect)(() => {
    const offset = thisCircumference - videoProgress / 100 * thisCircumference;
    setThisDashOffset(offset);
  }, [videoProgress, thisCircumference]);
  return /*#__PURE__*/_react.default.createElement(_PromoVideoButton.ProgressRingWrapper, {
    videoProgress: videoProgress
  }, /*#__PURE__*/_react.default.createElement(_PromoVideoButton.ProgressRingSVG, {
    height: thisRadius * 2,
    width: thisRadius * 2
  }, /*#__PURE__*/_react.default.createElement(_PromoVideoButton.ProgressRingCircle, Object.assign({
    strokeDasharray: "".concat(thisCircumference, " ").concat(thisCircumference),
    strokeDashOffsetStyle: thisDashOffset,
    strokeWidth: "".concat(thisStroke),
    r: "".concat(initNormRadius),
    cx: "".concat(thisRadius),
    cy: "".concat(thisRadius)
  }, rest))));
};
var _default = exports.default = ProgressRing;