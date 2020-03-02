export default {
  title: 'Footer',
  menuGroups: [
    {
      title: 'Hear from us',
      id: 'f7dc5eef-f4eb-5405-8a35-08808b55cb33',
      links: [
        {
          title: 'Get the newsletter',
          path: 'https://www.comicrelief.com/#',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'How we contact you',
          path: 'https://www.comicrelief.com/update-your-preferences',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'Get in touch',
      id: '9f3980f3-d02b-52e9-ac41-933a778c040a',
      links: [
        {
          title: 'Contact us',
          path: 'contact-us',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Your Gift Aid',
          path: 'https://giftaid.comicrelief.com/update',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'FAQs',
          path: 'https://www.comicrelief.com/frequently-asked-questions',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Red Nose Day 2019 FAQs',
          path:
            'https://www.comicrelief.com/red-nose-days-frequently-asked-questions',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'About us',
      id: 'eaec5191-bbb3-5e8d-b966-c53fff34998b',
      links: [
        {
          title: 'Mission',
          path: 'https://www.comicrelief.com/about-comic-relief',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Our history',
          path: 'https://www.comicrelief.com/about-comic-relief/history',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Finances',
          path: 'https://www.comicrelief.com/about-comic-relief/finances',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Partners',
          path: 'https://www.comicrelief.com/working-with-us',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Meet the team',
          path: 'https://www.comicrelief.com/about-comic-relief/meet-the-team',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Sport Relief',
          path: 'https://www.sportrelief.com/',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'Careers',
      id: '4a5b055f-1f7e-5f4b-827d-768032fd373c',
      links: [
        {
          title: 'Working at Comic Relief',
          path: 'https://www.comicrelief.com/careers',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Open roles',
          path: 'https://app.beapplied.com/org/comic-relief',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'News',
      id: '4a5b055f-1f7e-5f4b-827d-768032fd373d',
      links: [
        {
          title: 'News',
          path: 'https://www.comicrelief.com/news',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        },
        {
          title: 'Press area',
          path: 'https://www.comicrelief.com/press-releases',
          internal: {
            type: 'ContentfulPageLandingPage'
          }
        }
      ]
    },
    {
      title: 'Legal',
      id: 'eaec5191-bbb3-5e8d-b966-c53fff34998a',
      links: [
        {
          title: 'Link comp with both URL and Ref',
          url: 'https://www.google.com',
          reference: {
            path: 'homepage'
          },
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Link comp with only Ref',
          url: null,
          reference: {
            path: 'this-is-a-test'
          },
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Link comp with only URL',
          url: 'https://www.yahoo.com',
          reference: null,
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Test whitelisted external link',
          url: 'https://www.sportrelief.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Test non-whitelisted external link',
          url: 'https://bing.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        },
        {
          title: 'Test non-whitelisted external link',
          url: 'https://bing.com',
          internal: {
            type: 'ContentfulComponentLink'
          }
        }
      ]
    }
  ]
};
