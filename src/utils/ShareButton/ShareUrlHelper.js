/* Determine where to grab the URL, depending on the component type and values supplied */
const ShareUrlHelper = (typeOfShare, urlToShare) => {
  // Construct all share urls
  const shareURLs = {
    Twitter: `http://www.twitter.com/intent/tweet?url=${urlToShare}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`
  };

  return shareURLs[typeOfShare];
};

export default ShareUrlHelper;
