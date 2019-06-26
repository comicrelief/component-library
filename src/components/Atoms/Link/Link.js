import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './Link.style';

const Link = ({ children, color, href, target, inline, ...rest }) => {
  const window = target === 'blank' ? '_blank' : '_self';

  return (
    <StyledLink
      {...rest}
      color={color}
      href={href}
      target={window}
      inline={inline}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  /** Inline is link style */
  inline: PropTypes.bool,
  /** Button color style */
  color: PropTypes.string,
  /** link target */
  target: PropTypes.string,
  /** link url */
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Link.defaultProps = {
  color: 'red',
  target: 'self',
  inline: false
};

export default Link;
