export default {
  menuDescription: 'I am the navigation',
  menuGroup: [
    {
      id: 'Parent Item Title 1',
      title: 'Parent Item Title 1',
      url: '/parent1',
      links: [
        {
          title: 'Child Item Title 1-1',
          url: '/child-item-1-1',
          class: 'someClass'
        },
        {
          title: 'Child Item Title 1-2',
          url: '/child-item-1-2',
          class: 'someClass'
        },
        {
          title: 'Child Item Title 1-3',
          url: '/child-item-1-3',
          class: 'someClass'
        }
      ]
    },
    {
      id: 'Parent Item Title 2',
      title: 'Parent Item Title 2',
      url: '/parent2',
      links: [
        {
          title: 'Child Item Title 2-1',
          url: '/child-item-2-1',
          class: 'someClass'
        },
        {
          title: 'Child Item Title 2-2',
          url: '/child-item-2-2',
          class: 'someClass'
        },
        {
          title: 'Child Item Title 2-3',
          url: '/child-item-2-3',
          class: 'someClass'
        }
      ]
    },
    {
      id: 'Parent Ityyem Title 3',
      title: 'Parent Item Title 1',
      url: '/parent1',
      links: []
    }
  ]
};
