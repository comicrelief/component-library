const handleTitles = (givingType, title, subtitle, monthlyTitle, monthlySubtitle) => {
  let thisTitle; let thisSubtitle;
  const showMonthlyCopy = givingType === 'monthly' && Boolean(monthlySubtitle) && Boolean(monthlyTitle);
  // Overall flag as to whether we render copy *at all*
  const showCopy = showMonthlyCopy || (Boolean(subtitle) && Boolean(title));

  // Apply the override if we've got monthly content AND giving type:
  if (showMonthlyCopy) {
    thisTitle = monthlyTitle;
    thisSubtitle = monthlyTitle;
  } else if (showCopy) {
    // Else, fall back to the default, after checking it's appropriate
    thisTitle = title;
    thisSubtitle = subtitle;
  }

  return { showCopy, thisTitle, thisSubtitle };
};

const handleCopy = (gType, otherAmount, chooseAmount, monthlyOtherAmount, monthlyChooseAmount) => {
  // Only use any monthly overrides for the appropriate givingType
  const thisOtherAmountText = (gType === 'monthly' && Boolean(monthlyOtherAmount) ? monthlyOtherAmount : otherAmount);
  const thisChooseAmountText = (gType === 'monthly' && Boolean(monthlyChooseAmount) ? monthlyChooseAmount : chooseAmount);

  return { thisOtherAmountText, thisChooseAmountText };
};

export { handleTitles, handleCopy };
