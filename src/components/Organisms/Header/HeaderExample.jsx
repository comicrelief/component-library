import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';

const ExampleWrapper = styled.div`
  margin: 0 0 85px;
  border: 1px solid lightgrey;
`;

const donateLink = (
  <Link color="green" type="button" href="/donation">
    Donate
  </Link>
);

export default function HeaderExample() {
  return (
    <div>
      <ExampleWrapper>
        <h3>Comic Relief header</h3>
        <Header
          navItems={data}
          rotate="true"
          metaIcons={donateLink}
        />
      </ExampleWrapper>

      <ExampleWrapper>
        <h3>Sport Relief header</h3>
        <Header
          navItems={data}
          campaign="Sport Relief"
          logoUrl="/sportrelief"
          metaIcons={donateLink}
        />
      </ExampleWrapper>

      <ExampleWrapper>
        <h3>Pride header</h3>
        <Header
          navItems={data}
          campaign="Pride"
          metaIcons={donateLink}
        />
      </ExampleWrapper>

      <ExampleWrapper>
        <h3>Comic Relief header with Search</h3>
        <Header
          navItems={data}
          rotate="true"
          metaIcons={
            <>
              {donateLink}
              <div>
                <Icon
                  icon={searchIcon}
                  title="Search"
                  target="self"
                  role="button"
                  href="/search"
                  brand="comicrelief"
                  tabIndex="0"
                  id="search"
                />
              </div>
            </>
          }
        />
      </ExampleWrapper>

      <ExampleWrapper>
        <h3>Comic Relief header with Search and Shop</h3>
        <Header
          navItems={data}
          rotate="true"
          metaIcons={
            <>
              {donateLink}
              <div>
                <Icon
                  icon={searchIcon}
                  title="Search"
                  target="self"
                  role="button"
                  href="/search"
                  brand="comicrelief"
                  tabIndex="0"
                  id="search"
                />
              </div>
              <div>
                <Icon
                  icon={shopIcon}
                  title="Shop"
                  target="_blank"
                  role="button"
                  href="https://shop.comicrelief.com"
                  brand="comicrelief"
                  tabIndex="0"
                  id="shop"
                />
              </div>
              <div>
                <Icon
                  icon={payinIcon}
                  title="Payin"
                  target="_blank"
                  role="button"
                  href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
                  brand="comicrelief"
                  tabIndex="0"
                  id="payin"
                />
              </div>
            </>
          }
        />
      </ExampleWrapper>
    </div>
  );
}
