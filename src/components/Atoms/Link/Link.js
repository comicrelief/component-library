import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './Link.style.js';

const Link = ({ children, color, link, target, inline, ...rest }) => {
  const window = target === 'blank' ? '_blank' : '_self';

  return (
    <StyledLink
      {...rest}
      color={color}
      href={link}
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
  link: PropTypes.string
};

Link.defaultProps = {
  color: 'red',
  target: 'self',
  inline: false
};

export default Link;
