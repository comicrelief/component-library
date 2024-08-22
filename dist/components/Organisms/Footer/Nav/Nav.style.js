"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNavMenu = exports.SubNavLink = exports.SubNavItem = exports.NavMenu = exports.NavLink = exports.NavItem = exports.Nav = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Link = _interopRequireDefault(require("../../../Atoms/Link/Link"));
var _hideVisually = _interopRequireDefault(require("../../../../theme/shared/hideVisually"));
const NavLinkClass = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "Navstyle__NavLinkClass",
  componentId: "sc-uzf5hs-0"
})(["border:0;height:46px;width:100%;background-color:", ";&:hover,&:focus{border-bottom:none;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('deep_violet_dark');
});

/**
 * Navigation menu
 */
const Nav = exports.Nav = _styledComponents.default.nav.withConfig({
  displayName: "Navstyle__Nav",
  componentId: "sc-uzf5hs-1"
})(["display:block;width:100%;text-align:left;> h2{", ";}"], _hideVisually.default);

/**
 * Sub Navigation Menu (second level)
 */
const SubNavMenu = exports.SubNavMenu = _styledComponents.default.ul.withConfig({
  displayName: "Navstyle__SubNavMenu",
  componentId: "sc-uzf5hs-2"
})(["display:flex;transition:max-height 0.5s ease;max-height:", ";overflow:hidden;padding:0;position:relative;list-style:none outside;flex-direction:column;> li a{display:", ";font-size:15px;font-weight:500;cursor:pointer;&:after{content:none;}}@media ", "{max-height:none;height:auto;", ";> li a{display:inline;line-height:24px;}}"], _ref2 => {
  let {
    isSubMenuOpen
  } = _ref2;
  return isSubMenuOpen ? '400px' : '0px';
}, _ref3 => {
  let {
    isSubMenuOpen
  } = _ref3;
  return isSubMenuOpen ? 'inline' : 'none';
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, _ref5 => {
  let {
    column
  } = _ref5;
  return column === true ? 'flex-direction: row; flex-wrap: wrap;' : null;
});

/**
 * Sub Menu list items
 */
const SubNavItem = exports.SubNavItem = _styledComponents.default.li.withConfig({
  displayName: "Navstyle__SubNavItem",
  componentId: "sc-uzf5hs-3"
})(["height:40px;width:100%;background-color:inherit;padding:8px 0;@media ", "{height:auto;margin-top:12px;padding:0;", ";a{background-color:inherit;height:auto;&:after{content:none !important;}&:hover,&:focus{border-bottom:2px solid #fff;span{border-bottom:0;padding-bottom:2px;}}}}@media ", "{", ";}"], _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.allBreakpoints('M');
}, _ref7 => {
  let {
    column
  } = _ref7;
  return column === true ? 'flex: 0 0 100%;' : null;
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('L');
}, _ref9 => {
  let {
    column
  } = _ref9;
  return column === true ? 'flex: 0 0 100%;' : null;
});

/**
 * Sub menu link item
 */
const SubNavLink = exports.SubNavLink = (0, _styledComponents.default)(NavLinkClass).withConfig({
  displayName: "Navstyle__SubNavLink",
  componentId: "sc-uzf5hs-4"
})(["padding:14px 21px;height:auto;position:relative;"]);

/**
 * Navigation Menu (first level)
 */
const NavMenu = exports.NavMenu = _styledComponents.default.ul.withConfig({
  displayName: "Navstyle__NavMenu",
  componentId: "sc-uzf5hs-5"
})(["background-color:inherit;list-style:none outside;padding:0;margin:0;@media ", "{display:flex;flex-wrap:wrap;justify-content:start;}"], _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.allBreakpoints('M');
});

/**
 * Menu item link
 */
const NavLink = exports.NavLink = (0, _styledComponents.default)(NavLinkClass).withConfig({
  displayName: "Navstyle__NavLink",
  componentId: "sc-uzf5hs-6"
})([""]);

/**
 * Menu list items
 */
const NavItem = exports.NavItem = _styledComponents.default.li.withConfig({
  displayName: "Navstyle__NavItem",
  componentId: "sc-uzf5hs-7"
})(["position:relative;font-weight:700;margin:0;margin-bottom:1rem;@media ", "{flex:0 0 30%;margin:0;}@media ", "{flex:0 0 calc(25% - 1rem);margin-right:1rem;margin-bottom:1rem;> span{padding:0;}}a{width:auto;padding:0;height:auto;position:relative;background-color:inherit;font-size:19px;line-height:40px;font-weight:800;@media ", "{font-size:20px;line-height:40px;}&:after{content:'\\2303';position:absolute;font-family:Arial;margin-left:4px;overflow:hidden;line-height:19px;font-size:23px;color:", ";font-weight:100;transition:transform 0.2s ease;transform:", ";top:", ";right:-25px;}@media ", "{cursor:default;display:inline;&:after{content:none;}}}"], _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.allBreakpoints('M');
}, _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.allBreakpoints('L');
}, _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.allBreakpoints('M');
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.color('white');
}, _ref15 => {
  let {
    isSubMenuOpen
  } = _ref15;
  return isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}, _ref16 => {
  let {
    isSubMenuOpen
  } = _ref16;
  return isSubMenuOpen ? '6px' : '0';
}, _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.allBreakpoints('M');
});