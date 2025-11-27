import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getLinks from './Utils/Links';
import { circledIcons, standardIcons } from './Utils/Icons';
import Icon from './Icon/Icon';
import spacing from '../../../theme/shared/spacing';

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 auto;
  justify-content: center;
  padding: 0;
  align-items: center;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    justify-content: start;
  }
`;

const StyledItem = styled.li`
  width: 32px;
  margin-right: ${({ newStyle }) => (newStyle ? spacing('md') : spacing('m'))};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 48px;
  }
`;

/** Social media icons with customizable style linked to campaign social media accounts */
const SocialIcons = ({
  target = 'blank',
  campaign,
  newStyle = false,
  showFacebookSocialIcon,
  showInstagramSocialIcon,
  showXSocialIcon,
  showTikTokSocialIcon,
  showYouTubeSocialIcon,
  invertColor = false,
  ...restProps
}) => {
  const links = getLinks(campaign);

  // Select icon set based on newStyle prop
  const iconSet = newStyle ? standardIcons : circledIcons;

  // Map brand names to their show props
  const brandVisibilityMap = {
    facebook: showFacebookSocialIcon,
    instagram: showInstagramSocialIcon,
    twitter: showXSocialIcon,
    x: showXSocialIcon,
    tiktok: showTikTokSocialIcon,
    youtube: showYouTubeSocialIcon
  };

  // Filter icons based on visibility props
  // If prop is explicitly false, hide; otherwise show
  // (for backward compatibility with the 'old' footer)
  const shouldShowIcon = brand => {
    const visibilityProp = brandVisibilityMap[brand];
    return visibilityProp !== false;
  };

  // Get the list of brands to display
  // For newStyle, include tiktok and use 'x' instead of 'twitter'
  const brandsToShow = newStyle
    ? ['facebook', 'instagram', 'x', 'tiktok', 'youtube']
    : ['facebook', 'instagram', 'twitter', 'youtube'];

  return (
    <StyledList>
      {brandsToShow
        .filter(brand => shouldShowIcon(brand))
        .map(brand => {
          const linkData = links[brand];
          if (!linkData) {
            return null;
          }
          const icon = iconSet[brand];
          if (!icon) {
            return null;
          }
          return (
            <StyledItem key={brand} newStyle={newStyle}>
              <Icon
                target={target}
                icon={icon}
                href={linkData.url}
                title={linkData.title}
                brand={brand}
                id={linkData.id}
                newStyle={newStyle}
                invertColor={invertColor}
                {...restProps}
              />
            </StyledItem>
          );
        })}
    </StyledList>
  );
};

SocialIcons.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string.isRequired,
  /** Social media account link target */
  target: PropTypes.string,
  /** This applies the newer style, fitting with the new footer design for
   * our pre-RND 2026 website redesign.
  Currently only in use in the new footer. Once we have moved fully to
  the new design, this prop and the old styles can be removed. */
  newStyle: PropTypes.bool,
  /** Show/hide Facebook social icon */
  showFacebookSocialIcon: PropTypes.bool,
  /** Show/hide Instagram social icon */
  showInstagramSocialIcon: PropTypes.bool,
  /** Show/hide X (Twitter) social icon */
  showXSocialIcon: PropTypes.bool,
  /** Show/hide TikTok social icon */
  showTikTokSocialIcon: PropTypes.bool,
  /** Show/hide YouTube social icon */
  showYouTubeSocialIcon: PropTypes.bool,
  /** Invert the color of the svg icon, e.g. for if you're using a dark background */
  invertColor: PropTypes.bool
};

export default SocialIcons;
