import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SingleMessage from './SingleMessage';
import { defaultData }  from '../../../styleguide/data/data';import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

it('renders Single Message with Image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={defaultData.images}
      image={defaultData.image}
      imageAltText=""
      copyFirst={false}
    >
      <Text tag="h1" color="white" size="xxl">
        title
      </Text>
      <Text tag="p" color="white">
        description
      </Text>
      <Link href="/" type="button" color="white">
        CTA
      </Link>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with no Image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage backgroundColor="purple" copyFirst={false}>
      <Text tag="p" color="white" size="xxl">
        “The creativity that goes into helping people have a better life is
        extraordinary.”
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with full width correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={defaultData.images}
      image={defaultData.image}
      imageAltText=""
      copyFirst={false}
      fullImage
    >
      <Text tag="h1" color="white" size="xxl">
        title
      </Text>
      <Text tag="p" color="white">
        description
      </Text>
      <Link href="/" type="button" color="white">
        CTA
      </Link>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with full width image and no text correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={defaultData.images}
      image={defaultData.image}
      imageAltText=""
      copyFirst={false}
      fullImage
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with 100% vertical height image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageLow={defaultData.imageLow}
      imageSet={defaultData.images}
      image={defaultData.image}
      imageAltText=""
      vhFull
    >
      <Text tag="p" color="white" size="xxl">
        “The creativity that goes into helping people have a better life is
        extraordinary.”
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with double image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="yellow"
      imageLow={defaultData.imageLow}
      imageSet={defaultData.images}
      image={defaultData.image}
      imageAltText=""
      imageSet2={defaultData.images}
      image2={defaultData.image}
      imageAltText2=""
    >
      <Text tag="p" color="black" size="xxl">
        “The creativity that goes into helping people have a better life is
        extraordinary.”
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
