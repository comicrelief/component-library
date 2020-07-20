import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: ${({ direction }) => (direction === 'right' ? 'row-reverse' : 'row')};
    width: 100%;
  }
`;

const Heading = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const Title = styled(Heading)`
  margin: ${spacing('md')} 0;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-bottom: ${spacing('m')};
  }
`;

const Subtitle = styled(Heading)`
  display: inline-block;
`;

const Image = styled.div`
  height: auto;
  margin: 0 ${spacing('m')} 0 -${spacing('m')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: 0;
    ${({ hasLink }) => !hasLink && `width: calc(50% - ${spacing('xl')})`};
  }

  @media ${({ theme }) => theme.breakpoint('large')} {

    margin: 0 -${spacing('m')} 0 ${spacing('m')};
  }
  img {
    border-radius: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  }
`;

const MediaLink = styled.a`
  width: 320px;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 360px;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 600px;
  }
`;

const Copy = styled.div`
  position: relative;
  width: 320px;
  padding: ${spacing('m')};
  ${zIndex('low')};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

  ${({ hasImage }) => hasImage
    && css`
      min-height: calc(5 * ${spacing('l')});
      @media ${({ theme }) => theme.breakpoint('small')} {
        margin: ${({ direction }) => (direction === 'left'
    ? `${spacing('l')} 0 -${spacing('m')} calc(-${spacing('m')} * 2)`
    : `${spacing('l')} calc(-${spacing('m')} * 2) -${spacing('m')} 0`)};
    }
    `};

  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 360px;
    padding: ${({ direction }) => (direction === 'left'
    ? `${spacing('l')} ${spacing('m')} ${spacing('l')} ${spacing('l')}`
    : `${spacing('l')} ${spacing('l')} ${spacing('l')} ${spacing('m')}`)};
    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 600px;
    background: red;
    height: 100%;
    padding: calc(${spacing('m')} * 2);
    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('m')} * 3)`};

    ${({ hasImage }) => hasImage
    && css`
      min-height: calc(5 * ${spacing('l')});
      @media ${({ theme }) => theme.breakpoint('small')} {
        margin: ${({ direction }) => (direction === 'left'
    ? `${spacing('l')} 0 ${spacing('m')} -${spacing('l')}`
    : `${spacing('l')} calc(-${spacing('l')} * 2) ${spacing('m')} 0`)};
    }
    `};
  }
`;

const CTA = styled.div`
  position: absolute;
  right: ${spacing('m')};
  bottom: -${spacing('m')};
  ${zIndex('medium')};

  a {
    font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ hasImage }) => !hasImage && `bottom: -${spacing('m')};`}
  }
`;

const SingleMessageDs = ({
  backgroundColor,
  imageDirection,
  imageLow,
  images,
  image,
  imageAltText,
  height,
  width,
  subtitle,
  title,
  children,
  link,
  linkLabel,
  ctaBgColor,
  target,
  ...rest
}) => {
  const Media = (
    <Image hasLink={link}>
      <Picture
        alt={imageAltText}
        imageLow={imageLow}
        images={images}
        image={image}
        objectFit="cover"
        width={width}
        height={height}
      />
    </Image>
  );

  const hasMedia = () => {
    if (imageLow && link) {
      return (
        <MediaLink
          aria-hidden="true"
          tabIndex="-1"
          href={link}
          target={target}
          {...rest}
        >
          {Media}
        </MediaLink>
      );
    }
    if (imageLow) {
      return Media;
    }
    return null;
  };

  const icon = () => {
    if (target === 'blank') {
      return <External colour="white" />;
    }
    return <Internal colour="white" />;
  };

  const external = target === 'blank' ? 'noopener noreferrer' : null;

  return (
    <Container {...rest} direction={imageDirection}>
      {hasMedia()}
      <Copy
        hasImage={imageLow}
        hasLink={link}
        backgroundColor={backgroundColor}
        direction={imageDirection}
      >
        <Subtitle color="blue_dark" size="s" weight="bold" family="Montserrat">
          {subtitle}
        </Subtitle>
        <Title tag="h4" color="grey_dark" size="xl" family="Anton" weight="normal">
          {title}
        </Title>
        {children}
        {link && (
        <CTA hasImage={imageLow}>
          <Link
            rel={external}
            color={ctaBgColor}
            href={link}
            target={target}
            type="button"
            icon={icon()}
          >
            {linkLabel}
          </Link>
        </CTA>
        )}
      </Copy>
    </Container>
  );
};

SingleMessageDs.propTypes = {
  backgroundColor: PropTypes.string,
  imageDirection: PropTypes.string,
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  link: PropTypes.string,
  ctaBgColor: PropTypes.string,
  linkLabel: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired
};

SingleMessageDs.defaultProps = {
  backgroundColor: 'white',
  imageDirection: 'left',
  imageLow: null,
  images: null,
  image: null,
  link: null,
  ctaBgColor: 'red',
  linkLabel: null,
  target: null,
  imageAltText: '',
  width: '100%',
  height: '100%'
};

export default SingleMessageDs;
