import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

const CookieWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  background: ${({ theme }) => theme.color('black')};
  flex-direction: column;
`;

const CookieLink = styled(Link)`
  text-decoration: underline;
  color: white;
  padding: 8px 20px;
`;

const CookieBanner = () => {
  return (
    <CookieWrapper>
      <Text tag="p" color="white">
        Hello! Comic Relief uses cookies to help make this website better and
        improve our services. You can learn more about our use of cookies
        <CookieLink target="_blank" href="/cookies-policy" inline>
          here
        </CookieLink>
        . We also use optional cookies for marketing purposes:
      </Text>
      <Text tag="p" color="white">
        <Link href="/comic" color="white">
          Accept
        </Link>
        Or click
        <CookieLink href="" inline>
          here
        </CookieLink>
        to deny these.
      </Text>
    </CookieWrapper>
  );
};

CookieBanner.propTypes = {};

export default CookieBanner;
