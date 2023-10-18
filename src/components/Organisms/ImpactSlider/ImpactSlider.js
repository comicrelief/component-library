/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';

import {
  OuterWrapper, Copy, CurrentAmountCopy
} from './ImpactSlider.style';

const ImpactSlider = ({
  copy, heading
}) => {
  const [currentAmount, setCurrentAmount] = useState(15);

  const updateAmount = () => {
    console.log('updateAmount');
    setCurrentAmount(Math.random() * 10);
  };

  return (

    <OuterWrapper>

      <Text tag="h1" family="Anton" uppercase weight="normal" size="xl">{heading}</Text>

      <Copy markup={copy} />

      <CurrentAmountCopy>
        A donation of
        {' '}
        £
        {currentAmount}
        {' '}
        could help pay for:
      </CurrentAmountCopy>
      <button type="button" onClick={updateAmount}>Update amount</button>
    </OuterWrapper>
  );
};

ImpactSlider.propTypes = {
  heading: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired
};

export default ImpactSlider;
