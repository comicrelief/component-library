import React from 'react';
import PropTypes from 'prop-types';

import { BurgerBar, BurgerHiddenText, BurgerWrapper } from './BurgerMenu.style';

const BurgerMenu = ({ toggle, isMenuOpen }) => (
  <BurgerWrapper
    data-testid="BurgerWrapper"
    type="button"
    aria-haspopup="true"
    aria-expanded={isMenuOpen}
    aria-label="Open and close Navigation Menu"
    onClick={toggle}
    isMenuOpen={isMenuOpen}
  >
    <BurgerHiddenText>Open and close nav menu</BurgerHiddenText>
    <BurgerBar />
  </BurgerWrapper>
);

BurgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default BurgerMenu;
