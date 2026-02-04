import React from 'react';
import PropTypes from 'prop-types';

import { BurgerBar, BurgerHiddenText, BurgerWrapper } from './BurgerMenu.style';

const BurgerMenu = ({ toggle, isExpandable }) => (
  <BurgerWrapper
    data-testid="BurgerWrapper"
    type="button"
    aria-haspopup="true"
    aria-expanded={isExpandable}
    aria-label="Open and close Navigation Menu"
    onClick={toggle}
    isExpandable={isExpandable}
  >
    <BurgerHiddenText>Open and close nav menu</BurgerHiddenText>
    <BurgerBar />
  </BurgerWrapper>
);

BurgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  isExpandable: PropTypes.bool.isRequired
};

export default BurgerMenu;
