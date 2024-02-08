const handlePadding = paddingOption => {
  switch (paddingOption) {
    case 'upper-off':
      return 'padding-top: 0;';
    case 'lower-off':
      return 'padding-bottom: 0;';
    case 'both-off':
      return 'padding-top: 0; padding-bottom: 0';
      // To leave pre-existing styles untouched
    case 'both-on':
      return null;
      // Just in case
    default:
      return null;
  }
};

export default handlePadding;
