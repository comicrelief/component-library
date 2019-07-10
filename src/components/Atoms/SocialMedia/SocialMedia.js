import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getLinks from './Utils/SocialMediaLinks';
import icons from './Utils/SocialMediaIcons';
import StyledSocialIcon from './Components/SocialIcon.style';

const SocialMedia = ({ className, campaign, ...restProps }) => {
  const links = getLinks(campaign);
  return (
    <ul className={`icons ${className}`}>
      {Object.keys(icons).map(brand => (
        <li key={brand}>
          <StyledSocialIcon
            icon={icons[brand]}
            href={links[brand]}
            {...restProps}
          />
        </li>
      ))}
    </ul>
  );
};

SocialMedia.propTypes = {
  className: PropTypes.string.isRequired,
  campaign: PropTypes.string.isRequired,
  color: PropTypes.string,
  colorOnHover: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundColorOnHover: PropTypes.string,
  target: PropTypes.string
};

SocialMedia.defaultProps = {
  color: 'white',
  colorOnHover: 'white',
  backgroundColor: 'red',
  backgroundColorOnHover: 'teal',
  target: 'blank'
};

const StyledSocialMedia = styled(SocialMedia)`
  &.icons {
    display: inline-block;
    list-style-type: none;
  }
  li {
    float: left;
    padding: 10px;
  }
`;
export default StyledSocialMedia;
