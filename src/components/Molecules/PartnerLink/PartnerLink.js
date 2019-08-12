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
  /** Partner's image logo   */
  src: PropTypes.string.isRequired,
  /** Partner's name    */
  partnerName: PropTypes.string.isRequired,
  /** Path URL  */
  partnerPath: PropTypes.string.isRequired
};

export default PartnerLink;
