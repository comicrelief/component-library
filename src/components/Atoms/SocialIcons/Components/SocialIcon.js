import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = ({ icon }) => (
  <li className="social-icon">
    <FontAwesomeIcon icon={icon} size="2x" fixedWidth color="red" />
  </li>
);

export default SocialIcons;
