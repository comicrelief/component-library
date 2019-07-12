// import React, { useState } from 'react';
import styled from 'styled-components';

import Link from '../../Atoms/Link/Link';

const HeaderWrapper = styled.header.attrs(() => ({
  role: 'Banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 90px;
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
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoint('large')} {
    justify-content: space-around;
  }
`;

/**
 * Brand wrapper
 */
const Brand = styled(Link).attrs(() => ({
  title: 'Home',
  rel: 'home'
}))`
  color: transparent;
  border: 0;
`;

/**
 * Meta icons
 */
const MetaIcons = styled.div`
  position: absolute;
  right: 65px;
  a {
    margin-left: ${({ theme }) => theme.fontSize('xxs')};
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    position: relative;
    display: flex;
    background-color: ${({ theme }) => theme.color('white')};
    margin-right: 0px;
  }
`;

export { Brand, HeaderWrapper, InnerWrapper, MetaIcons };
