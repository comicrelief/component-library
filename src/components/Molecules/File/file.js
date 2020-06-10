import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';
import Download from '../../Atoms/Icons/Download';

/**
 * Article Teaser
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color('white')};
  border-radius: ${spacing('md')};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const CopyWrapper = styled.div`
  position: relative;
  padding: ${spacing('l')};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize('s')};
  display: block;
  color: ${({ theme: { color } }) => color('grey')};
  margin-bottom: ${spacing('md')};
`;

const CategoryIcon = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize('s')};
  display: block;
  color: ${({ theme: { color } }) => color('grey')};
  margin-bottom: ${spacing('md')};
`;

const Title = styled(Text)`
  margin: 0 0 ${spacing('md')};
`;

const Tag = styled(Text)`
  display: block;
  margin: 0 0 ${spacing('md')};
`;

const Body = styled.div`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
`;

const FileLink = styled(Link)`
  width: 48px;
  height: 48px;
  margin-left: auto;
  position: absolute;
  bottom: -15px;
  right: 20px;
  border-radius: 24px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  span {
    margin-left: auto;
    width: 20px;
    height: 22px;
  }
`;

/**
 * File component
 */
const File = ({ date, title, categoryIcon, tag, children, file }) => {
  const tagItems = tag.splice(0, 3).join(' ');
  return (
    <Wrapper>
      <CopyWrapper>
        <Header>
          <Date size="xs" weight="bold" family="Montserrat">
            {date}
          </Date>
          <CategoryIcon size="xs" weight="bold">
            {categoryIcon}
          </CategoryIcon>
        </Header>
        <Title
          size="xl"
          tag="h3"
          height="2rem"
          weight="normal"
          uppercase
          family="Anton"
        >
          {title}
        </Title>
        <Tag size="xs" weight="normal" color="grey" family="Montserrat">
          {tagItems}
        </Tag>
        <Body>{children}</Body>
        <FileLink
          rel="noopener noreferrer"
          color="red"
          href={file}
          target="blank"
          type="button"
          icon={<Download colour="white" />}
        >
          <span />
        </FileLink>
      </CopyWrapper>
    </Wrapper>
  );
};

File.propTypes = {
  categoryIcon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // Array of 3 items
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Link url to the file
  file: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default File;
