/* Determine where to grab the URL, depending on the component type and values supplied */
const ShareUrlHelper = (urlToShare, typeOfShare) => {
  // Encode the URL so we can happily pass it as a parameter, fragments and all
  const urlToShareEncoded = encodeURIComponent(urlToShare);

  // Construct all share urls
  const shareURLs = {
    Twitter: `http://www.twitter.com/intent/tweet?url=${urlToShareEncoded}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${urlToShareEncoded}`
  };

  return shareURLs[typeOfShare];
};

export default ShareUrlHelper;
