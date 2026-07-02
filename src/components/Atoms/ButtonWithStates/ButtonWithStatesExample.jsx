import React from 'react';
import ButtonWithStates from './ButtonWithStates';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function ButtonWithStatesExample() {
  return (
    <>
      <ExampleContainer>
        <ButtonWithStates
          type="submit"
          loading disabled
        >
          Enter prize draw
        </ButtonWithStates>
      </ExampleContainer>

      <h3 style={{marginTop: "50px"}}>Children are an optional prop. Example to demonstrate the ButtonWithStates will work even with no children provided:</h3>

      <ExampleContainer>
        <ButtonWithStates
          type="submit"
          loading
          loadingText="Submitting…"
        />
      </ExampleContainer>
    </>
  );
}
