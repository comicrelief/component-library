/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { BurgerIcon, BurgerMenu as Wrapper } from './BurgerMenu.style';
import Text from '../../../Atoms/Text/Text';

const BurgerMenu = ({ toggle }) => {
  return (
    <Wrapper
      href="#!/Header/1"
      role="button"
      aria-haspopup="true"
      aria-label="Open and close Navigation Menu, 24 items listed"
      inline
      onClick={toggle}
    >
      <BurgerIcon>
        <Text>Open and close nav menu</Text>
      </BurgerIcon>
      <span />
    </Wrapper>
  );
};

BurgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default BurgerMenu;
