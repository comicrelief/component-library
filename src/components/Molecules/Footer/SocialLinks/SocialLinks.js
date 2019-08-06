import React from 'react';
import styled from 'styled-components';

import image1 from './assets/image1.svg';
import image2 from './assets/image2.svg';
import image3 from './assets/image3.svg';
import image4 from './assets/image4.svg';

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
            <SocialIcon src={image1} title="Facebook" />
          </a>
        </SocialIconItem>

        <SocialIconItem>
          <a
            href="https://twitter.com/comicrelief"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={image2} title="Twitter" />
          </a>
        </SocialIconItem>

        <SocialIconItem>
          <a
            href="https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={image3} title="Youtube" />
          </a>
        </SocialIconItem>

        <SocialIconItem>
          <a
            href="https://www.instagram.com/comicrelief/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={image4} title="Instagram" />
          </a>
        </SocialIconItem>
      </SocialIconList>
    </div>
  );
};

export default SocialLinks;
