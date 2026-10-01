import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
import Text from '../../Atoms/Text/Text';
import preprocessNodes from './_utils/_utils';

import {
  Container,
  OuterWrapper,
  Title,
  BodyCopy,
  ResultsWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  DynamicContentWrapper,
  ControlsWrapper,
  FilterButtonsWrapper,
  FilterButton
} from './FilterCard.style';

const FilterCard = ({ data }) => {
  const {
    title,
    body,
    filterCardNodes,
    paddingAbove = '0rem',
    paddingBelow = '1rem',
    pageBackgroundColour = 'transparent'
  } = data;

  const [isLoading, setIsLoading] = useState(true);
  const [processedNodes, setProcessedNodes] = useState(false);
  const [processedTags, setProcessedTags] = useState(false);
  const [showFilters, setShowFilters] = useState(true); // DEBUG
  const [currentFilters, setCurrentFilters] = useState([]);
  const [contentIsFiltered, setContentIsFiltered] = useState(false);
  const totalResults = useRef(0);

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
      // Use our helper function to best transform the Contentful output for our use cases:
      const { outputNodes, outputTags } = preprocessNodes(filterCardNodes);

      // Only go ahead once we've got the goods:
      if (outputNodes && outputTags) {
        // Pause for a second before going ahead, to prevent nasty flashes:
        setTimeout(() => {
          setProcessedNodes(outputNodes);
          setProcessedTags(outputTags);
          setIsLoading(false);
        }, 1000);
      }
    }
  }, [isLoading, filterCardNodes]);

  const renderCards = () => {
    // Reset counter for every re-render:
    totalResults.current = 0;

    return processedNodes.map(thisNode => {
      // Determine whether we display this content or not:
      const renderNode = currentFilters.length === 0
          || currentFilters.some(thisTag => thisNode.tags.includes(thisTag));

      if (renderNode) {
        // Increment the counter for every node we've got a tag match for:
        totalResults.current += 1;

        return (
          <div style={{ marginTop: '1rem' }}>
            <p>
              TITLE:
              {thisNode.title}
              <br />
              TAGS:
              {thisNode.tags[0]}
              {' '}
              /
              {' '}
              {thisNode.tags[1]}
              {' '}
              /
              {' '}
              {thisNode.tags[2]}
              {' '}
              /
              {' '}
              {thisNode.tags[3]}
            </p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <Container
      $paddingAbove={paddingAbove}
      $paddingBelow={paddingBelow}
      $pageBackgroundColour={pageBackgroundColour}
    >
      <OuterWrapper>

        <Title tag="h1">
          {title}
        </Title>

        {/* TODO: suss this properly */}
        <BodyCopy>
          {body.raw}
        </BodyCopy>

        {(processedTags && processedNodes) ? (
          <DynamicContentWrapper>
            <ControlsWrapper>
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

              <ResultsWrapper>
                <Text tag="span">
                  {totalResults.current}
                  {' '}
                  {totalResults.current === 1 ? 'result' : 'results'}
                </Text>
              </ResultsWrapper>

            </ControlsWrapper>

            <FilterButtonsWrapper $show={showFilters}>
              {Object.keys(processedTags).map(key => {
                const { tag, selectedIcon, unselectedIcon } = processedTags[key];
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
                    icon={isSelected ? selectedIcon : unselectedIcon}
                    onClick={() => { updateFilters(tag); }}
                    // Force a re-render for our flash-reducing icon fade-in animation
                    iconKey={`${isSelected}`}
                  >
                    {tag}
                  </FilterButton>
                );
              })}
            </FilterButtonsWrapper>

            {/* Render Cards content */}
            <div style={{ marginTop: '1rem' }}>

              {/* Reset counter for each render */}
              {renderCards()}

            </div>

          </DynamicContentWrapper>
        )
          : <PulseLoader color="black" style={{ textAlign: 'center', display: 'block' }} />
        }
      </OuterWrapper>
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
        label: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        ctaText: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        // Image stuff as per HeroBanner
        imageLow: PropTypes.string.isRequired,
        imageSet: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageAltText: PropTypes.string.isRequired,
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
