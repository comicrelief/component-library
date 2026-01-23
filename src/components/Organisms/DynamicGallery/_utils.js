import { defaultData } from '../../../styleguide/data/data';

/**
 * mocking function to create cards for the dynamic gallery
 */
export default function createCards(cardCount = 10) {
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
