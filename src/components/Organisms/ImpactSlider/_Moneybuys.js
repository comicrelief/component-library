import React from 'react';
import PropTypes from 'prop-types';

import {
  MoneybuyWrapper, Moneybuy, OrLabel, MoneybuyImage, MoneybuyAmount, MoneybuyDescription
} from './Moneybuys.style';

const Moneybuys = ({ items, currentAmount, opacityAnimation }) => {
  console.log('items:', items);

  return (
    <MoneybuyWrapper>
      {items.map((item, index) => {
        const roundedPerPound = Math.floor(item.itemPerPound);
        const thisAmount = Math.floor(currentAmount / roundedPerPound);
        const isInactive = !(opacityAnimation || currentAmount >= roundedPerPound);
        return (
          <>
            <Moneybuy isInactive={isInactive}>
              <MoneybuyImage imageURL={item.imageURL} />
              <MoneybuyAmount>{thisAmount}</MoneybuyAmount>
              <MoneybuyDescription>{item.description}</MoneybuyDescription>
            </Moneybuy>
            { index < (items.length - 1) && (
            <OrLabel>Or</OrLabel>
            )}
          </>
        );
      })}

    </MoneybuyWrapper>

  );
};

Moneybuys.defaultProps = {
  opacityAnimation: false
};

Moneybuys.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      itemPerPound: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageURL: PropTypes.number.isRequired
    })
  ).isRequired,
  currentAmount: PropTypes.number.isRequired,
  opacityAnimation: PropTypes.bool
};

export default Moneybuys;
