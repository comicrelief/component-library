import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Logo from '../../Atoms/Logo/Logo';

const TitleLabel = styled.span`
  line-height: 0;
  font-size: 0;
  color: transparent;
`;

const LogoLink = styled.a`
  ${({ animateRotate }) => animateRotate && css`
    img {
      transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
    }
    &:hover,
    &:focus {
      img {
        transform: rotate(-14deg);
      }
    }
  `}
`;

const LogoLinked = ({
  campaign = 'Comic Relief',
  title = 'Go to Comic Relief homepage',
  url = '/',
  animateRotate = false,
  sizeSm,
  sizeMd
}) => {
  // Configuration mapping for each campaign
  const campaignConfig = {
    'Sport Relief Gameon': [
      {
        url: url,
        title: 'Go to Comic Relief homepage',
        logoProps: {
          rotate: true,
          sizeSm: '50px',
          sizeMd: '60px',
          campaign: 'Comic Relief',
          title: 'Go to Comic Relief homepage'
        }
      },
      {
        url: '/sportrelief/',
        title: 'Go to Sport Relief homepage',
        logoProps: {
          sizeSm: '100px',
          sizeMd: '120px',
          campaign: 'Sport Relief Gameon',
          title: 'Go to Sport Relief homepage'
        }
      }
    ],
    'Sport Relief': [
      {
        url,
        title: 'Go to Sport Relief homepage',
        logoProps: {
          rotate: false,
          campaign: 'Sport Relief',
          title: 'Sport Relief in homepage'
        }
      }
    ],
    'Pride': [
      {
        url,
        title: 'Go to Comic Relief homepage',
        logoProps: {
          rotate: false,
          campaign: 'Pride',
          title: 'Go to Comic Relief homepage',
          sizeSm,
          sizeMd
        }
      }
    ],
    'Comic Relief': [
      {
        url,
        title,
        logoProps: {
          rotate: false,
          campaign: 'Comic Relief',
          title,
          sizeSm,
          sizeMd
        }
      }
    ]
  };

  const config = campaignConfig[campaign] || campaignConfig['Comic Relief'];

  return (
    <>
      {config.map((item, index) => (
        <LogoLink
          key={index}
          data-testid="LogoLink"
          href={item.url}
          title={item.title}
          animateRotate={animateRotate}
        >
          <Logo
            data-testid="Logo"
            {...item.logoProps}
          />
          <TitleLabel data-testid="TitleLabel">{item.title}</TitleLabel>
        </LogoLink>
      ))}
    </>
  );
};

LogoLinked.propTypes = {
  campaign: PropTypes.string,
  animateRotate: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string
};

export default LogoLinked;
