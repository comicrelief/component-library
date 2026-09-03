import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  ShowHideFiltersBtn
} from './FilterCard.style';

const FilterCard = ({
  paddingAbove = '0rem',
  paddingBelow = '1rem',
  pageBackgroundColour = 'transparent',
  title,
  body
}) => {
  console.log('poo');

  const [showFilters, setShowFilters] = useState(true);

  const showHideFilterText = showFilters ? 'Show filters' : 'Hide filters';

  return (
    <Container
      $paddingAbove={paddingAbove}
      $paddingBelow={paddingBelow}
      $pageBackgroundColour={pageBackgroundColour}
    >

      <FilterSection>

        <Title tag="h1">
          {title}
        </Title>

        <BodyCopy>
          {body}
        </BodyCopy>

        <ShowHideFiltersBtn color="grey_medium">
          {showHideFilterText}
        </ShowHideFiltersBtn>
      </FilterSection>

    </Container>
  );
};

FilterCard.propTypes = {
  paddingAbove: PropTypes.string,
  paddingBelow: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.node
};

export default FilterCard;
