import React from 'react';
import PropTypes from 'prop-types';
import { NavHelper } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import {
  SecondaryNav as StyledSecondaryNav,
  SecondaryNavItem,
  SecondaryNavLink,
  SecondaryNavText
} from '../Footer2026.style';

const SecondaryNav = ({ navItems = [], ...rest }) => {
  if (!navItems || navItems.length === 0) {
    return null;
  }

  return (
    <StyledSecondaryNav aria-label="Secondary footer navigation" role="navigation">
      {navItems.map(item => {
        const thisUrl = InternalLinkHelper(NavHelper(item));

        return (
          <SecondaryNavItem key={`secondary-${thisUrl}-${item.title}`}>
            <SecondaryNavLink
              href={thisUrl}
              {...rest}
            >
              <SecondaryNavText>
                {item.title}
              </SecondaryNavText>
            </SecondaryNavLink>
          </SecondaryNavItem>
        );
      })}
    </StyledSecondaryNav>
  );
};

SecondaryNav.propTypes = {
  /** Array of secondary navigation link objects */
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    url: PropTypes.string,
    reference: PropTypes.shape({
      path: PropTypes.string
    }),
    internal: PropTypes.shape({
      type: PropTypes.string
    })
  }))
};

export default SecondaryNav;
