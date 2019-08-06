import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './Link.style';

const Link = ({ children, color, href, target, linktype, home, ...rest }) => {
  const window = target === 'blank' ? '_blank' : '_self';
  const relationship = target === 'blank' ? 'noopener noreferrer' : false;

  return (
    <StyledLink
      {...rest}
      color={color}
      href={href}
      target={window}
      rel={home ? 'home' : relationship}
      linktype={linktype}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  /** Link style: standard, bold, inline or button */
  linktype: PropTypes.string,
  /** Link color style */
  color: PropTypes.string,
  /** link target */
  target: PropTypes.string,
  /** link rel attribute should be home */
  home: PropTypes.bool,
  /** link url */
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Link.defaultProps = {
  linktype: 'standard',
  color: 'red',
  target: 'self',
  home: false
};

export default Link;
