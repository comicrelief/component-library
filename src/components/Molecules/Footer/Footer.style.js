// import React, { useState } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer.attrs(() => ({
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
  display: block;
  width: 100%;
  height: 100%;
`;

const SocialLinks = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

const FooterBranding = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

const FooterCopyright = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

/* const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
  max-width: 1440px;
  /!* Add z-index to logo  *!/
  > span:nth-of-type(1) {
    ${zIndex('high')};
  }

  /!* Burger menu on small and medium device  *!/
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
`; */

export {
  FooterWrapper,
  InnerWrapper,
  SocialLinks,
  FooterCopyright,
  FooterBranding
};
