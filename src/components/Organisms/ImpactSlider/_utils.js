/* eslint-disable no-unused-vars */
const getUrlParameter = name => {
  const text = name.replace(/\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${text}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  const param = results === null
    ? 'generic'
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
  return param;
};

const handleSubmission = (
  amount,
  donateLink,
  clientID,
  rowID
) => {
  let currentpageUrl = window.location.href;

  // to-do: do we need this?
  const affiliateValue = getUrlParameter(currentpageUrl);

  const reg = /[#?|[\]\\]/g;

  if (currentpageUrl.match(reg) !== null) {
    const thisMatch = currentpageUrl.match(reg)[0];
    currentpageUrl = currentpageUrl.substring(
      0,
      currentpageUrl.indexOf(thisMatch)
    );
  }

  // TO-DO:
  // - do we need client IDs?
  // - do we need affliate?
  // - I guess we still need rowID for the back-browsing scroll stuff?
  const forwardingUrl = `${donateLink}?amount=${amount}&clientOverride=${clientID}&currency=GBP&givingType=single&affiliate=${affiliateValue}&siteurl=${currentpageUrl}&rowID=${rowID}`;

  console.log(JSON.stringify(forwardingUrl));
  console.log(forwardingUrl);

  // window.location.href = forwardingUrl;
};

export default handleSubmission;
