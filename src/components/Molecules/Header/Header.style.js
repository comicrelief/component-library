// import React, { useState } from 'react';
import styled from 'styled-components';

import Link from '../../Atoms/Link/Link';
import zIndex from '../../../theme/shared/zIndex';

const HeaderWrapper = styled.header.attrs(() => ({
  role: 'banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    height: auto;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
  max-width: 1440px;
  /* Add z-index to logo  */
  > span:nth-of-type(1) {
    ${zIndex('high')};
  }

  /* Burger menu on small and medium device  */
  > span:nth-of-type(2) {
    left: 2px;
    position: relative;
    height: 100%;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    margin-left: auto;
    margin-right: auto;
  }
`;

/**
 * Brand wrapper
 */
const Brand = styled(Link).attrs(() => ({
  title: 'Home'
}))`
  color: transparent;
  border: 0;
  :hover {
    border: 0;
  }
`;

/**
 * Meta icons
 */
const MetaIcons = styled.div`
  position: absolute;
  right: 60px;
  a {
    margin-left: ${({ theme }) => theme.fontSize('xxs')};
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    position: relative;
    display: flex;
    background-color: ${({ theme }) => theme.color('white')};
    margin-right: 0px;
    right: 0px;
  }
`;

export { Brand, HeaderWrapper, InnerWrapper, MetaIcons };
