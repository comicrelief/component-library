import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SingleMessage from './SingleMessage';
import data from '../../../styleguide/data/data';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

it('renders Single Message with Image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={data.images}
      image={data.image}
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
      imageSet={data.images}
      image={data.image}
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

it('renders Single Message with 100% vertical height image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageLow={data.imageLow}
      imageSet={data.images}
      image={data.image}
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
      imageLow={data.imageLow}
      imageSet={data.images}
      image={data.image}
      imageAltText=""
      imageSet2={data.images}
      image2={data.image}
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

it('renders Single Message with Image and label correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={data.images}
      image={data.image}
      imageAltText=""
      copyFirst={false}
      label="test label"
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

it('renders Single Message with label but no Image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      copyFirst={false}
      label="test label"
    >
      <Text tag="p" color="white" size="xxl">
        “The creativity that goes into helping people have a better life is
        extraordinary.”
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with full width and label correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageSet={data.images}
      image={data.image}
      imageAltText=""
      copyFirst={false}
      fullImage
      label="test label"
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

it('renders Single Message with 100% vertical height image and label correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      imageLow={data.imageLow}
      imageSet={data.images}
      image={data.image}
      imageAltText=""
      vhFull
      label="test label"
    >
      <Text tag="p" color="white" size="xxl">
        “The creativity that goes into helping people have a better life is
        extraordinary.”
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Single Message with double image and label correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="yellow"
      imageLow={data.imageLow}
      imageSet={data.images}
      image={data.image}
      imageAltText=""
      imageSet2={data.images}
      image2={data.image}
      imageAltText2=""
      label="test label"
    >
      <Text tag="p" color="black" size="xxl">
        “The creativity that goes into helping people have a better life is
        extraordinary.”
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
