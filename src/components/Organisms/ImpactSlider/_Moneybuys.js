import React from 'react';
import PropTypes from 'prop-types';
// Why doesn't ESLInt see these as valid imports??
// import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import {
  MoneybuyWrapper, Moneybuy, OrLabel
} from './Moneybuys.style';

const Moneybuys = ({ items }) => {
  console.log('items:', items);

  return (
    <MoneybuyWrapper>
      {items.map((item, index) => (
        <>
          <Moneybuy>
            <p>{item.title}</p>
            <p>{item.copy}</p>
            <p>{item.amount}</p>
          </Moneybuy>
          { index < (items.length - 1) && (
            <OrLabel>Or</OrLabel>
          )}
        </>
      ))}

    </MoneybuyWrapper>

  );
};

Moneybuys.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Moneybuys;
