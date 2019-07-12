/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { BurgerIcon, BurgerMenu as Wrapper } from './BurgerMenu.style';
import Text from '../../../Atoms/Text/Text';
import Link from '../../../Atoms/Link/Link';

const BurgerMenu = () => {
  const [toggleState, setToggleState] = useState(false);
  function toggle() {
    setToggleState(!toggleState);
  }
  return (
    <Wrapper>
      <Link
        href="#"
        role="button"
        aria-expanded={toggleState}
        aria-haspopup="true"
        aria-label="Open and close Navigation Menu, 24 items listed"
        inline
        onClick={toggle}
      >
        <BurgerIcon>
          <Text>Open and close nav menu</Text>
        </BurgerIcon>
        <span />
      </Link>
    </Wrapper>
  );
};

export default BurgerMenu;
