/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { BurgerBar, BurgerHiddenText, BurgerWrapper } from './BurgerMenu.style';
import Text from '../../../Atoms/Text/Text';

const BurgerMenu = ({ toggle, isExpandable }) => {
  return (
    <BurgerWrapper
      href="#"
      role="button"
      aria-haspopup="true"
      aria-label="Open and close Navigation Menu, 24 items listed"
      inline
      onClick={toggle}
      isExpandable={isExpandable}
    >
      <BurgerHiddenText>
        <Text>Open and close nav menu</Text>
      </BurgerHiddenText>
      <BurgerBar />
      <BurgerBar />
      <BurgerBar />
      <BurgerBar />
    </BurgerWrapper>
  );
};

BurgerMenu.propTypes = {
  toggle: PropTypes.func.isRequired,
  isExpandable: PropTypes.bool.isRequired
};

export default BurgerMenu;
