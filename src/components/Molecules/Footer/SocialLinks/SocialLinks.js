import React from 'react';
import styled from 'styled-components';

import fbIcon from './assets/social-icon--fb.svg';
import ytIcon from './assets/social-icon--yt.svg';
import twIcon from './assets/social-icon--tw.svg';
import igIcon from './assets/social-icon--ig.svg';

const SocialIconList = styled.ul`
  width: 100%;
  margin: 0 0 50px;
  padding: 0;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    margin: 0 0 90px;
  }
`;

const SocialIconItem = styled.li`
  width: auto;
  height: auto;
  display: inline-block;
  margin: 5px 10px 0;

  a {
    display: block;
  }
`;

const SocialIcon = styled.img`
  width: 58px;
  height: auto;
`;

const SocialLinks = () => {
  return (
    <div>
      <SocialIconList>
        <SocialIconItem>
          <a
            href="https://www.facebook.com/comicrelief"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={fbIcon} title="FB" />
          </a>
        </SocialIconItem>

        <SocialIconItem>
          <a
            href="https://twitter.com/comicrelief"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={ytIcon} title="Twitter" />
          </a>
        </SocialIconItem>

        <SocialIconItem>
          <a
            href="https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={twIcon} title="Youtube" />
          </a>
        </SocialIconItem>

        <SocialIconItem>
          <a
            href="https://www.instagram.com/comicrelief/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={igIcon} title="Instagram" />
          </a>
        </SocialIconItem>
      </SocialIconList>
    </div>
  );
};

export default SocialLinks;
