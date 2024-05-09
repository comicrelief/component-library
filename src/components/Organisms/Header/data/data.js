export default {
  title: 'Header',
  menuGroups: [
    {
      title: 'Fundraising - menu group',
      id: 'fundraising-menu-group',
      links: [
        {
          title: 'Fundraising',
          path: 'https://www.comicrelief.com/fundraising/pay-in-your-money',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Red Nose Day',
          path: 'https://www.comicrelief.com/rednoseday',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Regular donations',
          path: 'https://www.comicrelief.com/join',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Squads',
          path: 'https://www.comicrelief.com/squads',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'The Noseys',
          path: 'https://www.comicrelief.com/rednoseday/fundraising/the-noseys',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Free downloads',
          path:
            'https://www.comicrelief.com/rednoseday/fundraising/free-downloads',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'Single Page - menu group',
      id: 'single-page-menu-group',
      links: [
        {
          title: 'Single menu link',
          path: 'https://www.comicrelief.com/rednoseday/schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'What your money does - menu group',
      id: 'wymd-menu-group',
      links: [
        {
          title: 'What your money does',
          path: 'https://www.comicrelief.com/what-your-money-does',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Our legacy',
          path: 'https://www.comicrelief.com/our-legacy',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'Schools & youth - menu group',
      id: 'schools-menu-group',
      links: [
        {
          title: 'Item one',
          path:
            'https://www.comicrelief.com/rednoseday/schools/primary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item two',
          path:
            'https://www.comicrelief.com/rednoseday/schools/secondary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item three',
          path:
            'https://www.comicrelief.com/rednoseday/schools/secondary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item four',
          path:
            'https://www.comicrelief.com/rednoseday/schools/secondary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item five',
          path:
            'https://www.comicrelief.com/rednoseday/schools/secondary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item six',
          path: 'https://www.comicrelief.com/rednoseday/schools/nurseries',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item seven',
          path: 'https://www.comicrelief.com/rednoseday/youth',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Item eight',
          path: 'https://www.comicrelief.com/rednoseday/schools/free-downloads',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'More Nav single page group (single link)',
      id: 'single-more-menu-group',
      links: [
        {
          title: 'Partners (single link)',
          path: 'https://www.comicrelief.com/working-with-us/',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'More Nav double link (single link)',
      id: 'double-more-menu-group',
      links: [
        {
          title: 'Homepage',
          url: 'https://www.comicrelief.com/working-with-us/',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Something else',
          url: 'https://www.comicrelief.com/404/',
          internal: {
            type: 'ContentfulComponentLink'
          }
        }
      ]
    },
    {
      title: 'External Links (menu group)',
      id: 'external-menu-group',
      links: [
        {
          title: 'Multi-item',
          url: 'https://www.sportrelief.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'item2',
          url: 'https://bing.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'item3',
          url: 'https://www.google.com',
          reference: {
            path: 'test-ref-path-1'
          },
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'item4',
          url: null,
          reference: {
            path: 'test-ref-path-2'
          },
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'item5',
          url: 'test-url',
          reference: null,
          internal: {
            type: 'ContentfulComponentLink'
          }
        }
      ]
    }
  ]
};
