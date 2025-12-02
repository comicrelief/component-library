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
  background-color: ${({ theme }) => theme.color('black')};
  margin: 0 auto;
`;

/**
 * Burger wrapper
 */
const BurgerWrapper = styled(Link)`
  background-color: ${({ theme }) => theme.color('grey_light')};
  border-radius: 8px;
  ${zIndex('medium')};
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
      width: 25px;
      height: 3px;
      border-radius: 3px;
      display: inline-block;
    }

    ${({ isExpandable }) => isExpandable && ' background-color: transparent'};

    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: currentColor;
      transition: all 0.2s;
    }

    ::before {
      top: -0.5rem;
      ${({ isExpandable }) => isExpandable && ' transform:rotate(135deg); top: 0;'};
    }

    ::after {
      top: 0.5rem;
      ${({ isExpandable }) => isExpandable && ' transform:rotate(-135deg); top: 0;'};
    }
  }

  :hover ${BurgerBar} {
    &,
    ::before,
    ::after {
      background-color: ${({ theme, isExpandable }) => !isExpandable && theme.color('grey')};
    }
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    display: none;
  }
`;

export { BurgerHiddenText, BurgerWrapper, BurgerBar };
