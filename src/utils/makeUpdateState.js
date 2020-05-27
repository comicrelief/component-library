const makeUpdateState = setState => updatedValues =>
  setState(prevState => ({ ...prevState, ...updatedValues }));

export default makeUpdateState;
