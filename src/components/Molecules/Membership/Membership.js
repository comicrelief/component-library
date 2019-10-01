import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import MoneyBuy from './MoneyBuy';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';

const Wrapper = styled.div`
  max-width: 320px;
  padding: 0 ${spacing('md')};

  ${media('small')} {
    max-width: 420px;
    padding: 0 ${spacing('l')};
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: ${spacing('l')};
  }

  input {
    border: 2px solid ${({ theme }) => theme.color('grey_medium')};
    max-width: 100%;
    margin: 0;
  }
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    flex: 0 0 30%;
    cursor: pointer;

    input {
      cursor: pointer;
      padding: ${spacing('md')};
    }
  }
`;

const AmountField = styled(Input)`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  input {
    background: transparent;
    padding: ${spacing('sm')} ${spacing('md')};
    ${({ inputBorderColor }) =>
      inputBorderColor && ':focus { outline: none; border: 2px solid red;}'};
  }

  span {
    flex: 0 0 60%;

    ${media('small')} {
      flex: 0 0 40%;
    }
  }
`;
const data = [
  {
    moneyBuy: {
      id: 1,
      value: 10,
      description:
        'a month could pay for two mums in the UK to attend a regular support group for postnatal depression.'
    }
  },
  {
    moneyBuy: {
      id: 2,
      value: 20,
      description:
        'a month could pay for two mums in the UK to attend a regular support group for postnatal depression.'
    }
  },
  {
    moneyBuy: {
      id: 3,
      value: 30,
      description:
        'a month could pay for two mums in the UK to attend a regular support group for postnatal depression.'
    }
  }
];
const Membership = ({ ...rest }) => {
  const [userInput, setUserInput] = useState('');
  const [boxBorderColor, setBoxBorderColor] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState(false);

  const changeAmount = id => {
    setBoxBorderColor(id);
    setInputBorderColor(false);
    setUserInput('');
  };

  const handleChange = input => {
    setUserInput(input);
  };

  const handleUserInput = () => {
    setBoxBorderColor('');
    setInputBorderColor(true);
  };

  console.log(inputBorderColor);

  return (
    <Wrapper>
      <Form>
        <MoneyBuys>
          {data.map(({ moneyBuy: { value, id } }) => (
            <MoneyBuy
              boxBorderColor={boxBorderColor}
              current={id}
              amount={`${value}`}
              setOtherAmount={() => changeAmount(id, value)}
              key={id}
            />
          ))}
        </MoneyBuys>
        <AmountField
          name="membership_amount"
          type="number"
          inputBorderColor={inputBorderColor}
          label="Other amount"
          errorMsg=""
          id="Money buy description"
          showLabel
          {...rest}
          value={userInput}
          max="5000"
          min="1"
          pattern="[^[0-9]+([,.][0-9]+)?$]"
          placeholder="0"
          onChange={e => handleChange(e.target.value)}
          onClick={handleUserInput}
        />
      </Form>
    </Wrapper>
  );
};

// Membership.propTypes = {
// };

// Membership.defaultProps = {
// };
export default Membership;
