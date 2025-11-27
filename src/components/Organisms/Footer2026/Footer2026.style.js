import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';
import Text from '../../Atoms/Text/Text';
import { logoRotateAnimation } from '../../../theme/shared/animations';

const FooterWrapper = styled.footer.attrs(() => ({
  role: 'banner'
}))`
  text-align: left;
  background: ${({ theme }) => theme.color('grey_5')};
  padding: ${spacing('l')} 0;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${spacing('lg')} 0;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing('md')};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: 0 ${spacing('md')}};
  }
`;

const FooterLegalLine = styled(Text).attrs({
  tag: 'p'
})`
  text-align: left;
  margin-top: 1rem;
  margin-bottom: ${spacing('md')};
  line-height: 1.5rem;
  color: ${({ theme }) => theme.color('grey')};
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing('md')};
  gap: ${spacing('md')};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const EmailSignUpWrapper = styled.div`
  max-width: 100%;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    max-width: 45%;
    flex: 0 0 45%;
  }
`;

const SocialIconWrapper = styled.div`
  margin-bottom: ${spacing('md')};
`;

const PrimaryNav = styled.nav`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: ${spacing('md')} 0;
  margin: 0 0 ${spacing('md')} 0;
  gap: ${spacing('sm')};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${spacing('md')};
  }
`;

const PrimaryNavItem = styled.li`
  margin: 0;
`;

const PrimaryNavLink = styled(Link)`
  color: ${({ theme }) => theme.color('white')};
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const PrimaryNavText = styled(Text)`
  color: ${({ theme }) => theme.color('white')};
  font-weight: bold;
`;

const SecondaryNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 ${spacing('md')} 0;
  gap: ${spacing('sm')};
  align-items: center;
`;

const SecondaryNavItem = styled.li`
  margin: 0;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    display: inline;
  }

  &:not(:last-child)::after {
    content: '|';
    margin-left: ${spacing('sm')};
    color: ${({ theme }) => theme.color('grey')};
  }
`;

const SecondaryNavLink = styled(Link)`
  > span {
  color: ${({ theme }) => theme.color('grey')};
  text-decoration: underline;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize('xs')};
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }

`;

const SecondaryNavText = styled(Text)`
  color: ${({ theme }) => theme.color('white')};
  font-weight: normal;
`;

const LogosContainer = styled.div`
  display: ${({ $desktopOnly, $mobileOnly }) => {
    if ($desktopOnly) return 'none';
    if ($mobileOnly) return 'flex';
    return 'flex';
  }};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${spacing('l')};
  margin-top: ${({ $mobileOnly }) => ($mobileOnly ? spacing('md') : '0')};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    display: ${({ $desktopOnly, $mobileOnly }) => {
      if ($desktopOnly) return 'flex';
      if ($mobileOnly) return 'none';
      return 'flex';
    }};
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    margin-top: 0;
  }
`;

const Brand = styled(Link)`
  color: transparent;
  border: 0;
  :hover {
    border: 0;
  }

  ${({ animateRotate }) => logoRotateAnimation(animateRotate)}
`;

const FooterCopyright = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  text-align: left;
`;

const FooterCopyrightText = styled(Text).attrs({
  tag: 'p'
})`
  color: ${({ theme }) => theme.color('grey')};
  font-size: ${({ theme }) => theme.fontSize('xs')};
  margin-bottom: ${spacing('sm')};
`;

export {
  FooterWrapper,
  InnerWrapper,
  FooterLegalLine,
  TopSection,
  EmailSignUpWrapper,
  SocialIconWrapper,
  PrimaryNav,
  PrimaryNavItem,
  PrimaryNavLink,
  PrimaryNavText,
  SecondaryNav,
  SecondaryNavItem,
  SecondaryNavLink,
  SecondaryNavText,
  LogosContainer,
  FooterCopyright,
  FooterCopyrightText,
  Brand
};
