import styled from 'styled-components';

import zIndex from '../../../theme/shared/zIndex';
import containers from '../../../theme/shared/containers';
import spacing from '../../../theme/shared/spacing';

import './annoying.css';

const Header2025Wrapper = styled.header.attrs(() => ({
  role: 'banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    height: auto;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  max-width: ${containers.large};

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin: 0 auto;
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
    margin-right: ${spacing('md')};
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
  width: 120px;
  display: flex;
  justify-content: center;

  // Donate button
  a {
    width: 90%;
    transition: width 0.4s cubic-bezier(0.5, 1.5, 0.5, 0.80);
  
    &:hover,
    &:focus {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px 0;
    }
  }
`;

const Header2025MetaIcons = styled.div`
  // Hide these when using the mobile navigation, 
  // now only rendered in the Header2025Nav
  display: none;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: auto;
    align-items: center;

    > div {
      height: 35px;
      width: auto;
      display: inline-block;
  
      > a {
        height: inherit;
        width: inherit;
        margin-right: 20px;
  
        img {
          padding: 5px;
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
`;

const ButtonsAndIcons = styled.div`
  margin-left: auto;
  display: flex;
  //
`;

export {
  Brand, Header2025Wrapper, InnerWrapper, DonateButtonWrapperTop,
  Header2025MetaIcons, ButtonsAndIcons
};
