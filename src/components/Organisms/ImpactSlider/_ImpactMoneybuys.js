import React from 'react';
import PropTypes from 'prop-types';

import {
  MoneybuyWrapper, Moneybuy, OrLabel, MoneybuyImage, MoneybuyAmount, MoneybuyDescription
} from './ImpactMoneybuys.style';

const Moneybuys = ({ items, currentAmount, opacityAnimation }) => (
  <MoneybuyWrapper>
    {items.map((item, index) => {
      const roundedPerPound = Math.floor(item.itemPerPound);
      const thisAmount = Math.floor(currentAmount / roundedPerPound);
      const isInactive = !(opacityAnimation || currentAmount >= roundedPerPound);

      return (
        <>
          <Moneybuy isInactive={isInactive}>
            <MoneybuyImage imageURL={item.imageURL} />
            <MoneybuyAmount tag="p" family="Anton" uppercase weight="normal" size="xl">{thisAmount}</MoneybuyAmount>
            <MoneybuyDescription tag="p" size="sm">{item.description}</MoneybuyDescription>
          </Moneybuy>
          { index < (items.length - 1) && (
            <OrLabel>Or</OrLabel>
          )}
        </>
      );
    })}
  </MoneybuyWrapper>
);

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
