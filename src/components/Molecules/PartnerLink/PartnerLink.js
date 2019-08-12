import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../Atoms/Picture/Picture';
import { Wrapper, PartnerMoreInfo, LinkPartner } from './PartnerLink.style';

const PartnerLink = ({ src, partnerName, partnerPath, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <LinkPartner href={partnerPath} type="standard">
        <Picture image={src} alt={partnerName} />
        <PartnerMoreInfo>Find out more</PartnerMoreInfo>
      </LinkPartner>
    </Wrapper>
  );
};

PartnerLink.propTypes = {
  src: PropTypes.string.isRequired,
  partnerName: PropTypes.string.isRequired,
  partnerPath: PropTypes.string.isRequired
};

export default PartnerLink;
