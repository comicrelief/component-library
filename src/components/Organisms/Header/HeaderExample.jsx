import React from 'react';
import Header from './Header';
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';

const donateLink = (
  <Link color="green" type="button" href="/donation">
    Donate
  </Link>
);

export function HeaderExample1() {
  return (
    <Header
      navItems={data}
      rotate="true"
      metaIcons={donateLink}
    />
  );
}

export function HeaderExample2() {
  return (
    <Header
      navItems={data}
      campaign="Sport Relief"
      logoUrl="/sportrelief"
      metaIcons={donateLink}
    />
  );
}

export function HeaderExample3() {
  return (
    <Header
      navItems={data}
      campaign="Pride"
      metaIcons={donateLink}
    />
  );
}

export function HeaderExample4() {
  return (
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
  );
}

export function HeaderExample5() {
  return (
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
  );
}
