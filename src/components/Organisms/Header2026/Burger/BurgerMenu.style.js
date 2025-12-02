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

  // Top and Bottom Bars
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

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

export { BurgerHiddenText, BurgerWrapper, BurgerBar };
