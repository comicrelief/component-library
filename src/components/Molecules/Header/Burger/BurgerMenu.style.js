import styled from 'styled-components';

import hideVisually from '../../../../theme/shared/hideVisually';
import Link from '../../../Atoms/Link/Link';
import Text from '../../../Atoms/Text/Text';
import zIndex from '../../../../theme/shared/zIndex';

/**
 * Burger hidden text
 */
const BurgerHiddenText = styled(Text)`
  ${hideVisually};
`;

/**
 * Burger menu bar
 */

const BurgerBar = styled.span`
  background-color: ${({ theme }) => theme.color('deep_violet')};
  width: 25px;
  margin: 0 auto;
  position: absolute;
  display: block;
  height: 3px;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

/**
 * Burger wrapper
 */
const BurgerWrapper = styled(Link)`
  ${zIndex('medium')};
  display: flex;
  align-items: center;
  position: relative;
  text-indent: -9999px;
  background-color: transparent;

  :hover {
    border: none;
    font-weight: inherit;
  }
  ${BurgerBar} {
    position: relative;

    &,
    ::before,
    ::after {
      width: 2rem;
      height: 2px;
      background-color: red;
    }

    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
    }

    ::before {top: -1rem;}
    ::after {top: 1rem;}


    /* :nth-of-type(2) {
      transform: ${({ isExpandable }) => isExpandable && 'rotate(45deg)'};
      top: 40%;
      top: ${({ isExpandable }) => isExpandable && '50%'};
      width: ${({ isExpandable }) => isExpandable && '0'};
      left: ${({ isExpandable }) => isExpandable && '600%'};
    }
    :nth-of-type(3),
    :nth-of-type(4) {
      top: 50%;
    }
    :nth-of-type(3) {
      transform: ${({ isExpandable }) => isExpandable && 'rotate(45deg)'};
    }
    :nth-of-type(4) {
      transform: ${({ isExpandable }) => isExpandable && 'rotate(-45deg)'};
    }
    :nth-of-type(5) {
      top: 61%;
      top: ${({ isExpandable }) => isExpandable && '40%'};
      width: ${({ isExpandable }) => isExpandable && '0'};
      left: ${({ isExpandable }) => isExpandable && '600%'};
    } */
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    display: none;
  }
`;

export { BurgerHiddenText, BurgerWrapper, BurgerBar };
