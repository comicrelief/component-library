import React, { useState } from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '../../../theme/crTheme/buttonTypes';

import {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  ShowHideFiltersBtn,
  FiltersWrapper,
  FilterButton
} from './FilterCard.style';

const FilterCard = ({
  paddingAbove = '0rem',
  paddingBelow = '1rem',
  pageBackgroundColour = 'transparent',
  title,
  body
}) => {
  const [showFilters, setShowFilters] = useState(true);
  const [currentFilters, setCurrentFilters] = useState([]);

  const showHideFilterText = showFilters ? 'Show filters' : 'Hide filters';
  const showHideFilterColour = showFilters ? 'black' : 'grey_medium';
  const showHideFilterButtonType = showFilters ? buttonTypes.SECONDARY : buttonTypes.PRIMARY;

  // Just for fun for now
  const fakeTags = ['Fundraising packs', 'Posters', 'Bake', 'Thank you', 'Schools', 'Pay in', 'Certificates', 'Workplace'];

  // Add/remove this filter tag from the state array accordingly:
  const updateFilters = thisTag => {
    const updatedFilters = currentFilters;

    if (updatedFilters.indexOf(thisTag) === -1) {
      updatedFilters.push(thisTag);
    } else {
      updatedFilters.pop(thisTag);
    }

    setCurrentFilters(updatedFilters);
  };

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

        <FiltersWrapper>
          { fakeTags.map(tag => {
            console.log('currentFilters.indexOf(tag)', currentFilters.indexOf(tag));

            return (
              <FilterButton
                type="button"
              // buttonType={showHideFilterButtonType}
              // color={showHideFilterColour}
              // $borderColour={showHideFilterColour}
                value={tag}
                onClick={() => { updateFilters(tag); }}
              >
                {tag}
              </FilterButton>
            );
          })}
        </FiltersWrapper>
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
