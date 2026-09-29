import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';

import {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  ShowHideFiltersButton,
  ClearSelectionButton,
  FilterControlsWrapper,
  FilterButtonsWrapper,
  FilterButton
} from './FilterCard.style';

const FilterCard = ({
  paddingAbove = '0rem',
  paddingBelow = '1rem',
  pageBackgroundColour = 'transparent',
  title,
  body
}) => {
  const [showFilters, setShowFilters] = useState(true); // DEBUG
  const [currentFilters, setCurrentFilters] = useState([]);
  const [contentIsFiltered, setContentIsFiltered] = useState(false);
  const showHideFilterText = showFilters ? 'Hide Filters' : 'Show Filters';
  const currentFilterIcon = showFilters ? <Cross /> : <Filter />;
  const undoIcon = <Undo />;

  // Just for fun for now
  const fakeTags = ['Fundraising packs', 'Posters', 'Bake', 'Thank you', 'Schools', 'Pay in', 'Certificates', 'Workplace'];

  // Add/remove this filter tag from the state array accordingly:
  const updateFilters = thisTag => {
    const updatedFilters = currentFilters;
    // console.log('updatedFilters.indexOf(thisTag)', updatedFilters.indexOf(thisTag));

    if (updatedFilters.includes(thisTag)) {
      updatedFilters.pop(thisTag);
    } else {
      updatedFilters.push(thisTag);
    }
    // Spread as 'new' array to trigger re-render:
    setCurrentFilters([...updatedFilters]);
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

        <FilterControlsWrapper>
          <ShowHideFiltersButton
            color="white"
            $showFilters={showFilters}
            onClick={() => { setShowFilters(!showFilters); }}
            aria-pressed={showFilters}
            icon={currentFilterIcon}
          >
            {showHideFilterText}
          </ShowHideFiltersButton>

          <ClearSelectionButton
            color="white"
            disabled={!contentIsFiltered}
            icon={undoIcon}
            $show={showFilters}
            onClick={() => {
              setCurrentFilters([]);
              setContentIsFiltered(false);
            }}
          >
            Clear selection
          </ClearSelectionButton>
        </FilterControlsWrapper>

        <FilterButtonsWrapper $show={showFilters}>
          { fakeTags.map(tag => (
            <FilterButton
              type="button"
              color="grey_light"
              value={tag}
              key={tag}
              $isActive={currentFilters.includes(tag)}
              onClick={() => { updateFilters(tag); }}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterButtonsWrapper>
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
