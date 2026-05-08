import React from 'react';
import Header2025 from './Header2025';
import data from './data/data';
import dataExtended from './data/data-extended';
import dataLive from './data/data-live';
import dataLiveMinimal from './data/data-live--minimal';
import Link from '../../Atoms/Link/Link';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';
import esuIcon from './assets/Post.svg';

const donateButton = (
  <Link color="red" type="button" href="/donation">
    Donate
  </Link>
);

const fullMetaIcons = (
  <>
    <div>
      <Icon
        icon={esuIcon}
        title="Newsletter"
        target="_blank"
        role="button"
        href="#"
        brand="comicrelief"
        tabIndex="0"
        isHeader
        id="esu"
      />
    </div>
    <div>
      <Icon
        icon={payinIcon}
        title="Pay in"
        target="_blank"
        role="button"
        href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
        brand="comicrelief"
        tabIndex="0"
        isHeader
        id="payin"
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
        isHeader
        id="shop"
      />
    </div>
    <div>
      <Icon
        icon={searchIcon}
        title="Search"
        target="self"
        role="button"
        href="/search"
        brand="comicrelief"
        tabIndex="0"
        isHeader
        id="search"
      />
    </div>
  </>
);

export default function Header2025Example() {
  return (
    <div>
      <h3>Comic Relief header</h3>
      <Header2025
        navItems={data}
        rotate="true"
        donateButton={donateButton}
      />

      <h3>Sport Relief header</h3>
      <Header2025
        navItems={data}
        campaign="Sport Relief"
        donateButton={donateButton}
      />

      <h3>Pride header</h3>
      <Header2025
        navItems={data}
        campaign="Pride"
        donateButton={donateButton}
      />

      <h3>Comic Relief header with Search</h3>
      <Header2025
        navItems={data}
        rotate="true"
        donateButton={donateButton}
        metaIcons={
          <div>
            <Icon
              icon={searchIcon}
              title="Search"
              target="self"
              role="button"
              href="/search"
              brand="comicrelief"
              tabIndex="0"
              isHeader
              id="search"
            />
          </div>
        }
      />

      <h3>Full header (standard nav)</h3>
      <Header2025
        navItems={data}
        rotate="true"
        donateButton={donateButton}
        metaIcons={fullMetaIcons}
      />

      <h3>Full header (extended nav)</h3>
      <Header2025
        navItems={dataExtended}
        rotate="true"
        donateButton={donateButton}
        metaIcons={fullMetaIcons}
      />

      <h3>Full header (live nav, 60 character limit)</h3>
      <Header2025
        navItems={dataLive}
        rotate="true"
        donateButton={donateButton}
        metaIcons={fullMetaIcons}
      />

      <h3>Full header (live nav, 50 character limit)</h3>
      <Header2025
        showBoxShadow
        characterLimit={50}
        navItems={dataLive}
        rotate="true"
        donateButton={donateButton}
        metaIcons={fullMetaIcons}
      />

      <h3>Minimal header</h3>
      <Header2025
        showBoxShadow
        characterLimit={50}
        navItems={dataLiveMinimal}
        rotate="true"
        donateButton={donateButton}
        metaIcons={fullMetaIcons}
      />
    </div>
  );
}
