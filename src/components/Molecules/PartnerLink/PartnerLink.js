import React from 'react';
import styled from 'styled-components';

import Link from '../../Atoms/Link/Link';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import logo from '../../../styleguide/assets/picture-2.jpg';
import hideVisually from '../../../theme/shared/hideVisually';
// import PropTypes from 'prop-types'

const Wrapper = styled.li`
  list-style: none;
`;

const PartnerMoreInfo = styled(Text)`
  ${hideVisually}
`;

const LinkPartner = styled(Link)`
  border: none;
  :hover {
    border: none;
  }
`;

const PartnerLink = () => {
  return (
    <Wrapper>
      <LinkPartner href="#anchor" target="blank" type="standard">
        {' '}
        <Picture image={logo} alt="logo" />
        <PartnerMoreInfo>Find out more</PartnerMoreInfo>
      </LinkPartner>
    </Wrapper>
  );
};

// PartnerLink.propTypes = {};

export default PartnerLink;
