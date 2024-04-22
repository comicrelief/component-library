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
          path: 'https://www.comicrelief.com/What-we-do/our-legacy',
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
          title: 'Schools & youth (MORE NAV)',
          path: 'https://www.comicrelief.com/rednoseday/schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Primary schools (MORE NAV)',
          path:
            'https://www.comicrelief.com/rednoseday/schools/primary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Secondary schools (MORE NAV)',
          path:
            'https://www.comicrelief.com/rednoseday/schools/secondary-schools',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Nurseries (MORE NAV)',
          path: 'https://www.comicrelief.com/rednoseday/schools/nurseries',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Youth groups (MORE NAV)',
          path: 'https://www.comicrelief.com/rednoseday/youth',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Free downloads (MORE NAV)',
          path: 'https://www.comicrelief.com/rednoseday/schools/free-downloads',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'External Links (menu group)',
      id: 'external-menu-group',
      links: [
        {
          title: 'AllowListed ext (MORE NAV)',
          url: 'https://www.sportrelief.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Non-allowListed ext (MORE NAV)',
          url: 'https://bing.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Link comp: URL and Ref (MORE NAV)',
          url: 'https://www.google.com',
          reference: {
            path: 'test-ref-path-1'
          },
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Link comp: only Ref (MORE NAV)',
          url: null,
          reference: {
            path: 'test-ref-path-2'
          },
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Link comp: only URL (MORE NAV)',
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
