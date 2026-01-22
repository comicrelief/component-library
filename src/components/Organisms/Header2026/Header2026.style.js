import styled, { css } from 'styled-components';

import zIndex from '../../../theme/shared/zIndex';
import containers from '../../../theme/shared/containers';
import { pulseInAnimation, pulseOutAnimation } from '../../../theme/shared/animations';

const Header2026Wrapper = styled.header.attrs(() => ({
  role: 'banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid ${({ theme }) => theme.color('grey_light')};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
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
  cursor: pointer;
  max-width: ${containers.large};

  padding: 10px;
  @media ${({ theme }) => theme.breakpoints2026('S')} {
    padding: 10px 16px 10px 14px;
  }
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding: 10px 16px;
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    margin: 0 auto;
    gap: 24px;
  }
`;

// size of "Comic Relief" logo is set with props on LogoLinked2026
const Brand = styled.div`
  ${zIndex('high')};
  margin-right: auto;
  display: flex;
  align-items: center;

  a {
    border: 0;
    color: transparent;
    :hover {
      border: 0;
    }
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    margin-right: 0
  }
`;

const ButtonsAndIcons = styled.div`
  margin-left: auto;
  display: flex;
`;

const DonateButtonTopBarWrapper = styled.div`
  display: flex;
  justify-content: center;

  // Donate button
  a {
    ${pulseOutAnimation};
    padding: 8px;
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
      ${pulseInAnimation};
    }
    @media ${({ theme }) => theme.breakpoints2026('S')} {
      padding: 8px 12px;
    }
    @media ${({ theme }) => theme.breakpoints2026('L')} {
      font-size: 1rem;
      padding: 10px 16px;
    }
  }
`;

const SearchIconWrapperDesktop = styled.div`
  // Hide search when using the mobile navigation,
  display: none;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: relative;
    display: flex;
    align-items: center;
    width: auto;
    margin-right: 0px;
    right: 0px;
    background-color: ${({ theme }) => theme.color('white')};

    img {
      margin-right: 15px;
      height: inherit;
      width: inherit;
    }
  }
`;

const MobileBackHeader = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.color('black')};

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

const BackChevron = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  transform: rotate(180deg);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export {
  Brand,
  Header2026Wrapper,
  InnerWrapper,
  DonateButtonTopBarWrapper,
  SearchIconWrapperDesktop,
  ButtonsAndIcons,
  MobileBackHeader,
  BackChevron
};
