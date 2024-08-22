"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = require("styled-components");
var _colors = _interopRequireDefault(require("./colors"));
const buttonColors = {
  black: {
    background: (0, _colors.default)('black'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('grey'),
    hoverColor: (0, _colors.default)('black')
  },
  blue: {
    background: (0, _colors.default)('blue'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('blue_light'),
    hoverColor: (0, _colors.default)('black')
  },
  blue_dark: {
    background: (0, _colors.default)('blue_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('blue'),
    hoverColor: (0, _colors.default)('black')
  },
  blue_light: {
    background: (0, _colors.default)('blue_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('blue_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  coral: {
    background: (0, _colors.default)('coral'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('coral_light'),
    hoverColor: (0, _colors.default)('black')
  },
  coral_dark: {
    background: (0, _colors.default)('coral_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('coral'),
    hoverColor: (0, _colors.default)('black')
  },
  coral_light: {
    background: (0, _colors.default)('coral_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('coral_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  green: {
    background: (0, _colors.default)('green'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('green_light'),
    hoverColor: (0, _colors.default)('black')
  },
  green_dark: {
    background: (0, _colors.default)('green_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('green'),
    hoverColor: (0, _colors.default)('black')
  },
  green_light: {
    background: (0, _colors.default)('green_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('green_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  grey: {
    background: (0, _colors.default)('grey'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('grey_light'),
    hoverColor: (0, _colors.default)('black')
  },
  grey_dark: {
    background: (0, _colors.default)('grey_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('grey'),
    hoverColor: (0, _colors.default)('black')
  },
  grey_light: {
    background: (0, _colors.default)('grey_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('grey_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  magenta: {
    background: (0, _colors.default)('magenta'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('magenta_light'),
    hoverColor: (0, _colors.default)('black')
  },
  magenta_dark: {
    background: (0, _colors.default)('magenta_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('magenta'),
    hoverColor: (0, _colors.default)('black')
  },
  magenta_light: {
    background: (0, _colors.default)('magenta_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('magenta_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  orange: {
    background: (0, _colors.default)('orange'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('orange_light'),
    hoverColor: (0, _colors.default)('black')
  },
  orange_dark: {
    background: (0, _colors.default)('orange_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('orange'),
    hoverColor: (0, _colors.default)('black')
  },
  orange_light: {
    background: (0, _colors.default)('orange_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('orange_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  purple: {
    background: (0, _colors.default)('purple'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('purple_light'),
    hoverColor: (0, _colors.default)('black')
  },
  purple_dark: {
    background: (0, _colors.default)('purple_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('purple'),
    hoverColor: (0, _colors.default)('black')
  },
  purple_light: {
    background: (0, _colors.default)('purple_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('purple_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  red: {
    background: (0, _colors.default)('red'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('red_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  teal: {
    background: (0, _colors.default)('teal'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('teal_light'),
    hoverColor: (0, _colors.default)('black')
  },
  teal_dark: {
    background: (0, _colors.default)('teal_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('teal'),
    hoverColor: (0, _colors.default)('black')
  },
  teal_light: {
    background: (0, _colors.default)('teal_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('teal_dark'),
    hoverColor: (0, _colors.default)('white')
  },
  transparent: {
    background: 'rgba(255, 255, 255, 0.5)',
    color: 'inherit',
    hoverBackground: 'rgba(255, 255, 255, 0.7)',
    hoverColor: 'inherit'
  },
  white: {
    background: (0, _colors.default)('white'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('grey'),
    hoverColor: (0, _colors.default)('black')
  },
  yellow: {
    background: (0, _colors.default)('yellow'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('yellow_light'),
    hoverColor: (0, _colors.default)('black')
  },
  yellow_dark: {
    background: (0, _colors.default)('yellow_dark'),
    color: (0, _colors.default)('white'),
    hoverBackground: (0, _colors.default)('yellow'),
    hoverColor: (0, _colors.default)('black')
  },
  yellow_light: {
    background: (0, _colors.default)('yellow_light'),
    color: (0, _colors.default)('black'),
    hoverBackground: (0, _colors.default)('yellow_dark'),
    hoverColor: (0, _colors.default)('white')
  }
};
var _default = colorName => {
  let style = 'inherit';
  if (colorName) {
    style = (0, _styledComponents.css)(["background-color:", ";color:", ";:hover{background-color:", ";color:", ";}"], buttonColors[colorName].background, buttonColors[colorName].color, buttonColors[colorName].hoverBackground, buttonColors[colorName].hoverColor);
  }
  return style;
};
exports.default = _default;