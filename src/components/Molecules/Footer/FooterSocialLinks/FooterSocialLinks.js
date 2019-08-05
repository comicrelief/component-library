import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import image1 from './assets/image1.svg';
import image2 from './assets/image2.svg';
import image3 from './assets/image3.svg';
import image4 from './assets/image4.svg';
import image5 from './assets/image5.svg';

const SocialIconList = styled.ul`
  width: 100%;
  margin: 0 0 90px;
  padding: 0;
`;

const SocialIconItem = styled.li`
  width: auto;
  height: auto;
  display: inline-block;
  margin: 5px 10px 0;
`;

const SocialIcon = styled.img`
  object-fit: cover;
  width: 50px;
  height: auto;
`;

const FooterSocialLinks = ({ prop1 }) => {
  return (
    <div>
      {prop1}
      footer social linkssss
      <SocialIconList>
        <SocialIconItem>
          <SocialIcon src={image1} alt="Comic Relief logo" aria-label="logo" />
        </SocialIconItem>
        <SocialIconItem>
          <SocialIcon src={image2} alt="Comic Relief logo" aria-label="logo" />
        </SocialIconItem>
        <SocialIconItem>
          <SocialIcon src={image3} alt="Comic Relief logo" aria-label="logo" />
        </SocialIconItem>
        <SocialIconItem>
          <SocialIcon src={image4} alt="Comic Relief logo" aria-label="logo" />
        </SocialIconItem>
        <SocialIconItem>
          <SocialIcon src={image5} alt="Comic Relief logo" aria-label="logo" />
        </SocialIconItem>
      </SocialIconList>
    </div>
  );
};

FooterSocialLinks.propTypes = {
  prop1: PropTypes.string
};

FooterSocialLinks.defaultProps = {
  prop1: 'def prop1'
};

export default FooterSocialLinks;
