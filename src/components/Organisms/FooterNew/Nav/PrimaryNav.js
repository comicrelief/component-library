import React from 'react';
import PropTypes from 'prop-types';
import { NavHelper } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import {
  PrimaryNav as StyledPrimaryNav,
  PrimaryNavItem,
  PrimaryNavLink,
  PrimaryNavText
} from '../FooterNew.style';

const PrimaryNav = ({ navItems = [], ...rest }) => {
  if (!navItems || navItems.length === 0) {
    return null;
  }

  return (
    <StyledPrimaryNav aria-label="Primary footer navigation" role="navigation">
      {navItems.map(item => {
        const thisUrl = InternalLinkHelper(NavHelper(item));

        return (
          <PrimaryNavItem key={`primary-${thisUrl}-${item.title}`}>
            <PrimaryNavLink
              href={thisUrl}
              {...rest}
            >
              <PrimaryNavText>
                {item.title}
              </PrimaryNavText>
            </PrimaryNavLink>
          </PrimaryNavItem>
        );
      })}
    </StyledPrimaryNav>
  );
};

PrimaryNav.propTypes = {
  /** Array of primary navigation link objects */
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

export default PrimaryNav;
