import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';
import Text from '../../Atoms/Text/Text';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: center;
  line-height: initial;
  background: #222;
  position: relative;
  padding: ${spacing('md')} 0;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${spacing('l')};
  }
`;

const Angle = styled.div`
  width: 100%;
  display: block;
  clip-path: polygon(0 100%,100% 0,100% 101%,0 101%);
  height: 50px;
  background: #222;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.allBreakpoints('L')} {
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
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: 0 ${spacing('md')} ${spacing('xl')};
  }
`;

const FooterLegalLine = styled(Text)`
  text-align: left;
  margin-top: 1rem;
  line-height: 1.5rem;
`;

const FooterBranding = styled.div`
  display: flex;
  margin: ${spacing('lg')} 0 5rem;
  justify-content: space-between;
  align-items: center;
`;

const FooterCopyright = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  text-align: left;
  margin-top: 0;

  p {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 5px;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;

const Brand = styled(Link)`
  color: transparent;
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
  FooterLegalLine,
  FooterCopyright,
  FooterBranding,
  SocialIconWrapper,
  Brand
};
