import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../Atoms/Icons/Arrow';
import {
  Wrapper,
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
    <Wrapper>
      <Grid>
        {options.map(option => (
          <ButtonCard
            key={option.id}
            onClick={() => handleClick(option.id)}
            $isSelected={selectedId === option.id}
            data-test={`expanded-button-${option.id}`}
          >

            <CardTopWrapper>

              <HeadingContentWrapper>
                {option.icon && (
                  <HeadingIconWrapper>
                    <img src={option.icon} alt="" />
                  </HeadingIconWrapper>
                )}
                <CardHeading>{option.title}</CardHeading>
              </HeadingContentWrapper>

              <ArrowWrapper>
                <Arrow colour="black" />
              </ArrowWrapper>

            </CardTopWrapper>

            <CardBlurb>{option.description}</CardBlurb>

          </ButtonCard>
        ))}
      </Grid>
    </Wrapper>
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
