const handleTitles = (givingType, title, subtitle, monthlyTitle, monthlySubtitle) => {
  let thisTitle; let thisSubtitle;
  const showSingleCopy = Boolean(subtitle) && Boolean(title);
  const showMonthlyCopy = givingType === 'monthly' && Boolean(monthlySubtitle) && Boolean(monthlyTitle);
  // Overall flag as to whether we render copy for the currently selected givingType
  const showCopy = showMonthlyCopy || showSingleCopy;

  // Acts as a flag to centre the form when no copy is supplied *at all*
  const noTitlesAtAll = showSingleCopy === false && showMonthlyCopy === false;

  // Apply the override if we've got monthly content AND giving type:
  if (showMonthlyCopy) {
    thisTitle = monthlyTitle;
    thisSubtitle = monthlyTitle;
  } else if (showCopy) {
    // Else, fall back to the default, after checking it's appropriate
    thisTitle = title;
    thisSubtitle = subtitle;
  }

  return {
    showCopy, thisTitle, thisSubtitle, noTitlesAtAll
  };
};

const handleCopy = (gType,
  otherAmount, primaryTitleText, monthlyOtherAmount, monthlyPrimaryTitleText
) => {
  // Only use any monthly overrides for the appropriate givingType
  const thisOtherAmountText = (gType === 'monthly' && Boolean(monthlyOtherAmount) ? monthlyOtherAmount : otherAmount);
  const thisPrimaryTitleText = (gType === 'monthly' && Boolean(monthlyPrimaryTitleText) ? monthlyPrimaryTitleText : primaryTitleText);

  return { thisOtherAmountText, thisPrimaryTitleText };
};

export { handleTitles, handleCopy };
