import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
// DEBUG
import ChildrenIcon from '../../../data/test-icons/Children.svg';

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
    // Cache current state:
    let updatedFilters = currentFilters;

    if (updatedFilters.includes(thisTag)) {
      // Grab the index of the tag we want to remove:
      const thisIndex = updatedFilters.indexOf(thisTag);

      // Create a new array of the 2 sliced-off halves:
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

  // console.log('currentFilters', currentFilters);

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
          { fakeTags.map(tag => {
            const isSelected = currentFilters.includes(tag);
            return (
              <FilterButton
                type="button"
                color="grey_light"
                value={tag}
                key={tag}
                $isSelected={isSelected}
                aria-pressed={isSelected}
                onClick={() => { updateFilters(tag); }}
                icon={ChildrenIcon}
                iconLeft
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
