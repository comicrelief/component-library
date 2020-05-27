const makeOnEnterHandler = handler => e => {
  const keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    handler(e);
  }
};

export default makeOnEnterHandler;
