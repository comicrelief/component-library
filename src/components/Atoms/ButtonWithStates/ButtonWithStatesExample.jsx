import React from 'react';
import ButtonWithStates from './ButtonWithStates';

export default function ButtonWithStatesExample() {
  return (
    <>

      <ButtonWithStates
        type="submit"
        loading disabled
      >
        Enter prize draw
      </ButtonWithStates>

      <h3 style={{marginTop: "50px"}}>Children are an optional prop. Example to demonstrate the ButtonWithStates will work even with no children provided:</h3>

      <ButtonWithStates
        type="submit"
        loading
        loadingText="Submitting…"
      />

    </>
  );
}
