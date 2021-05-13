import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: center;
  line-height: initial;
  background: #000;
  position: relative;
  margin-top: -1rem;
`;

const Angle = styled.div`
  clip-path: polygon(0 0,100% 0,100% 30%,0 105%);
  border-radius: 0 0 0 4rem;
  background: white;
  height: 100px;
`;

const InnerWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${spacing('xl')} ${spacing('md')} ${spacing('l')};
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: ${spacing('xl')} ${spacing('l')} ${spacing('xl')};
  }
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

const SocialIconWrapper = styled.div``;

export {
  FooterWrapper,
  Angle,
  InnerWrapper,
  FooterCopyright,
  FooterBranding,
  SocialIconWrapper,
  Brand
};
