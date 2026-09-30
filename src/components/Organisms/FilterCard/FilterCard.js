import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
import preprocessNodes from './_utils/_utils';
// DEBUG
import ChildrenIconWhite from '../../../data/test-icons/Children--white.svg';
import ChildrenIconBlack from '../../../data/test-icons/Children--black.svg';

import {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  Results,
  ShowHideFiltersButton,
  ClearSelectionButton,
  FilterControlsWrapper,
  FilterButtonsWrapper,
  FilterButton
} from './FilterCard.style';

const FilterCard = ({ data }) => {
  const {
    paddingAbove = '0rem',
    paddingBelow = '1rem',
    pageBackgroundColour = 'transparent',
    title,
    body,
    filterCardNodes
  } = data;

  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [showFilters, setShowFilters] = useState(true); // DEBUG
  const [currentFilters, setCurrentFilters] = useState([]);
  const [contentIsFiltered, setContentIsFiltered] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

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

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);

      const { processedNodes, processedTags } = preprocessNodes(filterCardNodes);
      console.log('processedNodes', processedNodes);
      console.log('processedTags', processedTags);

      if (processedNodes && processedTags) {
        setIsReady(true);
      }
    }
  }, [isLoading, filterCardNodes]);

  return (
    <Container
      $paddingAbove={paddingAbove}
      $paddingBelow={paddingBelow}
      $pageBackgroundColour={pageBackgroundColour}
    >
      {isReady && (
        <FilterSection>

          <Title tag="h1">
            {title}
          </Title>

          {/* TODO: suss this properly */}
          <BodyCopy>
            {body.raw}
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

            <Results tag="span">
              {totalResults}
              {' '}
              {totalResults === 1 ? 'result' : 'results'}
            </Results>

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
      )}

    </Container>
  );
};

FilterCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paddingAbove: PropTypes.string,
    paddingBelow: PropTypes.string,
    pageBackgroundColour: PropTypes.string,
    loadingBehaviour: PropTypes.string,
    body: PropTypes.shape({
      raw: PropTypes.node
    }),
    firstFilterCardNodeAsHero: PropTypes.bool,
    filterCardNodes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        filterTags: PropTypes.arrayOf(
          PropTypes.shape({
            tag: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            filterIconSelected: PropTypes.shape({
              file: PropTypes.shape({
                url: PropTypes.string.isRequired
              })
            }),
            filterIconUnselected: PropTypes.shape({
              file: PropTypes.shape({
                url: PropTypes.string.isRequired
              })
            })
          })
        )
      })
    ).isRequired
  }).isRequired
};

export default FilterCard;
