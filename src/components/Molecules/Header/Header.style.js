import styled from 'styled-components';

import Link from '../../Atoms/Link/Link';
import zIndex from '../../../theme/shared/zIndex';
import { container } from '../../../theme/shared/size';

const HeaderWrapper = styled.header.attrs(() => ({
  role: 'banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.breakpoint('nav')} {
    height: auto;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  max-width: ${container.large};

  @media ${({ theme }) => theme.breakpoint('nav')} {
    margin: 0 auto;
  }
`;

/**
 * Brand wrapper
 */
const Brand = styled(Link).attrs(() => ({
  title: 'Home'
}))`
  ${zIndex('high')};
  color: transparent;
  margin-right: auto;
  border: 0;
  :hover {
    border: 0;
  }
`;

/**
 * Meta icons
 */
const MetaIcons = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  > div {
    height: 35px;
    width: auto;
    display: inline-block;

    > a {
      height: inherit;
      width: inherit;
      margin-left: ${({ theme }) => theme.fontSize('xxs')};

      img {
        padding: 5px;
        height: inherit;
        width: inherit;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint('nav')} {
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color('white')};
    margin-right: 0px;
    right: 0px;
  }
`;

export { Brand, HeaderWrapper, InnerWrapper, MetaIcons };
