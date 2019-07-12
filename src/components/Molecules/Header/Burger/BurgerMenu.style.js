import styled from 'styled-components';

import hideVisually from '../../../../theme/shared/hideVisually';

/**
 * Burger menu
 */
const BurgerMenu = styled.div`
  width: 25px;
  span {
    @media ${({ theme }) => theme.breakpoint('small')} {
      height: 90px;
    }
    a {
      position: relative;
      width: 100%;
      transition: all 0.2s;
      text-align: left;
      text-indent: -9999px;
      border: none;
      border-radius: 0;
      background-color: transparent;
      box-shadow: none;
      span {
        width: 100%;
        position: absolute;
        top: 0px;
        right: 15px;
        display: block;
        height: 3px;
        background-color: ${({ theme }) => theme.color('deep_violet')};
        transition: all cubic-bezier(0, 0, 0, 1.34) 0.32s;

        ::before,
        ::after {
          position: absolute;
          background-color: ${({ theme }) => theme.color('deep_violet')};
          display: block;
          width: 100%;
          height: 3px;
          content: '';
          transition-delay: 0.2s, 0s;
          transition-duration: 0.2s, 0.2s;
        }
        ::before {
          top: -8px;
          transition-property: top, transform;
        }
        ::after {
          bottom: -8px;
          transition-property: bottom, transform;
        }
      }
    }

    @media ${({ theme }) => theme.breakpoint('large')} {
      display: none;
    }
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
