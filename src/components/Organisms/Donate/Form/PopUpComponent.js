/* eslint-disable */ 
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../../Atoms/Text/Text';
import spacing from '../../../../theme/shared/spacing';
import { media } from '../../../../theme/shared/size';

const StyledPopUp = styled.div`
  display: ${props => props.isPop ? "block" : "none"};
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
  text-align: right;
  font-size: 22px;
`;

const PopUpComponent = () => {
  const [isPop, setIsPop] = useState(true);

  return (
    <StyledPopUp isPop={isPop}>
      <Cross onClick={() => setIsPop(false)}>x</Cross>
      <Text>
        We appreciate all of the donations we recieve. You can make a bigger impact by donating a smaller amount every month, to help people live free from poverty, violence and discrimination both in the UK and around the world.
      </Text>
    </StyledPopUp>
  )
};

export default PopUpComponent;
