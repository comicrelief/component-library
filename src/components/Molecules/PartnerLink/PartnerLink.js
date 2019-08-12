import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../Atoms/Picture/Picture';
import { Wrapper, MoreInfo, Item } from './PartnerLink.style';

const PartnerLink = ({ link, title, slug, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Item href={slug} type="standard">
        <Picture image={link} alt={title} />
        <MoreInfo>Find out more</MoreInfo>
      </Item>
    </Wrapper>
  );
};

PartnerLink.propTypes = {
  /** Link for image  */
  link: PropTypes.string.isRequired,
  /** Partner's name    */
  title: PropTypes.string.isRequired,
  /** Path to more info  */
  slug: PropTypes.string.isRequired
};

export default PartnerLink;
