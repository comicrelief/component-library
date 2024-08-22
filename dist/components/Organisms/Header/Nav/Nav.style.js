"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNavMenu = exports.SubNavLinkUnderline = exports.SubNavLink = exports.SubNavItem = exports.NavMenu = exports.NavLink = exports.NavItem = exports.Nav = exports.ChevronWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Link = _interopRequireDefault(require("../../../Atoms/Link/Link"));
var _hideVisually = _interopRequireDefault(require("../../../../theme/shared/hideVisually"));
var _zIndex = _interopRequireDefault(require("../../../../theme/shared/zIndex"));
const NavLinkClass = (0, _styledComponents.default)(_Link.default).withConfig({
  displayName: "Navstyle__NavLinkClass",
  componentId: "sc-1ss3uk2-0"
})(["display:inline-block;border:0;padding:17px 20px;line-height:1.3rem;height:46px;font-weight:700;width:100%;color:", ";:hover{border:0;color:", ";font-weight:inherit;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.color('deep_violet_dark');
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.color('deep_violet_dark');
});

/**
 * Navigation menu
 */
const Nav = exports.Nav = _styledComponents.default.nav.withConfig({
  displayName: "Navstyle__Nav",
  componentId: "sc-1ss3uk2-1"
})(["display:", ";width:100%;position:absolute;top:75px;left:0;", ";@media ", "{width:50%;right:0;left:inherit;}@media ", "{", ";position:relative;top:0;display:block;margin:0 10px;width:auto;height:100%;}> h2{", ";}"], _ref3 => {
  let {
    isExpandable
  } = _ref3;
  return isExpandable ? 'block' : 'none';
}, (0, _zIndex.default)('higher'), _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.allBreakpoints('M');
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.allBreakpoints('Nav');
}, (0, _zIndex.default)('medium'), _hideVisually.default);

/**
 * Sub Navigation Menu (second level)
 */
const SubNavMenu = exports.SubNavMenu = _styledComponents.default.ul.withConfig({
  displayName: "Navstyle__SubNavMenu",
  componentId: "sc-1ss3uk2-2"
})(["display:", ";padding:0;position:relative;list-style:none outside;left:0;top:0;flex-direction:column;justify-content:center;align-items:center;background-color:", ";@media ", "{display:none;display:", ";top:90px;position:absolute;padding:0 0 20px;width:250px;height:auto;}"], _ref6 => {
  let {
    isSubMenuOpen
  } = _ref6;
  return isSubMenuOpen ? 'flex' : 'none';
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.color('deep_violet_dark');
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.allBreakpoints('Nav');
}, _ref9 => {
  let {
    isKeyPressed
  } = _ref9;
  return isKeyPressed ? 'flex' : 'none';
});

/**
 * Sub Menu list items
 */
const SubNavItem = exports.SubNavItem = _styledComponents.default.li.withConfig({
  displayName: "Navstyle__SubNavItem",
  componentId: "sc-1ss3uk2-3"
})(["padding:0;height:100%;width:100%;:hover{background-color:", ";span{border-bottom:0;padding-bottom:2px;color:", ";}}"], _ref10 => {
  let {
    theme
  } = _ref10;
  return theme.color('deep_violet_light');
}, _ref11 => {
  let {
    theme
  } = _ref11;
  return theme.color('white');
});

/**
 * Sub menu link item
 */
const SubNavLink = exports.SubNavLink = (0, _styledComponents.default)(NavLinkClass).withConfig({
  displayName: "Navstyle__SubNavLink",
  componentId: "sc-1ss3uk2-4"
})(["padding:14px 14px 7px 21px;color:", ";height:auto;position:relative;"], _ref12 => {
  let {
    theme
  } = _ref12;
  return theme.color('white');
});

/**
 * Sub menu link item underline
 */
const SubNavLinkUnderline = exports.SubNavLinkUnderline = (0, _styledComponents.default)(SubNavLink).withConfig({
  displayName: "Navstyle__SubNavLinkUnderline",
  componentId: "sc-1ss3uk2-5"
})(["padding:26px 21px;::after{content:'';position:absolute;width:14px;border-bottom:2px solid ", ";left:12px;top:auto;bottom:10px;margin:0 10px;}@media ", "{::before{display:block;position:absolute;content:'';left:34px;width:10px;height:10px;border:11px solid transparent;border-bottom-color:", ";top:-22px;}:hover::before{border-bottom-color:", ";}}"], _ref13 => {
  let {
    theme
  } = _ref13;
  return theme.color('white');
}, _ref14 => {
  let {
    theme
  } = _ref14;
  return theme.allBreakpoints('Nav');
}, _ref15 => {
  let {
    theme
  } = _ref15;
  return theme.color('deep_violet_dark');
}, _ref16 => {
  let {
    theme
  } = _ref16;
  return theme.color('deep_violet_light');
});

/**
 * Navigation Menu (first level)
 */
const NavMenu = exports.NavMenu = _styledComponents.default.ul.withConfig({
  displayName: "Navstyle__NavMenu",
  componentId: "sc-1ss3uk2-6"
})(["background-color:", ";list-style:none outside;padding:0;margin:0;@media ", "{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;background-color:", ";}"], _ref17 => {
  let {
    theme
  } = _ref17;
  return theme.color('grey_extra_light');
}, _ref18 => {
  let {
    theme
  } = _ref18;
  return theme.allBreakpoints('Nav');
}, _ref19 => {
  let {
    theme
  } = _ref19;
  return theme.color('white');
});

/**
 * Menu item link
 */
const NavLink = exports.NavLink = (0, _styledComponents.default)(NavLinkClass).withConfig({
  displayName: "Navstyle__NavLink",
  componentId: "sc-1ss3uk2-7"
})(["display:flex;gap:4px;font-family:", ";@media ", "{padding:10px 0;height:auto;:focus + ", "{display:flex;}}"], _ref20 => {
  let {
    theme
  } = _ref20;
  return theme.fontFamilies(theme.font.regular);
}, _ref21 => {
  let {
    theme
  } = _ref21;
  return theme.allBreakpoints('Nav');
}, SubNavMenu);

/**
 * Menu list items
 */
const NavItem = exports.NavItem = _styledComponents.default.li.withConfig({
  displayName: "Navstyle__NavItem",
  componentId: "sc-1ss3uk2-8"
})(["", ";position:relative;font-weight:700;:hover{li{span{border-bottom:none;padding-bottom:0;}}}li{span{border-bottom:none;padding-bottom:0;}:hover{span{border-bottom:none;padding-bottom:0;}}}:hover{background-color:", ";}@media ", "{margin:0 4px;padding:25px 5px;:hover > ", ",:focus-within > ", "{visibility:visible;opacity:1;display:flex;}:hover{background-color:transparent;", ";span{border-bottom:2px solid ", ";padding-bottom:2px;}", "{display:flex;flex-direction:column;}}}"], (0, _zIndex.default)('medium'), _ref22 => {
  let {
    theme
  } = _ref22;
  return theme.color('teal_light');
}, _ref23 => {
  let {
    theme
  } = _ref23;
  return theme.allBreakpoints('Nav');
}, SubNavMenu, SubNavMenu, (0, _zIndex.default)('high'), _ref24 => {
  let {
    theme
  } = _ref24;
  return theme.color('black');
}, SubNavMenu);
const ChevronWrapper = exports.ChevronWrapper = _styledComponents.default.div.withConfig({
  displayName: "Navstyle__ChevronWrapper",
  componentId: "sc-1ss3uk2-9"
})(["width:12px;padding-top:2px;"]);