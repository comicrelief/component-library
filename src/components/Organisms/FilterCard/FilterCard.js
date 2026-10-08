import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
import Text from '../../Atoms/Text/Text';
import FilterCardNodes from './FilterCardNodes';
import { preprocessNodes, showNodeLimit } from './_utils/_utils';
import Button from '../../Atoms/Button/Button';

import {
  Container,
  OuterWrapper,
  HeaderWrapper,
  Title,
  Body,
  ControlsWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  ResultsWrapper,
  FilterButtonsWrapper,
  FilterButton,
  NodeWrapper,
  ShowMoreButtonWrapper
} from './FilterCard.style';

const FilterCard = ({ data }) => {
  const {
    title,
    body,
    filterCardNodes,
    firstFilterCardNodeAsHero,
    loadingBehaviour = null,
    paddingAbove = '0rem',
    paddingBelow = '1rem',
    pageBackgroundColour = 'transparent'
  } = data;

  // Load state and content:
  const [isLoading, setIsLoading] = useState(true);
  const [processedNodes, setProcessedNodes] = useState(false);
  const [processedTags, setProcessedTags] = useState(false);

  // Determine our display behaviour based on the CMS option
  const [nodeDisplayLimit, setNodeDisplayLimit] = useState(showNodeLimit(loadingBehaviour));

  // Keep track of user interactions:
  const [showFilters, setShowFilters] = useState(true);
  const [currentFilters, setCurrentFilters] = useState([]);
  const totalResults = useRef(0);

  const updateTotalResult = increment => {
    if (!increment) {
      totalResults.current = 0;
    } else {
      totalResults.current += increment;
    }
  };

  // Add/remove this filter tag from the state array accordingly:
  // TODO: extrapolate into own file?
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

  const currentTotal = `${totalResults.current} ${totalResults.current === 1 ? ' result' : 'results'}`;

  return (
    <Container
      $paddingAbove={paddingAbove}
      $paddingBelow={paddingBelow}
      $pageBackgroundColour={pageBackgroundColour}
    >
      <OuterWrapper>
        <HeaderWrapper>

          <Title tag="h1">
            {title}
          </Title>

          <Body>
            {body.raw}
          </Body>

          {/* Only render the controls once the content's been fully processed: */}
          {(processedTags && processedNodes) ? (
            <>
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
                  icon={<Undo />}
                  $show={showFilters}
                  disabled={currentFilters.length === 0}
                  onClick={() => {
                    setCurrentFilters([]);
                  }}

                >
                  Clear selection
                </ClearSelectionButton>

                <ResultsWrapper>
                  <Text tag="span">
                    { currentTotal }
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
                      iconLeft
                      $isSelected={isSelected}
                      aria-pressed={isSelected}
                      icon={isSelected ? selectedIcon : unselectedIcon}
                      onClick={() => { updateFilters(tag); }}
                      // Forces a re-render to trigger our flash-reducing, icon fade in:
                      iconKey={`${isSelected}`}
                    >
                      {tag}
                    </FilterButton>
                  );
                })}
              </FilterButtonsWrapper>
            </>
          )
            // Otherwise, shown the nifty loader:
            : <PulseLoader color="black" style={{ textAlign: 'center', display: 'block' }} />
          }
        </HeaderWrapper>

        {/* And render the content once it's fully processed */}
        {(processedTags && processedNodes) && (
          <NodeWrapper>
            <FilterCardNodes
              updateTotalResult={updateTotalResult}
              processedNodes={processedNodes}
              firstFilterCardNodeAsHero={firstFilterCardNodeAsHero}
              nodeDisplayLimit={nodeDisplayLimit}
              currentFilters={currentFilters}
            />
          </NodeWrapper>
        )}

        {/* Only show Loader when approved to do so, and we've still got more nodes to display */}
        {(nodeDisplayLimit > 0 && nodeDisplayLimit < processedNodes.length) && (
          <ShowMoreButtonWrapper>
            <Button
            // TODO: check incremement amount
              onClick={() => setNodeDisplayLimit(nodeDisplayLimit + 1)}
            >
              Show more
            </Button>
          </ShowMoreButtonWrapper>
        )}

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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        ctaText: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string,
        // GatsbyImageData deconstruction to happen within CRcom repo to feed these:
        image: PropTypes.string.isRequired,
        imageLow: PropTypes.string.isRequired,
        imageSet: PropTypes.string.isRequired,
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
