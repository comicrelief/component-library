import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
// DEBUG
import ChildrenIconWhite from '../../../data/test-icons/Children--white.svg';
import ChildrenIconBlack from '../../../data/test-icons/Children--black.svg';

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

  // Just for fun for now
  const fakeTags = ['Fundraising packs', 'Posters', 'Bake', 'Thank you', 'Schools', 'Pay in', 'Certificates', 'Workplace'];

  // Add/remove this filter tag from the state array accordingly:
  const updateFilters = thisTag => {
    // Cache current state:
    let updatedFilters = currentFilters;

    if (updatedFilters.includes(thisTag)) {
      // Grab the index of the tag we want to remove:
      const thisIndex = updatedFilters.indexOf(thisTag);

      // Create a new array from the 2 remaining slices:
      updatedFilters = [
        ...updatedFilters.slice(0, thisIndex),
        ...updatedFilters.slice(thisIndex + 1)
      ];
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
            aria-pressed={showFilters}
            onClick={() => { setShowFilters(!showFilters); }}
            icon={showFilters ? <Cross /> : <Filter />}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </ShowHideFiltersButton>

          <ClearSelectionButton
            color="white"
            disabled={!contentIsFiltered}
            icon={<Undo />}
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
          { fakeTags.map(tag => {
            const isSelected = currentFilters.includes(tag);
            return (
              <FilterButton
                key={tag}
                type="button"
                color="grey_light"
                value={tag}
                $isSelected={isSelected}
                aria-pressed={isSelected}
                iconLeft
                icon={isSelected ? ChildrenIconWhite : ChildrenIconBlack} // DEBUG
                onClick={() => { updateFilters(tag); }}
                // Force a re-render for our flash-reducing icon fade-in animation
                iconKey={`${isSelected}`}
              >
                {tag}
              </FilterButton>
            );
          })}
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
