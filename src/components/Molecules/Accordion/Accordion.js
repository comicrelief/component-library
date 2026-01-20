import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Text from '../../Atoms/Text/Text';

import spacing from '../../../theme/shared/spacing';
import { Chevron } from '../../Atoms/Icons/index';

const Container = styled.div`
  border-radius: 1rem;
  background: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const ChevronKeyframes = keyframes`
 0% { margin-top: 0rem; }
 50% { margin-top: 0.5rem; }
 100% { margin-top: 0rem; }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  transition: bottom 0.1s linear;
  cursor: pointer;
  text-align: left;

  &:focus,
  &:hover {
    color: inherit; // text was flashing white on focus on safari without this.
    outline: none;
    > div {
      animation-name: ${props => props.ChevronKeyframes};
      animation-duration: 0.4s;
    }
  }

  padding: ${spacing('l')};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${spacing('l')} ${spacing('lg')};
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Copy = styled.div`
  overflow: hidden;
  height: 0;
  visibility: none;
  transition: all 0.2s cubic-bezier(0.21, 1.7, 0.83, 0.68) 0s;
  padding: 0 ${spacing('l')};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: 0 ${spacing('lg')};
  }

  ${({ isOpen, contentBottomPadding }) => (isOpen && css`
    height: auto;
    visibility: visible;
    transition: all 0.2s cubic-bezier(0.21, 1.7, 0.83, 0.68) 0s;
    padding: 0 ${spacing('lg')} ${contentBottomPadding || spacing('l')};

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding: 0 ${spacing('lg')} ${contentBottomPadding || spacing('l')};
    }
  `)}
`;

const StyledText = styled(Text)`
    margin-bottom: 0;
`;

const Accordion = ({
  children, title, contentBottomPadding, ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container {...rest}>
      <Button onClick={handleOpen} aria-expanded={isOpen ? 'true' : 'false'} ChevronKeyframes={ChevronKeyframes} type="button">
        <StyledText tag="h3">
          {title}
        </StyledText>
        <Icon>
          <Chevron colour="black" direction={isOpen ? 'up' : 'down'} />
        </Icon>
      </Button>
      <Copy isOpen={isOpen} contentBottomPadding={contentBottomPadding}>
        {children}
      </Copy>
    </Container>
  );
};

Accordion.propTypes = {
  contentBottomPadding: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired
};

export default Accordion;
