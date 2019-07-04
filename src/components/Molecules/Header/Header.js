import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import Link from '../../Atoms/Link/Link';

const HeaderWrapper = styled.header.attrs(() => ({
  role: 'Banner'
}))`
  position: relative;
  display: flex;
  align-items: center;
  height: 75px;
  padding: 0 15px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  z-index: 91;

  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 90px;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
  }
`;

const Brand = styled(Link).attrs(() => ({
  title: 'Home',
  rel: 'home'
}))`
  color: transparent;
  border: 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Brand href="/" inline>
        <Logo rotate />
      </Brand>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
