import { defaultData } from '../../../styleguide/data/data';

export function createCards(cardCount = 10) {
  const images = [
    defaultData.pictures.small,
    defaultData.pictures.medium,
    defaultData.pictures.large,
    defaultData.promoImage,
    defaultData.heroBannerImage,
    defaultData.image,
    'tall.jpg',
    'wide.jpg'
  ];

  const cards = [];
  for (let i = 0; i < cardCount; i += 1) {
    cards.push({
      image: images[Math.floor(Math.random() * images.length)],
      title: `image ${i}`,
      ageGroup: '0-10'
    });
  }
  return cards;
}

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
