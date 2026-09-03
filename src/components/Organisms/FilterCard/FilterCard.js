import React, { useState } from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '../../../theme/crTheme/buttonTypes';

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
  const [showFilters, setShowFilters] = useState(true);

  const showHideFilterText = showFilters ? 'Show filters' : 'Hide filters';
  const showHideFilterColour = showFilters ? 'black' : 'grey_medium';
  const showHideFilterButtonType = showFilters ? buttonTypes.SECONDARY : buttonTypes.PRIMARY;

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

        <ShowHideFiltersBtn
          buttonType={showHideFilterButtonType}
          color={showHideFilterColour}
          $showFilters={showFilters}
          $borderColour={showHideFilterColour}
          onClick={() => { setShowFilters(!showFilters); }}
        >
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
