import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = ({
  className,
  href,
  target,
  icon,
  color,
  colorOnHover,
  backgroundColor,
  backgroundColorOnHover,
  ...restProps
}) => (
  <a className={`icon ${className}`} href={href} target={target} {...restProps}>
    <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
  </a>
);

SocialIcons.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  colorOnHover: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  backgroundColor: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  backgroundColorOnHover: PropTypes.string.isRequired, // used for styling in `StyledSocialIcon`
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired // not interested in knowing how a third party object is constructed
};

export default SocialIcons;
