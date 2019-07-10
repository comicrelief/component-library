import React from 'react';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import StyledSocialIcon from './Components/SocialIcon.style';

const icons = {
  facebook: faFacebookF,
  twitter: faTwitter,
  youtube: faYoutube,
  instagram: faInstagram
};

const SocialIcons = () => {
  return (
    <ul>
      {Object.keys(icons).map(brand => (
        <StyledSocialIcon key={brand} icon={icons[brand]} />
      ))}
    </ul>
  );
};

export default SocialIcons;
