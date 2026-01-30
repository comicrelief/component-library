import React, { isValidElement } from 'react';
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
      title: (
        <p>
          {`image ${i}`}
        </p>),
      caption: <p>Group age: 0-10</p>,
      gridBody: (
        <p>
          {/* eslint-disable-next-line */}
          Grid: This is the body for image {i}. It can be used to display additional information about the image.
        </p>
      ),
      lightboxBody: (
        <p>
          {/* eslint-disable-next-line */}
          Lightbox: This is the body for image {i}. It can be used to display additional information about the image.
        </p>
      )
    });
  }
  return nodes;
}

/**
 * extract text from a react node;
 * this is used to get usable strings from a styled text node from the CMS,
 * if we need the plain string for eg alt text
 */
export function extractNodeText(reactNode) {
  let text = '';
  if (typeof reactNode === 'string') {
    text = reactNode;
  } else if (typeof reactNode === 'number') {
    text = reactNode.toString();
  } else if (reactNode instanceof Array) {
    reactNode.forEach(child => {
      text += extractNodeText(child);
    });
  } else if (isValidElement(reactNode)) {
    text += extractNodeText(reactNode.props.children);
  }
  return text;
}
