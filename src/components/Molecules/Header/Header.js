/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import {
  Brand,
  HeaderWrapper,
  InnerWrapper,
  NavLink,
  Nav,
  NavMenu,
  NavItem,
  SubNavMenu,
  SubNavItem,
  MetaIcons
} from './Header.style';

const Header = ({ navItems, metaIcons, ...rest }) => {
  const { menuGroup } = navItems;
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
        </Brand>
        <Nav>
          <NavMenu>
            {menuGroup.map(group => (
              <NavItem key={group.id}>
                <NavLink href={group.url} inline>
                  <Text>{group.title}</Text>
                </NavLink>
                <SubNavMenu>
                  <SubNavItem>
                    <NavLink href={group.url} inline>
                      <Text>{group.title}</Text>
                    </NavLink>
                  </SubNavItem>
                  {group.links.map(child => (
                    <SubNavItem key={child.url}>
                      <NavLink href={child.url} inline>
                        <Text>{child.title}</Text>
                      </NavLink>
                    </SubNavItem>
                  ))}
                </SubNavMenu>
              </NavItem>
            ))}
          </NavMenu>
        </Nav>
        <MetaIcons>
          {metaIcons.map((metaIcon, i) => (
            <Fragment key={i}>{metaIcon}</Fragment>
          ))}
        </MetaIcons>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired
};

Header.defaultProps = {
  navItems: {}
};

export default Header;
