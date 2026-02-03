import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';

const Navigation = styled.nav`
  display: ${({ isExpandable }) => (isExpandable ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 75px;
  left: 0;
  ${zIndex('higher')};

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    ${zIndex('medium')};
    position: static;
    top: 0;
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }

  // Accessibility aid
  > h2 {
    ${hideVisually};
  }
`;

const PrimaryMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  overflow: hidden;
  position: static;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    box-shadow: none;
    border-radius: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }
`;

const PrimaryMenu = styled.ul`
  background-color: transparent;
  list-style: none outside;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative
  border: 1px solid green;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color('white')};
  }

`;

const DonateButtonMobileModalWrapper = styled.div`
  display: block;
  background-color: inherit;
  margin-top: 48px;
  width: 100%;

  // Donate button
  a {
    box-sizing: border-box;
    display: block;
    text-align: center;
    border-radius: 16px;
    width: 100%;
    margin: 0;
    font-family: Montserrat;
    height: auto;
    padding: 18px 0;

    &:hover,
    &:focus {
      width: 100%;
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
    }
  }

  // Hide the 'Nav'-embedded version of the button when the nav
  // goes FULL DESKTOP, leaving just the 'Header'-embedded example
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

const SearchWrapperMobile = styled.div`
  display: block;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

const SearchLinkMobile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 600;
  color: ${({ theme }) => theme.color('black')};
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color('red')};
    background-color: ${({ theme }) => theme.color('grey_extra_light')};
  }
`;

const SearchIconWrapperMobile = styled.div`
  overflow: visible;

  img {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
    transform-origin: center;
  }

  a {
    overflow: visible;
    display: block;
  }

  &:hover img,
  &:focus-within img {
    transform: scale(1.33);
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

export {
  Navigation,
  PrimaryMenuWrapper,
  PrimaryMenu,
  DonateButtonMobileModalWrapper,
  SearchWrapperMobile,
  SearchLinkMobile,
  SearchIconWrapperMobile
};
