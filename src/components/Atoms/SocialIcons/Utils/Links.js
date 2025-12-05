/**
 * Get social media links by campaign
 * @param  {string} campaign
 * @return {object}
 */
export default campaign => ({
  facebook: {
    url: `https://www.facebook.com/${campaign}`,
    title: 'Check out our Facebook page',
    id: 'facebook'
  },
  twitter: {
    url: `https://twitter.com/${campaign}`,
    title: 'Check out our Twitter account',
    id: 'twitter'
  },
  x: {
    url: `https://x.com/${campaign}`,
    title: 'Check out our X account',
    id: 'x'
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw',
    title: 'Check out our YouTube channel',
    id: 'youtube'
  },
  instagram: {
    url: `https://www.instagram.com/${campaign}`,
    title: 'Check out our Instagram account',
    id: 'instagram'
  },
  tiktok: {
    url: `https://www.tiktok.com/@${campaign}`,
    title: 'Check out our TikTok account',
    id: 'tiktok'
  }
});
