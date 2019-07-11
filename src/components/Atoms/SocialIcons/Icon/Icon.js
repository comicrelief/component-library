import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledIcon from './Icon.style';

const Icon = ({ href, target, icon, ...restProps }) => (
  <StyledIcon href={href} target={target} {...restProps}>
    <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
  </StyledIcon>
);

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  colorOnHover: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  backgroundColor: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  backgroundColorOnHover: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired // not interested in knowing how a third party object is constructed
};

export default Icon;
