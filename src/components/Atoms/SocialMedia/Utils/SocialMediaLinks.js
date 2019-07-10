/**
 * Get social media links by campaign
 * @param  {string} campaign
 * @return {object}
 */
export default campaign => ({
  facebook: `https://www.facebook.com/${
    campaign === 'rednoseday' ? `official${campaign}` : campaign
  }`,
  twitter: `https://twitter.com/${campaign}`,
  youtube: 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw',
  instagram: `https://www.instagram.com/${campaign}`
});
