const defaultData = {
  title: 'What your money does',
  text:
    'When you donate to Comic Relief or Sport Relief, you’re supporting vulnerable people and communities in the UK and internationally.',
  pictures: {
    small: 'picture-1.jpg',
    medium: 'picture-2.jpg',
    large: 'picture-3.jpg'
  },
  ctaText: 'Find out how',
  promoImage: '../promo.jpg',
  imageLow:
    'http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=100&h=50&q=100',
  image:
    'http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg',
  images:
    '//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w'
};

const mobileImages = {
  imageLow:
    'http://images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=100&h=50&q=100',
  image:
    'https://images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg',
  images:
    '//https://images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=1440&h=1080&q=50 1440w'
};

const testImpactSliderItems = [
  {
    poundsPerItem: 1,
    description: 'Fresh water pumps',
    imageURL: 'https://images.ctfassets.net/zsfivwzfgl3t/28sKInxW6EsmvOTahWdm8E/3fb8e1488f95bac6a3087b133ae7ce9f/ImpactSliderMoneybuy1.png'
  },
  {
    poundsPerItem: 10,
    description: 'Food Sachets',
    imageURL: 'https://images.ctfassets.net/zsfivwzfgl3t/lzxmQMII5PElb4G40vFfk/988486dedd9e45e7cf78cda6f6d0aeaf/ImpactSliderMoneybuy2.png'
  },
  {
    poundsPerItem: 15,
    description: 'Midwife birthing kits',
    imageURL: 'https://images.ctfassets.net/zsfivwzfgl3t/53ZeFXhjdpGpAvRRL4v2kI/d70d1cbf3b46bc28703fabb4ec60fef6/ImpactSliderMoneybuy3.png'
  },
  {
    poundsPerItem: 20,
    description: 'School in a bag kit',
    imageURL: 'https://images.ctfassets.net/zsfivwzfgl3t/PPIJtSArW4wYy1CXvRGk9/c9de72766db42a0e158889a140c90445/ImpactSliderMoneybuy4.png'
  }
];

const carouselItemsComplete = {
  __typename: 'ContentfulWhatYourMoneyDoesCarousel',
  contentful_id: '7zdR84QkZwrTh9NWx2H926',
  mobileHeight: 425,
  tabletHeight: 450,
  desktopHeight: 475,
  headerCopy: 'Over the past two years, we’ve supported',
  peopleHelpedText: '11.7 million people',
  autoPlay: false,
  node1Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node1Amount: '1,000',
  node1Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node2Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node2Amount: '750,000',
  node2Image: {
    file: {
      url: 'https://images.ctfassets.net/zsfivwzfgl3t/5uKnps3prnG6GpTM1EPZdC/8d7264465846de31e3bbb5b6b2c36c8f/014-helping_hand.png'
    }
  },
  node3Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node3Amount: '3,000',
  node3Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node4Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node4Amount: '4,000',
  node4Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node5Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node5Amount: '5,000',
  node5Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node6Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node6Amount: '6,000',
  node6Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node7Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node7Amount: '7,000',
  node7Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node8Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node8Amount: '8,000',
  node8Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node9Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node9Amount: '9,000',
  node9Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  }
};

const carouselItemsIncomplete = {
  __typename: 'ContentfulWhatYourMoneyDoesCarousel',
  contentful_id: '7zdR84QkZwrTh9NWx2H9262',
  mobileHeight: 450,
  tabletHeight: 500,
  desktopHeight: 475,
  headerCopy: 'Over the past two years, we’ve supported',
  peopleHelpedText: '11.7 million people',
  autoPlay: false,
  node1Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node1Amount: '1,000',
  node1Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node2Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node2Amount: '750,000',
  node2Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node3Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node3Amount: '3,000',
  node3Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node4Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node4Amount: '4,000',
  node4Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node5Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node5Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node6Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node6Amount: '6,000',
  node6Image: null,
  node7Copy: null,
  node7Amount: null,
  node7Image: null,
  node8Copy: null,
  node8Amount: null,
  node8Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node9_Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node9_Amount: null,
  node9_Image: null
};

const carouselItemsMinimal = {
  __typename: 'ContentfulWhatYourMoneyDoesCarousel',
  contentful_id: '7zdR84QkZwrTh9NWx2H9263',
  mobileHeight: 450,
  tabletHeight: 500,
  desktopHeight: 475,
  headerCopy: 'Over the past two years, we’ve supported',
  peopleHelpedText: '11.7 million people',
  autoPlay: false,
  node1Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node1Amount: '1,000',
  node1Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node2Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node2Amount: '750,000',
  node2Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node3Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node3Amount: '3,000',
  node3Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node4Copy: 'children and young people in the UK and around the world, including with safe homes, good nutrition and access to quality healthcare and education.',
  node4Amount: '4,000',
  node4Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  }
};

const RichtextCarouselItems = {
  // __typename: 'ContentfulRichtextCarousel',
  contentful_id: 'nqIEHjiYE8Yd2A2a5cI3O',
  // Ugly here, but to be provided by Richtextrender function in-situ:
  headerCopy: `<p style="text-align: center;">Send Billy a message of support as he takes on</p>
  <h2 style="text-align: center;">THE IRONMAN CHALLENGE</h2>`,
  nodes: [
    { copy: 'Some other longside but not really all that long copy, who knows, it could be this long or LESS.' },
    { copy: '140 character count limit imposed in messages to fix the design height of each container and restrict anomalies. This is based on Twitters character limit for tweets.' },
    { copy: 'Some other longside but not really all that long copy, who knows, it could be this long or LESS' },
    { copy: '140 character count limit imposed in messages to fix the design height of each container and restrict anomalies. This is based on Twitters character limit for tweets. ABIGLONGLINETOFORCEONTOANEWONE' }
  ],
  autoPlay: true
};

export {
  defaultData, mobileImages, testImpactSliderItems,
  carouselItemsComplete, carouselItemsIncomplete, carouselItemsMinimal, RichtextCarouselItems
};
