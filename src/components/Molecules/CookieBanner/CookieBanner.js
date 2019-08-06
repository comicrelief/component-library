import React from 'react';
import PropTypes from 'prop-types';

import {
  CookieWrapper,
  CookieText,
  AcceptCookieBtn,
  LinkStyle
} from './CookieBanner.style';

const CookieBanner = ({ acceptCookie, denyCookie, cookiePolicyUrl }) => {
  return (
    <CookieWrapper>
      <CookieText tag="p" color="white">
        Hello! Comic Relief uses cookies to help make this website better and
        improve our services. You can learn more about our use of cookies
        <LinkStyle href={cookiePolicyUrl} type="standard_white">
          here
        </LinkStyle>
        . We also use optional cookies for marketing purposes:
      </CookieText>
      <CookieText tag="p" color="white">
        <AcceptCookieBtn
          href="/comic"
          type="button"
          color="white"
          onClick={acceptCookie}
        >
          Accept
        </AcceptCookieBtn>
        Or click
        <LinkStyle href="" type="standard_white" onClick={denyCookie}>
          here
        </LinkStyle>
        to deny these.
      </CookieText>
    </CookieWrapper>
  );
};

CookieBanner.propTypes = {
  acceptCookie: PropTypes.func.isRequired,
  denyCookie: PropTypes.func.isRequired,
  cookiePolicyUrl: PropTypes.string.isRequired
};

export default CookieBanner;
