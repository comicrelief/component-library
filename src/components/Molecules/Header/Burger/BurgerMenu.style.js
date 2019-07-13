import styled from 'styled-components';

import hideVisually from '../../../../theme/shared/hideVisually';
import Link from '../../../Atoms/Link/Link';

/**
 * Burger menu
 */
const BurgerMenu = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
  border: none;
  background-color: transparent;
  padding: 2px 5px;
  span:nth-child(2) {
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    display: block;
    height: 3px;
    background-color: ${({ theme }) => theme.color('deep_violet')};

    ::before,
    ::after {
      position: absolute;
      background-color: ${({ theme }) => theme.color('deep_violet')};
      display: block;
      width: 100%;
      height: 3px;
      content: '';
    }
    ::before {
      top: -8px;
    }
    ::after {
      bottom: -8px;
    }
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    display: none;
  }
`;

/**
 * Burger icon
 */
const BurgerIcon = styled.div`
  span {
    visibility: ${hideVisually};
  }
`;

export { BurgerIcon, BurgerMenu };
