import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../Atoms/SocialIcons/SocialIcons';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
// import styled from 'styled-components';
// import spacing from '../../../theme/shared/spacing';

/** Social media icons with customizable style linked to campaign social media accounts */
const ShareButton = ({ ...restProps }) => {
  return (
    <ul>
      <li>
        <Icon
          icon="twitter.svg"
          href="http://www.twitter.com"
          title="the title"
          brand="comicrelief"
          {...restProps}
        />
      </li>
      <li>
        <Icon
          icon="facebook.svg"
          href="http://www.facebook.com"
          title="the title"
          brand="comicrelief"
          {...restProps}
        />
      </li>
    </ul>
  );
};

SocialIcons.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string.isRequired
};

SocialIcons.defaultProps = {};

export default ShareButton;
