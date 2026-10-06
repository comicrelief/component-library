import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import Cross from '../../Atoms/Icons/Cross';
import Filter from '../../Atoms/Icons/Filter';
import Undo from '../../Atoms/Icons/Undo';
import Text from '../../Atoms/Text/Text';
import preprocessNodes from './_utils/_utils';
// TODO: update icons?
import { Download, External } from '../../Atoms/Icons/index';

import {
  Container,
  OuterWrapper,
  HeaderWrapper,
  Title,
  BodyCopy,
  DynamicContentWrapper,
  ControlsWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  ResultsWrapper,
  FilterButtonsWrapper,
  FilterButton,
  NodeWrapper,
  Node,
  NodeImageWrapper,
  NodeImage,
  NodeCopyWrapper,
  NodeCopyLabel,
  NodeCopyDescription,
  NodeCopyLink
} from './FilterCard.style';

const FilterCard = ({ data }) => {
  const {
    title,
    body,
    filterCardNodes,
    firstFilterCardNodeAsHero,
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

  const getIcon = whichIcon => {
    switch (whichIcon) {
      case 'Download':
        return <Download colour="black" size={20} />;
      case 'External URL':
        return <External colour="black" size={20} />;
      case 'None':
      default:
        return null;
    }
  };

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

    return processedNodes.map((thisNode, index) => {
      const heroFirstNode = index === 0 && firstFilterCardNodeAsHero;

      // Determine whether we display this content or not:
      const renderNode = currentFilters.length === 0
        || currentFilters.some(thisTag => thisNode.tags.includes(thisTag))
        // TODO: is this correct; do we 'pin' the hero node always?
        // Or do we hero the first node in the LIST?
        || heroFirstNode;

      if (renderNode) {
        // Increment the counter for every node we've got a tag match for:
        totalResults.current += 1;

        const {
          id, label, heading, description,
          image, imageLow, imageSet, imageAltText,
          url, ctaText, ctaIcon
        } = thisNode;

        return (
          <Node
            key={id}
            $isHero={heroFirstNode}
          >
            <NodeImageWrapper>
              <NodeImage
                image={image}
                images={imageSet}
                imageLow={imageLow}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={imageAltText}
              />
            </NodeImageWrapper>

            <NodeCopyWrapper>
              <NodeCopyLabel tag="p" color="grey" weight="500">
                {label}
              </NodeCopyLabel>

              <Text tag="p" weight="700">
                {heading}
              </Text>

              <NodeCopyDescription tag="p">
                {description}
              </NodeCopyDescription>

              <Text tag="p">
                <NodeCopyLink
                  href={url}
                  $underline
                  target="blank"
                  icon={getIcon(ctaIcon)}
                >
                  {ctaText}
                </NodeCopyLink>
              </Text>
            </NodeCopyWrapper>
          </Node>
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
        <HeaderWrapper>

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
            </DynamicContentWrapper>
          )
            : <PulseLoader color="black" style={{ textAlign: 'center', display: 'block' }} />
          }
        </HeaderWrapper>

        {(processedTags && processedNodes) && (
          <NodeWrapper>
            {renderCards()}
          </NodeWrapper>
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
