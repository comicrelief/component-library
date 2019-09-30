import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';
import MoneyBuy from './MoneyBuy';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';

const Wrapper = styled.div`
  max-width: 320px;

  ${media('small')} {
    max-width: 420px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 ${spacing('md')};

  ${media('small')} {
    padding: 0 ${spacing('l')};
  }
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AmountField = styled(Input)`
  margin: 0;
  padding: ${spacing('md')} 0;
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  span {
    flex: 0 0 60%;

    ${media('small')} {
      flex: 0 0 40%;
    }
  }
`;

const Membership = () => {
  return (
    <Wrapper>
      <Form>
        <MoneyBuys>
          <MoneyBuy amount="10" />
          <MoneyBuy amount="20" />
          <MoneyBuy amount="30" />
        </MoneyBuys>
        <AmountField
          name="fullname"
          type="text"
          label="Other amount"
          errorMsg=""
          id="Money buy description"
          showLabel
        />
      </Form>
    </Wrapper>
  );
};

// Membership.propTypes = {};

export default Membership;
