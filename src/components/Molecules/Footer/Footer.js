import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logo/Logo';
import FooterNav from './Nav/Nav';
import { FooterWrapper, InnerWrapper } from './Footer.style';
import Text from '../../Atoms/Text/Text';

const Footer = ({ navItems, footerCopy, ...rest }) => {
  return (
    <FooterWrapper navItems {...rest}>
      <InnerWrapper>
        <div className="social-links">
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </div>
        <FooterNav navItems={navItems} />
        <div className="footer__branding">
          <Logo />
        </div>
        <div className="footer__copyright">
          <Text tag="p">{footerCopy}</Text>
        </div>
      </InnerWrapper>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  footerCopy: PropTypes.string
};

Footer.defaultProps = {
  navItems: {},
  footerCopy: ''
};

export default Footer;
