// import React, { useState } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: center;
  line-height: initial;
  background: #000;
  padding: 65px 10px 40px;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 79px 35px 60px;
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
  margin: 0 0 25px;
`;

const FooterCopyright = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  text-align: left;
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
