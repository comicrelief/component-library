import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StyledLink, { HelperText, IconWrapper } from './Link.style';
import allowListed from '../../../utils/allowListed';
import { getDomain } from '../../../utils/internalLinkHelper';

let window = '';

const Link = ({
  children,
  color,
  mobileColour,
  href,
  target,
  type,
  home,
  underline,
  icon,
  iconFirst,
  ...rest
}) => {
  const [documentHost, setDocumentHost] = useState('');
  /**
   * If we haven't specifically set the target via props, check if
   * this is an internal link OR on our allowList before making it a '_self' link
   */
  if (target === null) {
    // Use our helper function to determine the raw domains to compare
    const currentDomain = getDomain(documentHost);
    const linkDomain = getDomain(href);

    // Additional check for applications that need more control
    const isallowListOverridden = rest.overrideallowList === true;

    /**
     * If the link has no domain supplied (likely '/' or '#')
     * OR has the same domain as the current page, don't open
     * in a new tab
     */
    const isExternalLink = linkDomain !== '' && (currentDomain !== linkDomain);
    const isallowListed = allowListed(href);

    window = isExternalLink && (isallowListOverridden || !isallowListed) ? '_blank' : '_self';
  } else {
    window = target === 'blank' ? '_blank' : '_self';
  }
  const hasIcon = icon !== null;

  useEffect(() => {
    setDocumentHost(document.location.host);
  }, []);

  return (
    <StyledLink
      {...rest}
      color={color}
      mobileColour={mobileColour}
      href={href}
      target={window}
      type={type}
      iconFirst={iconFirst}
      underline={underline}
    >
      {children}
      {window === '_blank' && <HelperText>(opens in new window)</HelperText>}
      {hasIcon && <IconWrapper type={type}>{icon}</IconWrapper>}
    </StyledLink>
  );
};

Link.propTypes = {
  /** Link styling. See linkStyles in theme. */
  type: PropTypes.oneOf(['button', 'standard', 'standard_white']),
  /** Color for button style link. See buttonColors in theme */
  color: PropTypes.string,
  mobileColour: PropTypes.string,
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
  mobileColour: 'red',
  target: null,
  home: false,
  underline: true,
  iconFirst: false,
  icon: null
};

export default Link;
