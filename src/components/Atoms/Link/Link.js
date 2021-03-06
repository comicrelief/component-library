import React from 'react';
import PropTypes from 'prop-types';

import StyledLink, { HelperText, IconWrapper } from './Link.style';
import whiteListed from '../../../utils/whiteListed';

const domainRegEx = new RegExp(
  '(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]'
);

let window = '';

const Link = ({
  children,
  color,
  href,
  target,
  type,
  home,
  underline,
  icon,
  iconFirst,
  ...rest
}) => {
  /**
   * If we haven't specifically set the target via props, check if
   * this is an internal link OR on our whitelist before making it a '_self' link
   */
  if (target === null) {
    const isExternalLink = domainRegEx.test(href);
    const isWhiteListed = whiteListed(href);
    window = !isExternalLink || isWhiteListed ? '_self' : '_blank';
  } else {
    window = target === 'blank' ? '_blank' : '_self';
  }
  const hasIcon = icon !== null;

  return (
    <StyledLink
      {...rest}
      color={color}
      href={href}
      target={window}
      type={type}
      iconFirst={iconFirst}
      underline={underline}
    >
      {children}
      {target === 'blank' && <HelperText>(opens in new window)</HelperText>}
      {hasIcon && <IconWrapper type={type}>{icon}</IconWrapper>}
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
  /** Set border bottom */
  underline: PropTypes.bool,
  /** Link url */
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  iconFirst: PropTypes.bool,
  /** Embed icons */
  icon: PropTypes.node
};

Link.defaultProps = {
  type: 'standard',
  color: 'red',
  target: null,
  home: false,
  underline: true,
  iconFirst: false,
  icon: null
};

export default Link;
