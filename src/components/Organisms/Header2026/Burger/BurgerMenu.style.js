import styled from 'styled-components';
import hideVisually from '../../../../theme/shared/hideVisually';
import Link from '../../../Atoms/Link/Link';
import Text from '../../../Atoms/Text/Text';
import zIndex from '../../../../theme/shared/zIndex';

const BurgerHiddenText = styled(Text)`
  ${hideVisually};
`;

const BurgerBar = styled.span`
  background-color: ${({ theme }) => theme.color('black')};
  margin: 0 auto;
`;

const BurgerWrapper = styled(Link)`
  background-color: ${({ theme }) => theme.color('grey_light')};
  ${zIndex('medium')};
  border-radius: 8px;
  order: 50;
  display: flex;
  align-items: center;
  position: relative;
  text-indent: -9999px;
  height: 36px;
  width: 36px;
  left: 10px;

  @media ${({ theme }) => theme.breakpoints2026('S')} {
    left: 12px;
  }

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    left: 16px;
  }

  cursor: pointer;
  transition: all 0.2s;

  :hover {
    border: none;
    font-weight: inherit;
  }

  ${BurgerBar} {
    position: relative;

    &,
    ::before,
    ::after {
      width: 19px;
      height: 3px;
      border-radius: 2px;
      display: inline-block;
    }

    // Middle bar fades out
    background-color: currentColor;
    opacity: ${({ isExpandable }) => (isExpandable ? '0' : '1')};
    transition: opacity 0.3s ease-in-out;

    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: currentColor;
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }

    // Top bar - hamburger state
    ::before {
      top: -0.5rem;
    }

    // Bottom bar - hamburger state
    ::after {
      top: 0.5rem;
    }
  }

  // Cross bars (only visible when expanded)
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.color('black')};
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -1.5px;
    opacity: ${({ isExpandable }) => (isExpandable ? '1' : '0')};
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

export { BurgerHiddenText, BurgerWrapper, BurgerBar };
