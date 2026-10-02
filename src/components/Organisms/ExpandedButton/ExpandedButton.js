import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../Atoms/Icons/Arrow';
import {
  Grid,
  ButtonCard,
  CardTopWrapper,
  ArrowWrapper,
  HeadingContentWrapper,
  HeadingIconWrapper,
  CardHeading,
  CardBlurb
} from './ExpandedButton.style';

function ExpandedButton({ options = [], selectedId, onSelect }) {
  const handleClick = useCallback(id => {
    if (onSelect) {
      onSelect(id);
    }
  }, [onSelect]);

  return (
    <>
      <Grid data-testid="expanded-button-grid">
        {options.map(option => (
          <ButtonCard
            key={option.id}
            onClick={() => handleClick(option.id)}
            $isSelected={selectedId === option.id}
            data-test={`expanded-button-${option.id}`}
          >

            <CardTopWrapper data-testid="expanded-button-card-top-wrapper">

              <HeadingContentWrapper data-testid="expanded-button-heading-content-wrapper">
                {option.icon && (
                  <HeadingIconWrapper data-testid="expanded-button-heading-icon-wrapper">
                    <img src={option.icon} alt=""  data-testid="expanded-button-heading-icon-img"/>
                  </HeadingIconWrapper>
                )}
                <CardHeading data-testid="expanded-button-card-heading">{option.title}</CardHeading>
              </HeadingContentWrapper>

              <ArrowWrapper data-testid="expanded-button-arrow-wrapper">
                <Arrow colour="black" data-testid="expanded-button-arrow" />
              </ArrowWrapper>

            </CardTopWrapper>

            <CardBlurb data-testid="expanded-button-card-blurb">{option.description}</CardBlurb>

          </ButtonCard>
        ))}
      </Grid>
    </>
  );
}

ExpandedButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ),
  selectedId: PropTypes.string,
  onSelect: PropTypes.func
};

export default ExpandedButton;
