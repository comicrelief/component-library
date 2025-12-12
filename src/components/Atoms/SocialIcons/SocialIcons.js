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
  justify-content: ${newStyle => (newStyle ? 'space-around' : 'center')};
  margin: ${({ newStyle }) => (newStyle ? `${spacing('lg')} 0` : '0 auto 0 0')};
  padding: 0;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    justify-content: start;
     margin: ${({ newStyle }) => (newStyle ? `${spacing('sm')} 0` : '0 auto 0 0')};
  }
`;

const StyledItem = styled.li`
  width: 48px;
  margin-right: ${({ newStyle }) => (newStyle ? '0' : spacing('m'))};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    margin-right: ${({ newStyle }) => (newStyle ? spacing('md') : spacing('m'))};
  }
`;

const StyledIcon = styled(Icon)`
  width: auto;
`;

const SocialIcons = ({
  campaign,
  showFacebookSocialIcon,
  showInstagramSocialIcon,
  showXSocialIcon,
  showTikTokSocialIcon,
  showYouTubeSocialIcon,
  target = 'blank',
  newStyle = false,
  invertColor = false,
  ...restProps
}) => {
  const links = getLinks(campaign);

  // We've got two sets now - one better suited to the new footer design,
  // and one for the legacy footer.
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

  // If prop is explicitly false, hide; otherwise show
  // (for backward compatibility with the 'old' footer)
  const shouldShowIcon = brand => {
    const visibilityProp = brandVisibilityMap[brand];
    return visibilityProp !== false;
  };

  // Get the list of brands to display
  // For newStyle, include tiktok and use 'x' instead of twitter
  const brandsToShow = newStyle
    ? ['facebook', 'instagram', 'x', 'tiktok', 'youtube']
    : ['facebook', 'instagram', 'twitter', 'youtube'];

  return (
    <StyledList newStyle={newStyle}>
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
              <StyledIcon
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
