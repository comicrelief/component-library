import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';
import hideVisually from '../../../theme/shared/hideVisually';
import Text from '../../Atoms/Text/Text';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: calc(100% - ${spacing('m')});
  color: ${({ theme }) => theme.color('grey_dark')};
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    flex-direction: column;
  }
`;

const Heading = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

const Subtitle = styled(Heading)`
  margin: 0 0 ${spacing('m')};
`;

const Title = styled(Heading)`
  margin: 0 0 ${spacing('l')};
`;

const Copy = styled.div`
  padding: calc(2 * ${spacing('md')});
  ${({ hasLink }) => hasLink && `padding-bottom: ${spacing('l')}`};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  width: 100%;

  @media ${({ theme }) => theme.breakpoint('small')} {
    padding: calc(2 * ${spacing('m')});
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    height: 100%;
  }
`;

const CTA = styled.div`
  position: absolute;
  right: ${spacing('m')};
  bottom: -${spacing('m')};
  ${zIndex('medium')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    bottom: calc(-1 * (${spacing('l')} + ${spacing('md')}));
    ${({ hasImage }) => !hasImage && `bottom: -${spacing('m')};`};
  }
`;

const Li = styled(Link)`
  ${({ mobile }) => mobile
    && css`
      width: 48px;
      span {
        margin-left: 0;

        svg {
          width: 22px;
        }
      }
      span:first-child {
        hidden: ${hideVisually};
      }
    `}
`;

const BiteSize = ({
  backgroundColor,
  children,
  link,
  linkLabel,
  target,
  title,
  subtitle,
  ...rest
}) => {
  const [mobile, setMobile] = useState(false);

  const icon = () => {
    if (target === 'blank') {
      return <External colour="white" />;
    }
    return <Internal colour="white" />;
  };

  const external = target === 'blank' ? 'noopener noreferrer' : null;

  useEffect(() => {
    let width = typeof window !== 'undefined' ? window.innerWidth : null;
    function displayWindowSize() {
      width = typeof window !== 'undefined' ? window.innerWidth : null;
      setMobile(width < 759);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', displayWindowSize);
    }
    setMobile(width < 759);
  }, []);

  return (
    <Container {...rest}>
      <Copy hasLink={link} backgroundColor={backgroundColor}>
        <Subtitle size="m" weight="normal" family="Anton" tag="h6">
          {subtitle}
        </Subtitle>
        <Title
          size="xl"
          tag="h4"
          height="2rem"
          weight="normal"
          uppercase
          family="Anton"
        >
          {title}
        </Title>
        {children}
      </Copy>
      {link && (
        <CTA>
          <Li
            mobile={mobile}
            rel={external}
            color="red"
            href={link}
            target={target}
            type="button"
            icon={icon()}
          >
            <Text>{linkLabel}</Text>
          </Li>
        </CTA>
      )}
    </Container>
  );
};

BiteSize.propTypes = {
  backgroundColor: PropTypes.string,
  link: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkLabel: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired
};

BiteSize.defaultProps = {
  backgroundColor: 'white',
  link: null,
  linkLabel: null,
  target: null
};

export default BiteSize;
