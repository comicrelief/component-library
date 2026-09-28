import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '../../../theme/crTheme/buttonTypes';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';

import {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  ShowHideFiltersButton,
  ClearSelectionButton,
  UpperButtonWrapper,
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
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [contentIsFiltered, setContentIsFiltered] = useState(false);
  const showHideFilterText = showFilters ? 'Hide Filters' : 'Show Filters';
  const showHideFilterColour = showFilters ? 'black' : 'grey_medium';

  // TODO: feels needless fussy, maybe just do with styles?
  const showHideFilterButtonType = showFilters ? buttonTypes.SECONDARY : buttonTypes.PRIMARY;
  const currentIcon = showFilters ? <Cross /> : <Filter />;

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
    setContentIsFiltered(updatedFilters.length > 0);
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

        {/* Come up with a different name lol */}
        <UpperButtonWrapper>
          <ShowHideFiltersButton
            buttonType={showHideFilterButtonType}
            color={showHideFilterColour}
            $showFilters={showFilters}
            $borderColour={showHideFilterColour}
            onClick={() => { setShowFilters(!showFilters); }}
            aria-pressed={showFilters}
            icon={currentIcon}
          >
            {showHideFilterText}
          </ShowHideFiltersButton>

          <ClearSelectionButton
            color="white"
            disabled={!contentIsFiltered}
            onClick={() => {
              setCurrentFilters([]);
              setContentIsFiltered(false);
            }}
          >
            Clear selection
          </ClearSelectionButton>
        </UpperButtonWrapper>

        <FiltersWrapper $show={showFilters}>
          { fakeTags.map(tag => (
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
          ))}
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
