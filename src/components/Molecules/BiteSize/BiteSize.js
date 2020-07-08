import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';
import Text from '../../Atoms/Text/Text';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: calc(100% - ${spacing('m')});
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    flex-direction: column;
  }
`;

const Subtitle = styled(Text)`
  display: block;
  margin: 0 0 ${spacing('m')};
`;

const Title = styled(Text)`
  margin: 0 0 ${spacing('l')};
`;

const Copy = styled.div`
  padding: calc(2 * ${spacing('m')});
  ${({ hasLink }) => hasLink && `padding-bottom: ${spacing('l')}`};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('large')} {
    height: 100%;
  }
  ${zIndex('low')};
  ${({ hasImage }) =>
    hasImage &&
    css`
      margin-top: calc(-2 * ${spacing('m')});
      min-height: calc(5 * ${spacing('l')});
      @media ${({ theme }) => theme.breakpoint('small')} {
        margin: ${spacing('m')} 0 -${spacing('m')} -${spacing('m')};
        width: calc(50% + 6rem);
      }

      @media ${({ theme }) => theme.breakpoint('large')} {
        margin: calc(-2 * ${spacing('m')}) 0 -${spacing('m')} 0;
        width: 100%;
      }
    `};
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

const BiteSize = ({
  backgroundColor,
  children,
  link,
  linkLabel,
  target,
  ...rest
}) => {
  const icon = () => {
    if (target === 'blank') {
      return <External colour="white" />;
    }
    return <Internal colour="white" />;
  };

  const external = target === 'blank' ? 'noopener noreferrer' : null;

  return (
    <Container {...rest}>
      <Copy hasLink={link} backgroundColor={backgroundColor}>
        <Subtitle size="s" weight="normal" family="Montserrat" tag="h6">
          Subtitle
        </Subtitle>
        <Title
          size="xl"
          tag="h4"
          height="2rem"
          weight="normal"
          uppercase
          family="Anton"
        >
          Title
        </Title>
        {children}
      </Copy>
      {link && (
        <CTA>
          <Link
            rel={external}
            color="red"
            href={link}
            target={target}
            type="button"
            icon={icon()}
          >
            {linkLabel}
          </Link>
        </CTA>
      )}
    </Container>
  );
};

BiteSize.propTypes = {
  backgroundColor: PropTypes.string,
  link: PropTypes.string,
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
