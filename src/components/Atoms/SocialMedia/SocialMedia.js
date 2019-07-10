import React from 'react';
import PropTypes from 'prop-types';
import getLinks from './Utils/SocialMediaLinks';
import icons from './Utils/SocialMediaIcons';
import StyledSocialIcons from './Components/SocialIcons.style';

/** Social media icons with customizable style linked to campaign social media accounts */
const SocialMedia = ({ className, campaign, ...restProps }) => {
  const links = getLinks(campaign);
  return (
    <StyledSocialIcons
      className={className}
      icons={icons}
      links={links}
      {...restProps}
    />
  );
};

SocialMedia.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string.isRequired,
  /** Main social media container class */
  className: PropTypes.string,
  /** Social media brand color */
  color: PropTypes.string,
  /** Social media brand color on hover */
  colorOnHover: PropTypes.string,
  /** Social media brand circular background color */
  backgroundColor: PropTypes.string,
  /** Social media brand circular background color on hover */
  backgroundColorOnHover: PropTypes.string,
  /** Social media account link target */
  target: PropTypes.string
};

SocialMedia.defaultProps = {
  className: '',
  color: 'white',
  colorOnHover: 'white',
  backgroundColor: 'red',
  backgroundColorOnHover: 'teal',
  target: 'blank'
};

export default SocialMedia;
