import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  MoneybuyWrapper, Moneybuy, OrLabel, MoneybuyImage, MoneybuyAmount, MoneybuyDescription
} from './ImpactMoneybuys.style';

const Moneybuys = ({ items, currentAmount, opacityAnimation }) => (
  <MoneybuyWrapper>
    {items.map((item, index) => {
      const thisAmount = Math.floor(currentAmount / item.poundsPerItem);
      const isInactive = !(!opacityAnimation || currentAmount >= item.poundsPerItem);

      return (
        <Fragment key={item.poundsPerItem}>
          <Moneybuy isInactive={isInactive} data-testid={`impact-slider--moneybuy-${index + 1}`}>
            <MoneybuyImage imageURL={item.imageURL} />
            <MoneybuyAmount tag="p" family="Anton" uppercase weight="normal" size="xl" data-testid="moneybuy-amount">{thisAmount}</MoneybuyAmount>
            <MoneybuyDescription tag="p" size="s" data-testid="moneybuy-description">{item.description}</MoneybuyDescription>
          </Moneybuy>
          { index < (items.length - 1) && (
            <OrLabel tag="span">Or</OrLabel>
          )}
        </Fragment>
      );
    })}
  </MoneybuyWrapper>
);

Moneybuys.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      poundsPerItem: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired
    })
  ).isRequired,
  currentAmount: PropTypes.number.isRequired,
  opacityAnimation: PropTypes.bool.isRequired
};

export default Moneybuys;
