import styled, { css } from 'styled-components';

import zIndex from '../../../theme/shared/zIndex';
import containers from '../../../theme/shared/containers';

const Header2026Wrapper = styled.header.attrs(() => ({
  role: 'banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid ${({ theme }) => theme.color('grey_light')};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    height: 86px;
  }

  ${({ showBoxShadow }) => showBoxShadow && css`
    box-shadow: 0px 13px 15px 0 rgba(0, 0, 0, 0.05);
  `};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 32px;
  cursor: pointer;
  max-width: ${containers.large};

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin: 0 auto;
  }

  border: 1px solid red;
  > * {
    border: 1px solid green;

  }
`;

const Brand = styled.div`
  ${zIndex('high')};
  margin-right: auto;
  display: flex;
  align-items: center;

  a {
    border: 0;
    color: transparent;
    margin-right: 12px;

    img {
      width: 100%;
      object-fit: contain;
    }

    :hover {
      border: 0;
    }
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin-right: 0
  }
`;

const DonateButtonWrapperTop = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;

  // Donate button
  a {
    padding: 8px 12px;
    border-radius: 8px;
    font-family: Montserrat;
    font-size: 0.875rem;
    width: 100%;
    height: inherit;
    transition: width 0.4s cubic-bezier(0.5, 1.5, 0.5, 0.80);
    &:hover,
    &:focus {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px 0;
    }
  }
`;

const Header2026MetaIcons = styled.div`
  // Hide these when using the mobile navigation,
  // now only rendered in the Header2026Nav
  display: none;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: auto;
    align-items: center;

    // Icons
    > div {
      height: 35px;
      width: auto;
      display: inline-block;

      > a {
        height: inherit;
        width: inherit;
        margin-right: 6px;

        img {
          padding: 5px 7px;
          height: inherit;
          width: inherit;
        }
      }
    }

    position: relative;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color('white')};
    margin-right: 0px;
    right: 0px;
  }

  @media ${({ theme }) => theme.allBreakpoints('NavWide')} {
    // Icons
    > div > a {
      margin-right: 20px;
    }
  }
`;

const ButtonsAndIcons = styled.div`
  margin-left: auto;
  display: flex;
`;

export {
  Brand, Header2026Wrapper, InnerWrapper, DonateButtonWrapperTop,
  Header2026MetaIcons, ButtonsAndIcons
};
