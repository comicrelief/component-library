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
  border-radius: 1rem;
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
  right: 30px;
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
const File = ({ date, title, categoryIcon, tag, children }) => {
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
          {tag}
        </Tag>
        <Body>{children}</Body>
        <FileLink
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Download colour="white" />}
        />
      </CopyWrapper>
    </Wrapper>
  );
};

File.propTypes = {
  categoryIcon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

File.defaultProps = {
  tag: null
};

export default File;
