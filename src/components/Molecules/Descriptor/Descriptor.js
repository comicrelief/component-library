import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import Link from '../../Atoms/Link/Link';
import Download from '../../Atoms/Icons/Download';

import fundingIcon from './assets/CR_Funding.svg';
import justiceIcon from './assets/CR_Justice.svg';
import mentalHealthIcon from './assets/CR_MentalHealth.svg';
import redShedcon from './assets/CR_RedShed.svg';
import socialTechIcon from './assets/CR_SocialTech.svg';
import sportIcon from './assets/CR_Sport.svg';

/**
 * Article Teaser
 */
const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color('white')};
  border-radius: ${spacing('md')};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;

const InnerWrapper = styled.div`
  padding: ${spacing('l')};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: block;
`;

const Date = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize('s')};
  display: inline-block;
  color: ${({ theme: { color } }) => color('grey')};
  margin-bottom: ${spacing('md')};
`;

const Image = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  margin-top: ${spacing('md')};
  margin-right: ${spacing('m')};
`;

const iconSwitcher = category => {
  switch (category) {
    case 'How we found':
      return fundingIcon;
    case 'Social tech':
      return socialTechIcon;
    case 'Red Shed':
      return redShedcon;
    case 'Global Mental Health Matters':
      return mentalHealthIcon;
    case 'Sport for Change':
      return sportIcon;
    case 'Gender Justice':
      return justiceIcon;
    default:
      return fundingIcon;
  }
};

const Title = styled(Text)`
  margin: 0 0 ${spacing('m')};
`;

const Tag = styled(Text)`
  text-transform: uppercase;
  display: block;
  margin: 0 0 ${spacing('md')};
`;

const Description = styled.div`
  padding: 0 0 ${spacing('m')};
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
`;

const FileLink = styled(Link)`
  width: 48px;
  height: 48px;
  margin-left: auto;
  position: absolute;
  bottom: -20px;
  right: 25px;
  border-radius: 24px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(4px);
  }

  span {
    margin-left: auto;
    width: 20px;
    height: 22px;
  }
`;

/**
 * Descriptor component
 */

const Descriptor = ({ date, title, category, tags, children, file }) => {
  const tagItems = tags.splice(0, 3).join(' ');

  return (
    <Wrapper>
      <InnerWrapper>
        <Header>
          <Date size="xs" weight="bold" family="Montserrat">
            {date}
          </Date>
          <Image src={iconSwitcher(category)} alt="" />
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
        <Description>{children}</Description>
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
      </InnerWrapper>
    </Wrapper>
  );
};

Descriptor.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // Array of 3 items
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Link url to the file
  file: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default Descriptor;
