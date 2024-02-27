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
  node1_Copy: 'NODE1: people in the UK experiencing poverty to access advice and support.',
  node1_Amount: '1,000',
  node1_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node2_Copy: 'NODE2: people in the UK experiencing poverty to access advice and support.',
  node2_Amount: '2,000',
  node2_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node3_Copy: 'NODE3: people in the UK experiencing poverty to access advice and support.',
  node3_Amount: '3,000',
  node3_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node4_Copy: 'NODE4: people in the UK experiencing poverty to access advice and support.',
  node4_Amount: '4,000',
  node4_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node5_Copy: 'NODE5: people in the UK experiencing poverty to access advice and support.',
  node5_Amount: '5,000',
  node5_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node6_Copy: 'NODE6: people in the UK experiencing poverty to access advice and support.',
  node6_Amount: '6,000',
  node6_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node7_Copy: 'NODE7: people in the UK experiencing poverty to access advice and support.',
  node7_Amount: '7,000',
  node7_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node8_Copy: 'NODE8: people in the UK experiencing poverty to access advice and support.',
  node8_Amount: '8,000',
  node8_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node9_Copy: 'NODE9: people in the UK experiencing poverty to access advice and support.',
  node9_Amount: '9,000',
  node9_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node10_Copy: 'NODE10: people in the UK experiencing poverty to access advice and support.',
  node10_Amount: '10,000',
  node10_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node11_Copy: 'NODE11: people in the UK experiencing poverty to access advice and support.',
  node11_Amount: '11,000',
  node11_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node12_Copy: 'NODE12: people in the UK experiencing poverty to access advice and support.750,000',
  node12_Amount: '12,000',
  node12_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  }
};

const carouselItemsIncomplete = {
  __typename: 'ContentfulWhatYourMoneyDoesCarousel',
  contentful_id: '44KsoB8dd03R3murE9UhPi',
  node1_Copy: 'NODE1: people in the UK experiencing poverty to access advice and support.',
  node1_Amount: '1,000',
  node1_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node2_Copy: 'NODE2: people in the UK experiencing poverty to access advice and support.',
  node2_Amount: '2,000',
  node2_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node3_Copy: 'NODE3: people in the UK experiencing poverty to access advice and support.',
  node3_Amount: '3,000',
  node3_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node4_Copy: 'NODE4: people in the UK experiencing poverty to access advice and support.',
  node4_Amount: '4,000',
  node4_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node5_Copy: 'NODE5: people in the UK experiencing poverty to access advice and support.',
  node5_Amount: '5,000',
  node5_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node6_Copy: 'NODE6: people in the UK experiencing poverty to access advice and support.',
  node6_Amount: '6,000',
  node6_Image: null,
  node7_Copy: null,
  node7_Amount: null,
  node7_Image: null,
  node8_Copy: null,
  node8_Amount: null,
  node8_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node9_Copy: 'NODE9: people in the UK experiencing poverty to access advice and support.',
  node9_Amount: null,
  node9_Image: null,
  node10_Copy: null,
  node10_Amount: '10,000',
  node10_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node11_Copy: 'NODE11: people in the UK experiencing poverty to access advice and support.',
  node11_Amount: '11,000',
  node11_Image: null,
  node12_Copy: 'people in the UK experiencing poverty to access advice and support.750,000',
  node12_Amount: null,
  node12_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  }
};

const carouselItemsMinimal = {
  __typename: 'ContentfulWhatYourMoneyDoesCarousel',
  contentful_id: '7zdR84QkZwrTh9NWx2H926',
  node1_Copy: 'NODE1: people in the UK experiencing poverty to access advice and support.',
  node1_Amount: '1,000',
  node1_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node2_Copy: 'NODE2: people in the UK experiencing poverty to access advice and support.',
  node2_Amount: '2,000',
  node2_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  },
  node3_Copy: 'NODE3: people in the UK experiencing poverty to access advice and support.',
  node3_Amount: '3,000',
  node3_Image: {
    file: {
      url: '//images.ctfassets.net/zsfivwzfgl3t/45yv3H0XZsvsySHtutQ8vb/1fb6d1afe4037c7dccde743a747f6b4f/Test-Carousel-Icon.png'
    }
  }
};

export {
  defaultData, mobileImages, testImpactSliderItems,
  carouselItemsComplete, carouselItemsIncomplete, carouselItemsMinimal
};
