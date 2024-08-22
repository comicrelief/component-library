"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Logo = _interopRequireDefault(require("../../Atoms/Logo/Logo"));
const TitleLabel = _styledComponents.default.span.withConfig({
  displayName: "Logos__TitleLabel",
  componentId: "sc-z3hhhd-0"
})(["line-height:0;font-size:0;color:transparent;"]);
const Logos = _ref => {
  let {
    campaign = 'Comic Relief'
  } = _ref;
  if (campaign === 'Sport Relief Gameon') {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
      href: "/",
      title: "Go to Comic Relief homepage"
    }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
      rotate: true,
      sizeSm: "50px",
      sizeMd: "60px",
      campaign: "Comic Relief",
      title: "Go to Comic Relief homepage"
    }), /*#__PURE__*/_react.default.createElement(TitleLabel, null, "Go to Comic Relief homepage")), /*#__PURE__*/_react.default.createElement("a", {
      href: "/sportrelief/",
      title: "Go to Sport Relief homepage"
    }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
      sizeSm: "100px",
      sizeMd: "120px",
      campaign: "Sport Relief Gameon",
      title: "Go to Sport Relief homepage"
    }), /*#__PURE__*/_react.default.createElement(TitleLabel, null, "Go to Sport Relief homepage")));
  }
  if (campaign === 'Sport Relief') {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: "/sportrelief",
      title: "Go to Sport Relief homepage"
    }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
      rotate: false,
      campaign: "Sport Relief",
      title: "Sport Relief in homepage"
    }), /*#__PURE__*/_react.default.createElement(TitleLabel, null, "Go to Sport Relief homepage"));
  }
  if (campaign === 'Pride') {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: "/",
      title: "Go to Comic Relief homepage"
    }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
      rotate: false,
      campaign: "Pride",
      title: "Go to Comic Relief homepage"
    }), /*#__PURE__*/_react.default.createElement(TitleLabel, null, "Go to Comic Relief homepage"));
  }
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    title: "Go to Comic Relief homepage"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    rotate: false,
    campaign: "Comic Relief",
    title: "Go to Comic Relief homepage"
  }), /*#__PURE__*/_react.default.createElement(TitleLabel, null, "Go to Comic Relief homepage"));
};
var _default = exports.default = Logos;