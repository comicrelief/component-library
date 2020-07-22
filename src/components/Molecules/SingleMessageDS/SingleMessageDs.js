import React from 'react';
import styled from 'styled-components';
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
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: ${({ imageLeft }) => (imageLeft ? 'row' : 'row-reverse')};
  }
`;

const Subtitle = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const Image = styled.div`
  height: auto;

  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ hasLink }) => !hasLink && `width: calc(50% - ${spacing('xl')})`};
  }

  img {
    border-radius: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  }
`;

const MediaLink = styled.a`
  width: 320px;
  height: 240px;
  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 448px;
    width: 360px;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 600px;
  }
`;

const CTA = styled.div`
  position: absolute;
  bottom: -${spacing('m')};
  ${zIndex('medium')};

  a {
    font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ hasImage }) => !hasImage && `bottom: -${spacing('m')};`}
  }
`;

const Copy = styled.div`
  position: relative;
  height: 100%;
  width: 320px;
  padding: ${spacing('m')};
  ${zIndex('low')};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

  ${({ imageLeft }) => (imageLeft
    ? `${CTA} { right: ${spacing('m')};} margin: calc(-${spacing('m')} * 2) 0 -${spacing('m')} ${spacing('m')}`
    : `${CTA} { left: ${spacing('m')};} margin: calc(-${spacing('m')} * 2) 0 -${spacing('m')} -${spacing('m')}`
  )};


  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 360px;
    min-height: 350px;
    padding: ${spacing('l')};

    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

    ${({ imageLeft }) => (imageLeft
    ? `margin: ${spacing('l')} 0 -${spacing('m')} calc(-${spacing('m')} * 2)`
    : `margin: ${spacing('l')} calc(-${spacing('m')} * 2) -${spacing('m')} 0`)};
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 600px;
    height: 448px;
    padding: calc(${spacing('m')} * 2);

    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('m')} * 3)`};

    margin: ${({ imageLeft }) => (imageLeft
    ? `${spacing('l')} 0 ${spacing('m')} -${spacing('l')}`
    : `${spacing('l')} -${spacing('l')} ${spacing('m')} 0`)};
  }
`;

const SingleMessageDs = ({
  backgroundColor,
  imageLeft,
  imageLow,
  images,
  image,
  imageAltText,
  height,
  width,
  subtitle,
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
  const subtitleColour = ctaBgColor === 'red' ? 'grey_dark' : ctaBgColor;

  return (
    <Container {...rest} imageLeft={imageLeft}>
      {hasMedia()}
      <Copy
        hasImage={imageLow}
        hasLink={link}
        backgroundColor={backgroundColor}
        imageLeft={imageLeft}
      >
        <Subtitle color={subtitleColour} size="s" weight="bold" family="Montserrat">
          {subtitle}
        </Subtitle>
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
  imageLeft: PropTypes.bool,
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
  target: PropTypes.string,
  children: PropTypes.node.isRequired
};

SingleMessageDs.defaultProps = {
  backgroundColor: 'white',
  imageLeft: true,
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
