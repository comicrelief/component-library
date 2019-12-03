import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding: ${spacing('l')} 0 0;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  margin-bottom: ${spacing('l')};
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: 700px) {
    width: calc(100% / 3);
  }
`;

/**
 * Info Banner for landing pages.
 */

const InfoBanner = ({ title, theme, startDate, endDate, country, amount }) => {
  return (
    <Container>
      <Info>
        <Text tag="h3" size="md" uppercase>
          Project Name
        </Text>
        <Text tag="p" size="sm">
          {title}
        </Text>
      </Info>
      <Info>
        <Text tag="h3" size="md" uppercase>
          End Date
        </Text>
        <Text tag="p" size="sm">
          {endDate}
        </Text>
      </Info>
      <Info>
        <Text tag="h3" size="md" uppercase>
          Funding theme
        </Text>
        <Text tag="p" size="sm">
          {theme}
        </Text>
      </Info>
      <Info>
        <Text tag="h3" size="md" uppercase>
          Amount Awarded
        </Text>
        <Text tag="p" size="sm">
          <CurrencyFormat
            value={amount}
            displayType="text"
            thousandSeparator
            prefix="£"
            renderText={value => value}
          />
        </Text>
      </Info>
      <Info>
        <Text tag="h3" size="md" uppercase>
          Start Date
        </Text>
        <Text tag="p" size="sm">
          {startDate}
        </Text>
      </Info>
      <Info>
        <Text tag="h3" size="md" uppercase>
          Beneficiary Country
        </Text>
        <Text tag="p" size="sm">
          {country}
        </Text>
      </Info>
    </Container>
  );
};

InfoBanner.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default InfoBanner;
