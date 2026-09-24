import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../Atoms/Icons/Arrow';
import {
  Wrapper,
  Grid,
  ButtonCard,
  CardTitle,
  CardDescription,
  ArrowWrapper,
  HeadingContentWrapper,
  HeadingIconWrapper
} from './ExpandedButton.style';

function ExpandedButton({ options = [], selectedId, onSelect }) {
  const handleClick = useCallback(id => {
    if (onSelect) {
      onSelect(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <ArrowWrapper>
              <Arrow colour="black" />
            </ArrowWrapper>
            <CardTitle>
              <HeadingContentWrapper>
                {option.icon && (
                  <HeadingIconWrapper>
                    <img src={option.icon} alt="" />
                  </HeadingIconWrapper>
                )}
                <span>{option.title}</span>
              </HeadingContentWrapper>
            </CardTitle>
            <CardDescription>{option.description}</CardDescription>
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
