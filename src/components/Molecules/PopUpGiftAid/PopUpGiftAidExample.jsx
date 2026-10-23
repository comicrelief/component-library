import React from 'react';
import PopUpGiftAid from './PopUpGiftAid';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: green;
  padding: 1rem;
`;

export default function PopUpGiftAidExample() {
  return (
    <Wrapper>
      <PopUpGiftAid/>
    </Wrapper>
  );
}
