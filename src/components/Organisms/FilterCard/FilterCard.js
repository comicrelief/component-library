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
  ShowMoreButtonWrapper
} from './FilterCard.style';

const FilterCard = ({ showMoreIncrement = 6, data }) => {
  const {
    body,
    filterCardNodes,
    firstFilterCardNodeAsHero,
    title,
    loadingBehaviour = null,
    paddingAbove = '0rem',
    paddingBelow = '1rem',
    pageBackgroundColour = 'transparent'
  } = data;

  // Load state and content:
  const [isLoading, setIsLoading] = useState(true);
  const [processedNodes, setProcessedNodes] = useState(false);
  const [processedTags, setProcessedTags] = useState(false);
  const [hideShowMoreButton, setHideShowMoreButton] = useState(false);
  const initialNodeLimit = useRef(showNodeLimit(loadingBehaviour, firstFilterCardNodeAsHero));

  // Keep track of user interactions:
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [totalNodes, setTotalNodes] = useState(0);

  // Determine our display behaviour based on the CMS option
  const [nodeRenderLimit, setNodeRenderLimit] = useState(initialNodeLimit.current);

  // Transform the Contentful output for our use-case on initialisation:
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

  // Adds/removes a clicked filter tag button from the state accordingly:
  const updateFilters = useCallback(thisTag => {
    // When updating filters, reset render and show more displays back to their defaults:
    setNodeRenderLimit(initialNodeLimit.current);
    setHideShowMoreButton(true);

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
  }, [currentFilters]);

  // Extremely specific active state logic:
  const showHideFilterActive = !(!showFilters && currentFilters.length === 0);

  const currentTotal = `${totalNodes} ${totalNodes === 1 ? ' result' : 'results'}`;

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
                  //
                  const { tag, selectedIcon, unselectedIcon } = processedTags[key];
                  // Determine 'active' styles
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
        <FilterCardNodes
          processedNodes={processedNodes}
          firstFilterCardNodeAsHero={firstFilterCardNodeAsHero}
          nodeRenderLimit={nodeRenderLimit}
          currentFilters={currentFilters}
          updateTotalResult={setTotalNodes}
          hideShowMoreButton={setHideShowMoreButton}
        />
        )}

        {(!hideShowMoreButton && processedTags && processedNodes) && (
        <ShowMoreButtonWrapper>
          <Button
            onClick={() => setNodeRenderLimit(nodeRenderLimit + showMoreIncrement)}
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
  // Not a CMS option (currently) but gives flexibility to better
  // demonstrate this functionality in the Component Library examples:
  showMoreIncrement: PropTypes.number,
  // CMS content:
  data: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),
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
