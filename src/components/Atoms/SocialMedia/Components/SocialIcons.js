import React from 'react';
import PropTypes from 'prop-types';
import StyledSocialIcon from './SocialIcon.style';

const SocialIcons = ({ className, icons, links, ...restProps }) => {
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

SocialIcons.propTypes = {
  className: PropTypes.string.isRequired,
  links: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    youtube: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired,
  icons: PropTypes.shape({
    facebook: PropTypes.object,
    twitter: PropTypes.object,
    youtube: PropTypes.object,
    instagram: PropTypes.object
  }).isRequired
};

export default SocialIcons;
