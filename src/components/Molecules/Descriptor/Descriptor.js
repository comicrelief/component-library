import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import fundingIcon from './assets/CR_Funding.svg';
import justiceIcon from './assets/CR_Justice.svg';
import mentalHealthIcon from './assets/CR_MentalHealth.svg';
import redShedcon from './assets/CR_RedShed.svg';
import socialTechIcon from './assets/CR_SocialTech.svg';
import sportIcon from './assets/CR_Sport.svg';

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

const iconSwitcher = category => {
  switch (category.trim()) {
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
  padding: 0 0 ${spacing('l')};
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
`;

/**
 * Descriptor component
 */

const Descriptor = ({ date, title, categories, tags, children }) => {
  const tagItems = tags.splice(0, 3).join(' ');
  const icons = categories.map((category, index) => {
    const catObj = { ...categories };
    const key = catObj[index];
    return (
      <Image src={iconSwitcher(category)} alt={`${category} icon`} key={key} />
    );
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
        <Tag size="xs" weight="normal" color="grey" family="Montserrat">
          {tagItems}
        </Tag>
        <Description>{children}</Description>
      </InnerWrapper>
    </Wrapper>
  );
};

Descriptor.propTypes = {
  categories: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([
        'How we fund',
        'Social Tech',
        'Red Shed',
        'Sport for Change',
        'Mental Health',
        'Gender Justice'
      ]).isRequired
    ),
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
