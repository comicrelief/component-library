import styled from 'styled-components';

import hideVisually from '../../../../theme/shared/hideVisually';
import Link from '../../../Atoms/Link/Link';

/**
 * Burger hidden text
 */
const BurgerHiddenText = styled.div`
  span {
    visibility: ${hideVisually};
  }
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
  top: 0;
  position: relative;
  width: 45px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  height: 100%;
  text-indent: -9999px;
  border: none;
  background-color: transparent;
  padding: 2px 5px;
  ${BurgerBar} {
    :nth-of-type(1) {
      transform: ${({ isExpandable }) => isExpandable && 'rotate(45deg)'};
      top: 40%;
      top: ${({ isExpandable }) => isExpandable && '50%'};
      width: ${({ isExpandable }) => isExpandable && '0'};
      left: ${({ isExpandable }) => isExpandable && '600%'};
    }
    :nth-of-type(2),
    :nth-of-type(3) {
      top: 50%;
    }
    :nth-of-type(2) {
      transform: ${({ isExpandable }) => isExpandable && 'rotate(45deg)'};
    }
    :nth-of-type(3) {
      transform: ${({ isExpandable }) => isExpandable && 'rotate(-45deg)'};
    }
    :nth-of-type(4) {
      top: 60%;
      top: ${({ isExpandable }) => isExpandable && '40%'};
      width: ${({ isExpandable }) => isExpandable && '0'};
      left: ${({ isExpandable }) => isExpandable && '600%'};
    }
  }
`;

export { BurgerHiddenText, BurgerWrapper, BurgerBar };
