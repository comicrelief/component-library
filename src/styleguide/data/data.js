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

const focalPointImages = {
  imageLow:
    'http://images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=100&h=50&q=100',
  image:
    'https://images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg',
  images:
    '//https://images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/54DHIEgtwbr9TDkf70lToB/ffe8d6a8e9bbc224343f475a5c55c832/-CROP-Promo-Des_2000x945-_Kate.jpg?w=1440&h=1080&q=50 1440w'
};

export { defaultData, mobileImages, focalPointImages };
