import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, WrapperLink } from './Link.style';

const Link = ({ children, color, href, target, inline, wrapper, ...rest }) => {
  const window = target === 'blank' ? '_blank' : '_self';

  return wrapper ? (
    <span>
      <WrapperLink {...rest} color={color} inline={inline}>
        {children}
      </WrapperLink>
    </span>
  ) : (
    <span>
      <StyledLink
        {...rest}
        color={color}
        href={href}
        target={window}
        inline={inline}
        as="a"
      >
        {children}
      </StyledLink>
    </span>
  );
};

Link.propTypes = {
  /** Inline is link style */
  inline: PropTypes.bool,
  wrapper: PropTypes.bool,
  /** Button color style */
  color: PropTypes.string,
  /** link target */
  target: PropTypes.string,
  /** link url */
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Link.defaultProps = {
  color: 'white',
  target: 'self',
  inline: false,
  wrapper: false
};

export default Link;
