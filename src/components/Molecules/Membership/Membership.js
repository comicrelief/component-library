import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import MoneyBuy from './MoneyBuy';

const Wrapper = styled.div`
  max-width: 320px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-width: 420px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Membership = () => {
  return (
    <Wrapper>
      <Form>
        <MoneyBuy />
        <MoneyBuy />
        <MoneyBuy />
      </Form>
    </Wrapper>
  );
};

// Membership.propTypes = {};

export default Membership;
