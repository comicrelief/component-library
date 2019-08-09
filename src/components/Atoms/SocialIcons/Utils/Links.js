/**
 * Get social media links by campaign
 * @param  {string} campaign
 * @return {object}
 */
export default campaign => ({
  facebook: {
    url: `https://www.facebook.com/${campaign}`,
    title: 'Check out our Facebook page'
  },
  twitter: {
    url: `https://twitter.com/${campaign}`,
    title: 'Check out our Twitter account'
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw',
    title: 'Check out our YouTube channel'
  },
  instagram: {
    url: `https://www.instagram.com/${campaign}`,
    title: 'Check out our Instagram account'
  }
});
