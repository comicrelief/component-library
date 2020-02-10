import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../../../Atoms/Input/Input';
import { media } from '../../../../theme/shared/size';
import spacing from '../../../../theme/shared/spacing';
import zIndex from '../../../../theme/shared/zIndex';

const Wrapper = styled.div`
  margin-top: ${spacing('l')};
  display: flex;
  flex-direction: row;

  ${media('medium')} {
    margin-left: 0;
    margin-top: 0;
  }
  label {
    flex-basis: 50%;
  }
`;

const MoneyBox = styled(Input)`
  input[aria-label='Give Once'] {
    border-radius: 10px 0 0 10px;
  }
  input[aria-label='Give Monthly'] {
    border-radius: 0 10px 10px 0;
  }
  input {
    border: none;
    width: 100%;
    max-width: 100%;
    font-size: ${({ theme }) => theme.fontSize('s')};
    font-weight: bold;
    padding: ${spacing('md')};
    cursor: ${({ active }) => (active === true ? 'default' : 'pointer')};

    ${({ boxBorderColor, isInputMatchBox, isSelected }) =>
      (boxBorderColor === isInputMatchBox || isSelected) &&
      css`
        ${({ active }) =>
          active === true
            ? 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);'
            : null};
        ${({ active }) => (active === true ? zIndex('high') : null)};
        background-color: ${({ active, theme }) =>
          active === true ? theme.color('blue') : theme.color('blue_light')};
        color: ${({ active, theme }) =>
          active === true ? theme.color('white') : theme.color('black')};
      `}
  }
`;

const GivingSelector = ({ givingType, changeGivingType, ...rest }) => {
  return (
    <Wrapper>
      <MoneyBox
        {...rest}
        aria-label="Give Once"
        value="Give Once"
        type="button"
        label=""
        errorMsg=""
        active={givingType === 'single'}
        onClick={() => {
          changeGivingType('single');
        }}
      />
      <MoneyBox
        {...rest}
        aria-label="Give Monthly"
        value="Give Monthly"
        type="button"
        label=""
        errorMsg=""
        active={givingType === 'monthly'}
        onClick={() => {
          changeGivingType('monthly');
        }}
      />
    </Wrapper>
  );
};

GivingSelector.propTypes = {
  givingType: PropTypes.string.isRequired,
  changeGivingType: PropTypes.func.isRequired
};

export default GivingSelector;
