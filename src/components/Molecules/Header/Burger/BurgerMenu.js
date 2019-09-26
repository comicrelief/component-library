/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { BurgerBar, BurgerHiddenText, BurgerWrapper } from './BurgerMenu.style';

const BurgerMenu = ({ toggle, isExpandable }) => {
  return (
    <BurgerWrapper
      href="#"
      role="button"
      aria-haspopup="true"
      aria-label="Open and close Navigation Menu"
      inline
      underline={false}
      onClick={toggle}
      isExpandable={isExpandable}
    >
      <BurgerHiddenText>Open and close nav menu</BurgerHiddenText>
      <BurgerBar />
    </BurgerWrapper>
  );
};

BurgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  isExpandable: PropTypes.bool.isRequired
};

export default BurgerMenu;
