import React from 'react';
import PropTypes from 'prop-types';

// import Logos from '../../Molecules/Logos/Logos';
// import MainNav from './Nav/Nav';
// import {
//   Brand, HeaderWrapper, InnerWrapper, MetaIcons
// } from './Header.style';

const ImpactSlider = ({
  campaign
}) => (
  <div>
    hello there
    {campaign}
  </div>
);

ImpactSlider.propTypes = {
  campaign: PropTypes.string
};

ImpactSlider.defaultProps = {
  campaign: 'Comic Relief'
};

export default ImpactSlider;
