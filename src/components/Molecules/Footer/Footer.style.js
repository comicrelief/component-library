import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: center;
  line-height: initial;
  background: #000;
  padding: ${spacing('xl')} ${spacing('md')} ${spacing('l')};
  position: relative;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: ${spacing('xl')} ${spacing('l')} ${spacing('xl')};
  }
`;

const InnerWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
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
  InnerWrapper,
  FooterCopyright,
  FooterBranding,
  SocialIconWrapper,
  Brand
};
