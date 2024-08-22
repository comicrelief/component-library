"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
require("jest-styled-components");
var _shallowWithTheme = _interopRequireDefault(require("../../../../tests/hoc/shallowWithTheme"));
var _VideoBanner = _interopRequireDefault(require("./VideoBanner"));
var _VideoBannerPosterImage = _interopRequireDefault(require("../../../styleguide/assets/VideoBannerPosterImage.png"));
it("renders correctly", () => {
  const src = "https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4";
  const tree = (0, _shallowWithTheme.default)( /*#__PURE__*/_react.default.createElement(_VideoBanner.default, {
    poster: _VideoBannerPosterImage.default,
    video: src
  })).toJSON();
  expect(tree).toMatchInlineSnapshot("\n    .c0 {\n      width: 100%;\n      height: 100%;\n    }\n\n    <video\n      className=\"c0\"\n      controls={false}\n      loop={false}\n      muted={true}\n      playsInline={true}\n      poster=\"mock.asset\"\n      src=\"https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4\"\n    >\n      Your browser does not support video.\n    </video>\n  ");
});