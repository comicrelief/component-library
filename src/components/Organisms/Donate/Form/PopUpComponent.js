/* eslint-disable */ 
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../../Atoms/Text/Text';
import spacing from '../../../../theme/shared/spacing';
import { media } from '../../../../theme/shared/size';
import PropTypes from 'prop-types';

const StyledPopUp = styled.div`
  display: ${props => props.isPop ? "grid" : "none"};
  gap: ${spacing('sm')};
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0 ${spacing('md')} ${spacing('m')};

  ${media('small')} {
    width: 450px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Cross = styled.div`
  justify-self: end;
`;

const PopUpTextDefault = "Will you become one of our valued monthly supporters by converting your single donation into a smaller, monthly donation? By giving monthly, you'll help us deliver long-term impact."

const PopUpComponent = ({ PopUpText }) => {
  const [isPop, setIsPop] = useState(true);

  return (
    <StyledPopUp isPop={isPop}>
      <Cross onClick={() => setIsPop(false)}>
        <Text weight="bold" size="m">x</Text>
      </Cross>
      <Text>{ PopUpText }</Text>
    </StyledPopUp>
  )
};

PopUpComponent.propTypes = {
  PopUpText: PropTypes.string.isRequired
};

export default PopUpComponent;
