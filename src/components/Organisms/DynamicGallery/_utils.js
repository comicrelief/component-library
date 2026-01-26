import { defaultData } from '../../../styleguide/data/data';

/**
 * mocking function to create nodes for the dynamic gallery
 */
export default function createMockGalleryNodes(nodeCount = 10) {
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

  const nodes = [];
  for (let i = 0; i < nodeCount; i += 1) {
    nodes.push({
      image: images[Math.floor(Math.random() * images.length)],
      title: `image ${i}`,
      caption: 'Age group: 0-10',
      body: 'This is the body of the image. It can be used to display additional information about the image.',
      centredText: false
    });
  }
  return nodes;
}
