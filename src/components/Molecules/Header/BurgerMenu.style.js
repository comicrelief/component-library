import styled from 'styled-components';

import hideVisually from '../../../theme/shared/hideVisually';
/**
 * Burger menu
 */
const BurgerMenu = styled.div`
  position: relative;
  a {
    width: 40px;
    display: block;
    position: absolute;
    height: 55px;
    margin: 2px 10px 0px -50px;
    padding: 0 20px;
    cursor: pointer;
    transition: background 0.2s;
    text-align: left;
    text-indent: -9999px;
    border: none;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    span {
      position: absolute;
      top: 0px;
      right: 15px;
      display: block;
      height: 3px;
      width: 25px;
      background-color: ${({ theme }) => theme.color('deep_violet')};
      transition: all cubic-bezier(0, 0, 0, 1.34) 0.32s;
      right: 5px;

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
`;

/**
 * Burger icon
 */
const BurgerIcon = styled.div`
  position: relative;
  top: 37px;
  height: 75px;
  span {
    visibility: ${hideVisually};
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 90px;
  }
`;

export { BurgerIcon, BurgerMenu };
