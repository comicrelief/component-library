import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: center;
  line-height: initial;
  background: #222;
  position: relative;
  margin-top: -1rem;
  padding: 2rem;
`;

const Angle = styled.div`
  width: 100%;
  display: block;
  clip-path: polygon(0 100%,100% 0,100% 101%,0 101%);
  height: 50px;
  background: #222;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    clip-path: polygon(0 100%,100% 0,100% 101%,0 101%);
    height: 95px;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing('md')} ${spacing('l')};
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 0 ${spacing('md')} ${spacing('xl')};
  }
`;

const FooterBranding = styled.div`
  position: absolute;
  right: 0;
  top: -2rem;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    top: -5rem;
  }
`;

const FooterCopyright = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  text-align: left;

  p {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 5px;

    @media ${({ theme }) => theme.breakpoint('medium')} {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;

const Brand = styled(Link)`
  color: transparent;
  margin-right: auto;
  border: 0;
  :hover {
    border: 0;
  }
`;

const SocialIconWrapper = styled.div`
  margin-top: 4rem;
`;

export {
  FooterWrapper,
  Angle,
  InnerWrapper,
  FooterCopyright,
  FooterBranding,
  SocialIconWrapper,
  Brand
};
