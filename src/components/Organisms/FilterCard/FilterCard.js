import React, {
  useState, useEffect, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
import Text from '../../Atoms/Text/Text';
import FilterCardNodes from './FilterCardNodes';
import { preprocessNodes, renderNodeLimit } from './_utils/_utils';
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
  ShowMoreButtonWrapper
} from './FilterCard.style';

const FilterCard = ({ data }) => {
  const {
    body,
    id,
    filterCardNodes,
    title,
    firstFilterCardNodeAsHero = false,
    loadingBehaviour = null,
    paddingAbove = '0rem',
    paddingBelow = '1rem',
    pageBackgroundColour = 'transparent'
  } = data;

  // Not currently a CMS option, but keeping it extrapolated for good measure for now:
  const showMoreIncrement = 6;

  // Load state and content:
  const [isLoading, setIsLoading] = useState(true);
  const [processedNodes, setProcessedNodes] = useState(false);
  const [processedTags, setProcessedTags] = useState(false);
  const [hideShowMoreButton, setHideShowMoreButton] = useState(false);
  const initialNodeLimit = useRef(renderNodeLimit(loadingBehaviour, firstFilterCardNodeAsHero));

  // Keep track of user interactions:
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [totalNodes, setTotalNodes] = useState(0);

  // Determine our display behaviour based on the CMS option
  const [nodeRenderLimit, setNodeRenderLimit] = useState(initialNodeLimit.current);

  // Transform the Contentful output for our use case on initialisation:
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
      const { outputNodes, outputTags } = preprocessNodes(filterCardNodes);

      // Only go ahead once we've got the goods:
      if (outputNodes && outputTags) {
        // Pause for a second before going ahead, to prevent nasty Loader
        // flashes, and let the user register that something has happened:
        setTimeout(() => {
          setProcessedNodes(outputNodes);
          setProcessedTags(outputTags);
        }, 1000);
      }
    }
  }, [isLoading, filterCardNodes]);

  // Adds/removes a clicked filter tag button from the state array accordingly:
  const updateFilters = useCallback(thisTag => {
    // When updating filters, reset render and 'Show More' displays config back to defaults:
    setNodeRenderLimit(initialNodeLimit.current);
    setHideShowMoreButton(true);

    // Cache current state:
    let updatedFilters = currentFilters;

    if (updatedFilters.includes(thisTag)) {
      // Create 2 slices either side of the tag we're removing, and combine into a new array
      updatedFilters = [
        ...updatedFilters.slice(0, updatedFilters.indexOf(thisTag)),
        ...updatedFilters.slice(updatedFilters.indexOf(thisTag) + 1)
      ];
    } else {
      updatedFilters.push(thisTag);
    }

    // Spread as a new array to trigger re-render:
    setCurrentFilters([...updatedFilters]);
  }, [currentFilters]);

  const showHideFilterActive = !(!showFilters && currentFilters.length === 0);

  const currentTotal = `${totalNodes} ${totalNodes === 1 ? ' result' : 'results'}`;

  return (
    <Container
      $paddingAbove={paddingAbove}
      $paddingBelow={paddingBelow}
      $pageBackgroundColour={pageBackgroundColour}
      data-testid="FilterCard"
      id={id}
    >
      <OuterWrapper>
        <HeaderWrapper>

          <Title tag="h1">
            {title}
          </Title>

          <Body>
            {body}
          </Body>

          {/* Only render the controls once all content has been fully processed: */}
          {(processedTags && processedNodes) ? (
            <>
              <ControlsWrapper>
                <ShowHideFiltersButton
                  color="white"
                  $isActive={showHideFilterActive}
                  aria-pressed={showFilters}
                  onClick={() => { setShowFilters(!showFilters); }}
                  icon={showFilters ? <Cross /> : <Filter />}
                  data-testid="FilterCard-ShowHideButton"
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </ShowHideFiltersButton>

                <ClearSelectionButton
                  color="white"
                  icon={<Undo />}
                  $show={showHideFilterActive}
                  disabled={currentFilters.length === 0}
                  onClick={() => {
                    setCurrentFilters([]);
                  }}
                  data-testid="FilterCard-ClearSelectionButton"
                >
                  Clear selection
                </ClearSelectionButton>

                <ResultsWrapper
                  data-testid="FilterCard-Results"
                >
                  <Text tag="span">
                    { currentTotal }
                  </Text>
                </ResultsWrapper>

              </ControlsWrapper>

              <FilterButtonsWrapper
                $show={showFilters}
                data-testid="FilterCard-FilterButtonsWrapper"
              >
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
                      // Force a re-render to trigger our flash-reducing, fade-in CSS animation:
                      iconKey={`${isSelected}`}
                      data-testid="FilterCard-FilterButton"
                    >
                      {tag}
                    </FilterButton>
                  );
                })}
              </FilterButtonsWrapper>
            </>
          )
            // If content is still loading, shown the nifty loader:
            : <PulseLoader color="black" style={{ textAlign: 'center', display: 'block' }} />
          }
        </HeaderWrapper>

        {/* Render the content itself once it's fully processed */}
        {(processedTags && processedNodes) && (
        <FilterCardNodes
          processedNodes={processedNodes}
          firstFilterCardNodeAsHero={firstFilterCardNodeAsHero}
          nodeRenderLimit={nodeRenderLimit}
          currentFilters={currentFilters}
          updateTotalResult={setTotalNodes}
          hideShowMoreButton={setHideShowMoreButton}
          data-testid="FilterCard-Nodes"
        />
        )}

        {/* Only show the Show More button when appropriate,
        hideShowMoreButton set within FilterCardNodes */}
        {(!hideShowMoreButton && processedTags && processedNodes) && (
        <ShowMoreButtonWrapper>
          <Button
            onClick={() => setNodeRenderLimit(nodeRenderLimit + showMoreIncrement)}
            data-testid="FilterCard-ShowMoreButton"
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
  // CMS content:
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]).isRequired,
    paddingAbove: PropTypes.string,
    paddingBelow: PropTypes.string,
    pageBackgroundColour: PropTypes.string,
    loadingBehaviour: PropTypes.string,
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
