import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import fundingIcon from './assets/CR__Funding.svg';
import justiceIcon from './assets/CR__Justice.svg';
import mentalHealthIcon from './assets/CR__MentalHealth.svg';
import redShedcon from './assets/CR__Shed.svg';
import socialTechIcon from './assets/CR__SocialTech.svg';
import sportIcon from './assets/CR__Sport.svg';
import childrenIcon from './assets/CR__Children.svg';
import homeIcon from './assets/CR__Home.svg';
import learningIcon from './assets/CR__Learning.svg';
import worldIcon from './assets/CR__World.svg';
import safePlaceIcon from './assets/CR__SafePlace.svg';
import environmentIcon from './assets/CR__Environment.svg';

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

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: ${spacing('l')};
  margin-top: ${spacing('m')};

  img:not(:last-child) {
    margin-right: 8px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 24px;
  height: 24px;
`;

const themeSwitcher = theme => {
  switch (theme.trim()) {
    case 'Environment':
      return environmentIcon;
    case 'Safe Place':
      return safePlaceIcon;
    case 'World':
      return worldIcon;
    case 'Learning':
      return learningIcon;
    case 'Home':
      return homeIcon;
    case 'How we fund':
      return fundingIcon;
    case 'Social Tech':
      return socialTechIcon;
    case 'Red Shed':
      return redShedcon;
    case 'Mental Health':
      return mentalHealthIcon;
    case 'Sport for Change':
      return sportIcon;
    case 'Gender Justice':
      return justiceIcon;
    case 'Children':
      return childrenIcon;
    default:
      return fundingIcon;
  }
};

const Title = styled(Text)`
  margin: 0 0 ${spacing('m')};
`;

const TagWrapper = styled.div`
  margin: 0 0 ${spacing('md')} 0;

  span:not(:first-child) {
    margin-left: ${spacing('md')};
  }

  span:not(:first-child)::before {
    content: '';
    position: absolute;
    left: -9px;
    bottom: 5px;
    width: 3px;
    height: 3px;
    background-color: currentColor;
    border-radius: 50%;
  }
`;

const Tag = styled(Text)`
  position: relative;
  text-transform: uppercase;
`;

const Description = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
`;

/**
 * Descriptor component
 */

const Descriptor = ({ date, title, categories, tags, children }) => {
  const tagItems = tags.splice(0, 3).map((tag, index) => {
    const key = tag + index;
    return (
      <Tag size="xs" weight="normal" color="grey" family="Montserrat" key={key}>
        {tag}
      </Tag>
    );
  });

  const icons = categories.map((theme, index) => {
    const key = theme + index;
    return <Image src={themeSwitcher(theme)} alt={`${theme} icon`} key={key} />;
  });

  return (
    <Wrapper>
      <InnerWrapper>
        <Header>
          <Date size="xs" weight="bold" family="Montserrat">
            {date}
          </Date>
          <IconWrapper>{icons}</IconWrapper>
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
        <TagWrapper>{tagItems}</TagWrapper>
        <Description>{children}</Description>
      </InnerWrapper>
    </Wrapper>
  );
};

Descriptor.propTypes = {
  categories: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // Array of 3 items
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default Descriptor;
