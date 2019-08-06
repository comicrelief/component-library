import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './Link.style';

const Link = ({ children, color, href, target, type, home, ...rest }) => {
  const window = target === 'blank' ? '_blank' : '_self';
  const relationship = target === 'blank' ? 'noopener noreferrer' : false;

  return (
    <StyledLink
      {...rest}
      color={color}
      href={href}
      target={window}
      rel={home ? 'home' : relationship}
      type={type}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  /** Link styling. See linkStyles in theme. */
  type: PropTypes.oneOf(['button', 'standard', 'standard_white']),
  /** Color for button style link. See buttonColors in theme */
  color: PropTypes.string,
  /** Link target */
  target: PropTypes.string,
  /** Set to true if link rel attribute should be home */
  home: PropTypes.bool,
  /** Link url */
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Link.defaultProps = {
  type: 'standard',
  color: 'red',
  target: 'self',
  home: false
};

export default Link;
