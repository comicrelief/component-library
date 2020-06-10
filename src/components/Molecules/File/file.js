import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';

/**
 * Article Teaser
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color('white')};
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ category }) =>
    !category &&
    category !== '' &&
    css`
      @media ${({ theme }) => theme.breakpoint('small')} {
        width: 55%;
      }
    `};
  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

const Title = styled(Text)`
  margin: ${({ time }) => (time ? `0 0 ${spacing('md')}` : '0')};
`;

const Date = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize('s')};
  display: block;
  color: ${({ theme: { color } }) => color('grey_for_forms')};
  margin-bottom: ${spacing('md')};
`;

const Time = styled(Text)`
  display: block;
  margin-top: auto;
`;

/**
 * Article teaser component
 */
const File = ({ date, title, category, family, time }) => {
  return (
    <Wrapper>
      <CopyWrapper category={category}>
        <Date size="xs" weight="bold">
          {date}
        </Date>
        <Title
          time={time}
          size="xl"
          tag="h3"
          height="2rem"
          weight="normal"
          uppercase
          family={family}
        >
          {title}
        </Title>
        {time && (
          <Time size="xs" weight="400" color="grey_dark">
            {time}
          </Time>
        )}
      </CopyWrapper>
    </Wrapper>
  );
};

File.propTypes = {
  family: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string
  /** link url */
};

File.defaultProps = {
  category: null,
  time: null,
  family: 'Anton'
};

export default File;
