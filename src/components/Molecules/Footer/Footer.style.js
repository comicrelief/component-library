import styled from 'styled-components';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: center;
  line-height: initial;
  background: ${({ theme }) => theme.color('black')};
  padding: 65px 10px 40px;
  position: relative;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 79px 35px 60px;
  }
`;

const InnerWrapper = styled.div`
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

export { FooterWrapper, InnerWrapper, FooterCopyright, FooterBranding };
