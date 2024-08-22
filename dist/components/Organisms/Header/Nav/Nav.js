"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Text = _interopRequireDefault(require("../../../Atoms/Text/Text"));
var _BurgerMenu = _interopRequireDefault(require("../Burger/BurgerMenu"));
var _allBreakpoints = require("../../../../theme/shared/allBreakpoints");
var _navHelper = _interopRequireDefault(require("../../../../utils/navHelper"));
var _internalLinkHelper = require("../../../../utils/internalLinkHelper");
var _allowListed = _interopRequireDefault(require("../../../../utils/allowListed"));
var _chevronDown = _interopRequireDefault(require("./chevron-down.svg"));
var _Nav = require("./Nav.style");
const MainNav = _ref => {
  let {
    navItems = {}
  } = _ref;
  const {
    menuGroups
  } = navItems;
  const [isExpandable, setIsExpandable] = (0, _react.useState)(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = (0, _react.useState)({});
  const [isKeyPressed, setIsKeyPressed] = (0, _react.useState)({});
  const [isMobile, setIsMobile] = (0, _react.useState)(false);
  const toggleBurgerMenu = event => {
    event.preventDefault();
    setIsExpandable(!isExpandable);
  };
  const toggleSubMenu = (e, item) => {
    e.preventDefault();
    setIsSubMenuOpen({
      [item]: !isSubMenuOpen[item]
    });
  };

  // Handle tab key on menu nav
  const keyPressed = item => () => {
    window.onkeyup = e => {
      if (e.target.querySelector('span') && e.target.querySelector('span').innerText === item) {
        setIsKeyPressed({
          [item]: !isKeyPressed[item]
        });
      } else if (!e.target.querySelector('span')) {
        setIsKeyPressed({});
      }
    };
  };
  (0, _react.useEffect)(() => {
    const width = window.innerWidth;
    setIsMobile(width < _allBreakpoints.breakpointValues.Nav);
    window.addEventListener('onkeyup', setIsKeyPressed);
    return () => {
      window.removeEventListener('onkeyup', setIsKeyPressed);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Nav.Nav, {
    "aria-label": "main-menu",
    isExpandable: isExpandable,
    role: "navigation"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    id: "main-menu",
    tag: "h2"
  }, "Main navigation"), /*#__PURE__*/_react.default.createElement(_Nav.NavMenu, {
    role: "menubar"
  }, menuGroups.map((group, index) => {
    /* Grab the first links properties to use for our parent/button */
    const thisFirstChild = group.links[0];

    /* Determine which field represents our url path */
    let thisUrl = (0, _navHelper.default)(thisFirstChild);
    const relNoopener = !(0, _allowListed.default)(thisUrl) && 'noopener';
    const hasSubMenu = group.links && group.links.length > 1;
    const hasPopUp = hasSubMenu ? 'true' : null;
    thisUrl = (0, _internalLinkHelper.InternalLinkHelper)(thisUrl);
    return /*#__PURE__*/_react.default.createElement(_Nav.NavItem, {
      role: "none",
      key: group.id,
      index: index,
      isSubMenuOpen: !!isSubMenuOpen[group.id]
    }, isMobile ? /*#__PURE__*/_react.default.createElement(_Nav.NavLink, {
      href: hasPopUp ? '#' : thisUrl,
      inline: true,
      rel: relNoopener,
      "aria-expanded": !!isSubMenuOpen[group.id],
      "aria-haspopup": hasPopUp,
      onClick: hasPopUp ? e => toggleSubMenu(e, group.id) : null,
      onKeyUp: keyPressed(group.title),
      role: "button"
    }, thisFirstChild.title, hasSubMenu && /*#__PURE__*/_react.default.createElement(_Nav.ChevronWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: _chevronDown.default,
      alt: "chevron down icon"
    }))) : /*#__PURE__*/_react.default.createElement(_Text.default, null, /*#__PURE__*/_react.default.createElement(_Nav.NavLink, {
      href: thisUrl,
      inline: true,
      rel: relNoopener,
      "aria-haspopup": hasPopUp,
      onKeyUp: keyPressed(group.title)
    }, thisFirstChild.title, hasSubMenu && /*#__PURE__*/_react.default.createElement(_Nav.ChevronWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: _chevronDown.default,
      alt: "chevron down icon"
    })))), hasSubMenu && /*#__PURE__*/_react.default.createElement(_Nav.SubNavMenu, {
      role: "list",
      isKeyPressed: !!isKeyPressed[group.title],
      isSubMenuOpen: !!isSubMenuOpen[group.id]
    }, group.links.map((child, childIndex) => {
      let thisSubUrl = (0, _navHelper.default)(child);
      thisSubUrl = (0, _internalLinkHelper.InternalLinkHelper)(thisSubUrl);

      /* Wrap our first child item with special tags */
      if (childIndex === 0) {
        return /*#__PURE__*/_react.default.createElement(_Nav.SubNavItem, {
          role: "none",
          key: thisSubUrl
        }, /*#__PURE__*/_react.default.createElement(_Nav.SubNavLinkUnderline, {
          href: thisSubUrl,
          inline: true,
          role: "menuitem"
        }, /*#__PURE__*/_react.default.createElement(_Text.default, null, child.title)));
      }
      return /*#__PURE__*/_react.default.createElement(_Nav.SubNavItem, {
        key: thisSubUrl
      }, /*#__PURE__*/_react.default.createElement(_Nav.SubNavLink, {
        href: thisSubUrl,
        inline: true,
        role: "menuitem"
      }, /*#__PURE__*/_react.default.createElement(_Text.default, null, child.title)));
    })));
  }))), /*#__PURE__*/_react.default.createElement(_BurgerMenu.default, {
    toggle: toggleBurgerMenu,
    isExpandable: isExpandable
  }, "Open"));
};
var _default = exports.default = MainNav;