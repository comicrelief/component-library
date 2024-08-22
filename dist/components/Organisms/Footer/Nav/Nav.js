"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Text = _interopRequireDefault(require("../../../Atoms/Text/Text"));
var _allBreakpoints = require("../../../../theme/shared/allBreakpoints");
var _navHelper = _interopRequireDefault(require("../../../../utils/navHelper"));
var _internalLinkHelper = require("../../../../utils/internalLinkHelper");
var _Nav = require("./Nav.style");
const FooterNav = _ref => {
  let {
    navItems = {},
    ...rest
  } = _ref;
  const {
    menuGroups
  } = navItems;
  const [isExpandable] = (0, _react.useState)(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = (0, _react.useState)({});
  const [isSmallBreakpoint, setIsSmallBreakpoint] = (0, _react.useState)(false);

  // Detect window screen size when screen is resized
  const resize = () => {
    const screenSize = typeof window !== 'undefined' ? window.innerWidth : null;
    if (screenSize !== null) {
      setIsSmallBreakpoint(screenSize < parseFloat(_allBreakpoints.breakpointValues.M));
    }
  };
  if (typeof window !== 'undefined') {
    window.onresize = resize;
  }
  /**
   * Always stop the main 'parent' link from actually firing, but do the
   * collapsing for SM-MD breakpoints
   */
  const toggleSubMenu = item => event => {
    event.preventDefault();
    // Only run on SM, as we're only using the hide-show logic on SM
    if (isSmallBreakpoint) {
      setIsSubMenuOpen({
        [item]: !isSubMenuOpen[item]
      });
    }
  };
  (0, _react.useEffect)(() => {
    // Detect window screen size when page load
    const width = typeof window !== 'undefined' ? window.innerWidth : null;
    setIsSmallBreakpoint(width < parseFloat(_allBreakpoints.breakpointValues.M));
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Nav.Nav, {
    "aria-label": "main-menu",
    isExpandable: isExpandable,
    role: "navigation"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    id: "footer-menu",
    tag: "h2"
  }, "Footer navigation"), /*#__PURE__*/_react.default.createElement(_Nav.NavMenu, {
    role: "menubar"
  }, menuGroups.map((group, index) => /*#__PURE__*/_react.default.createElement(_Nav.NavItem, {
    role: "none",
    key: group.id,
    index: index,
    isSubMenuOpen: !!isSubMenuOpen[group.id]
  }, !isSmallBreakpoint ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "white",
    weight: "bold"
  }, group.title) : /*#__PURE__*/_react.default.createElement(_Nav.NavLink, Object.assign({
    href: "#",
    inline: true,
    "aria-expanded": !!isSubMenuOpen[group.id],
    "aria-haspopup": "true",
    role: "button",
    onClick: toggleSubMenu(group.id)
  }, rest), /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "white"
  }, group.title)), group.links && group.links.length > 0 && /*#__PURE__*/_react.default.createElement(_Nav.SubNavMenu, {
    role: "list",
    "aria-label": group.title,
    isSubMenuOpen: !!isSubMenuOpen[group.id],
    column: group.links.length % 2 === 0 && group.links.length > 2
  }, group.links.map(child => {
    /* Determine which field represents our url path */
    let thisUrl = (0, _navHelper.default)(child);
    thisUrl = (0, _internalLinkHelper.InternalLinkHelper)(thisUrl);
    return /*#__PURE__*/_react.default.createElement(_Nav.SubNavItem, {
      key: thisUrl,
      column: group.links.length % 2 === 0 && group.links.length > 2
    }, /*#__PURE__*/_react.default.createElement(_Nav.SubNavLink, Object.assign({
      href: thisUrl,
      inline: true,
      role: "menuitem"
    }, rest), /*#__PURE__*/_react.default.createElement(_Text.default, {
      color: "white"
    }, child.title)));
  }))))));
};
var _default = exports.default = FooterNav;