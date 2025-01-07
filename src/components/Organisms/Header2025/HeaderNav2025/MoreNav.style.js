import styled, { css } from 'styled-components';
import {
  NavItem, SubNavMenu, NavLink, SubNavItem, SubNavLink
} from './HeaderNav2025.style';

const MoreSubNavMenu = styled(SubNavMenu)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    // Just extending this here to make a clean separation,
    // despite the fact no additional styles are needed right now
  }
`;

const MoreNavLink = styled(NavLink)`


  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    font-size: 15px;
    padding: 10px 15px 10px 0;

    // &:before {
    //   content: 'LINE HERE';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    // }:
  
    :focus,
    :hover,
    :focus-within {
      + ${MoreSubNavMenu} {
        display: flex;
      }
    }
  }

  @media ${({ theme }) => theme.allBreakpoints('NavWide')} {
    font-size: 1rem;
  }
`;

// Use for the 'More' link only
const MoreNavItem = styled(NavItem)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    :hover,
    :focus-within,
    :focus {
      > ${MoreSubNavMenu} {
        visibility: visible;
        opacity: 1;
        display: flex;
      }
    }

    :hover,
    :focus,
    :focus-within {
      ${MoreSubNavMenu} {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

// Clone Of SubNavMenu, NESTED menu
const MoreNestedSubNavMenu = styled(SubNavMenu)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    top: 0;
    left: -1px;
    border-radius: 0;
    border-bottom: 0;
    position: relative;
    transition: max-height 0.5s cubic-bezier(0.5, 1.5, 0.5, 0.80);
    max-height: 0;
    border: 0;
    box-shadow: none;

    ${({ isSubMenuOpen }) => (isSubMenuOpen && css`
      // Calculating a realistic height ceiling (8 subnav items) 
      // to make animation as slick as possible
      max-height: calc(54px * 8);
  `)};
  }
`;

const MoreSubNavItem = styled(SubNavItem)`
  // Chevron icon
  > a > div {
    position: absolute;
    width: 15px;
    top: 13px;
    right: 25px;
    transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
  }

  :hover, 
  :focus,
  :focus-within {
    > a {
      color: ${({ theme }) => theme.color('red')};
    }
    > a > div {
      img {
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }
  }
`;

const MoreNavNestedLink = styled(NavLink)`
    // HERE
  padding: 20px 25px 22px 42px;

  > div {
    height: auto;
  }

  ${({ isSubMenuOpen }) => (isSubMenuOpen && css`
    > div {
      transform: rotate(-180deg);
    }
  `)};
`;

const MoreSubNavLink = styled(SubNavLink)`
  // Just extending this here to make a clean separation,
  // despite the fact no additional styles are needed right now
`;

export {
  MoreNavLink,
  MoreSubNavMenu,
  MoreNavItem,
  MoreNestedSubNavMenu,
  MoreSubNavItem,
  MoreNavNestedLink,
  MoreSubNavLink
};
