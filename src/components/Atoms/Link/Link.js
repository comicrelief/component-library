import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StyledLink, { HelperText, IconWrapper } from './Link.style';
import allowListed from '../../../utils/allowListed';
import { getDomain } from '../../../utils/internalLinkHelper';
import buttonTypes from '../../../theme/crTheme/buttonTypes';

let window = '';

const Link = ({
  href,
  children,
  color = 'red',
  type = 'standard',
  home = false,
  underline = true,
  iconFirst = false,
  fullWidth = false,
  buttonType = buttonTypes.PRIMARY,
  target = null,
  mobileColour = null,
  icon = null,
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
      home={home}
      iconFirst={iconFirst}
      underline={underline}
      fullWidth={fullWidth}
      buttonType={buttonType}
    >
      {children}
      {window === '_blank' && <HelperText>(opens in new window)</HelperText>}
      {hasIcon && <IconWrapper type={type}>{icon}</IconWrapper>}
    </StyledLink>
  );
};

Link.propTypes = {
  /** Link styling. See linkStyles in theme. */
  type: PropTypes.oneOf(['button', 'standard', 'standard_white', 'alt']), // TODO: alt styles based on Hero Banner
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
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
  // Primary will the default for the vast majority of contexts; with
  // Secondary and Tertirary being manually set by developers where required
  buttonType: PropTypes.oneOf([
    buttonTypes.PRIMARY,
    buttonTypes.SECONDARY,
    buttonTypes.TERTIARY
  ])
};

export default Link;
