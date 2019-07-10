import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Pagination from './Pagination';

it('renders correctly in minimalist form', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={5}
      totalPages={5}
      currentPage={3}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst={false}
      showPrevious={false}
      showNext={false}
      showLast={false}
      showMore={false}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly in full size with max pages equal to total pages', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={5}
      totalPages={5}
      currentPage={3}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst
      showPrevious
      showNext
      showLast
      showMore
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly in full size with max pages more than total pages', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={10}
      totalPages={6}
      currentPage={4}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst
      showPrevious
      showNext
      showLast
      showMore
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly in full size with max pages less than total pages', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={6}
      totalPages={10}
      currentPage={2}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst
      showPrevious
      showNext
      showLast
      showMore
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly in full size with max pages less than current page', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={5}
      totalPages={20}
      currentPage={10}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst
      showPrevious
      showNext
      showLast
      showMore
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly in full size with first page selected', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={5}
      totalPages={5}
      currentPage={1}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst
      showPrevious
      showNext
      showLast
      showMore
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with custom labels', () => {
  const tree = renderWithTheme(
    <Pagination
      maxPages={5}
      totalPages={5}
      currentPage={3}
      createURL={value => `example.com/page/${value}`}
      onSelect={value => value}
      showFirst
      showPrevious
      showNext
      showLast
      showMore
      previousLabel="Previous"
      nextLabel="Next"
      firstLabel="First"
      lastLabel="Last"
      moreLabel="More"
      getPageLabel={value => `Page ${value}`}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
