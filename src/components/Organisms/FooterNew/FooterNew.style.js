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
  padding-top: ${spacing('xl')};
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding-bottom: ${spacing('lg')};
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
  @media ${({ theme }) => theme.breakpoints2026('L')} {
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

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex-direction: row;
    justify-content: space-between;
    align-items: ${({ $hasEmailSignup }) => ($hasEmailSignup ? 'flex-start' : 'center')};
  }
`;

const TopSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing('md')};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex-direction: column;
    flex: 0 0 auto;
  }
`;

const NewsletterSignUpWrapper = styled.div`
  max-width: 100%;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    max-width: 100%;
  }
`;

const SocialIconWrapper = styled.div`
margin-bottom: ${spacing('md')};
box-sizing: content-box;
gap: ${spacing('md')};
  display: ${({ $desktopOnly }) => {
    if ($desktopOnly) return 'none';
    return 'block';
  }};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
  box-sizing: border-box;
    display: ${({ $mobileOnly, $inTopSection }) => {
    if ($mobileOnly) return 'none';
    if ($inTopSection) return 'flex';
    return 'block';
  }};
    margin-bottom: ${({ $inTopSection }) => ($inTopSection ? '0' : spacing('md'))};
    align-items: center;
  }
`;

const PrimaryNav = styled.nav`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: ${spacing('md')} 0;
  margin: 0 0 ${spacing('md')} 0;
  gap: ${spacing('l')};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${spacing('m')};
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
    text-decoration-color: ${({ theme }) => theme.color('white')};
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

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    display: inline;
  }

  &:not(:last-child)::after {
    content: '|';
    margin-left: ${spacing('sm')};
    color: ${({ theme }) => theme.color('grey')};
  }
`;

const SecondaryNavLink = styled(Link)`
  text-decoration: none;

  > span {
    color: ${({ theme }) => theme.color('grey')};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color('grey')};
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSize('xs')};
  }

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    > span {
      text-decoration: none;
    }
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color('grey')};
  }

`;

const SecondaryNavText = styled(Text)`
  color: ${({ theme }) => theme.color('white')};
  font-weight: normal;
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing('l')};
  justify-content: ${({ $mobileOnly }) => ($mobileOnly ? 'flex-start' : 'center')};
  margin-top: ${({ $mobileOnly }) => ($mobileOnly ? spacing('md') : '0')};
  margin-bottom: ${({ $mobileOnly }) => ($mobileOnly ? spacing('l') : '0')};

  /* Hide desktop containers on mobile */
  ${({ $desktopOnly }) => $desktopOnly && 'display: none;'}

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex: 0 0 auto;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: ${({ $desktopOnly }) => ($desktopOnly ? spacing('l') : '0')};

    display: ${({
    $desktopOnly, $mobileOnly, $showCRLogoOnly, $showPairedLogos, $showFundraiserAtBottom
  }) => {
    // Mobile containers
    if ($mobileOnly && $showFundraiserAtBottom) return 'flex';
    if ($mobileOnly) return 'none';

    // Desktop containers
    if ($desktopOnly && $showCRLogoOnly) return 'flex';
    if ($desktopOnly && $showPairedLogos) return 'none';
    if ($desktopOnly) return 'none';

    return 'flex';
  }};

    justify-content: ${({ $desktopOnly, $showCRLogoOnly, $showFundraiserAtBottom }) => {
    if ($showFundraiserAtBottom) return 'flex-start';
    if ($desktopOnly && $showCRLogoOnly) return 'flex-end';
    if ($desktopOnly) return 'flex-end';
    return 'center';
  }};
  }


  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: ${({
    $desktopOnly, $mobileOnly, $showCRLogoOnly, $showPairedLogos, $showFundraiserAtBottom
  }) => {
    // Hide fundraiser at bottom for L+ (it's in TopSection)
    if ($mobileOnly && $showFundraiserAtBottom) return 'none';
    if ($mobileOnly) return 'none';

    // Desktop containers
    if ($desktopOnly && $showCRLogoOnly) return 'none';
    if ($desktopOnly && $showPairedLogos) return 'flex';
    if ($desktopOnly) return 'none';

    return 'flex';
  }};
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
  TopSectionLeft,
  NewsletterSignUpWrapper,
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
