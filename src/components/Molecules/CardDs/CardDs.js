import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 3rem);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: auto;
  margin: 0 -${spacing('m')} 0 ${spacing('m')};
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
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: calc(50% + 6rem);
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 100%;
  }
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  ${({ hasLink }) => hasLink && `padding-bottom: ${spacing('xl')}`};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: calc(50% + 6rem);
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 100%;
    height: 100%;
  }
  ${zIndex('low')};
  ${({ hasImage }) =>
    hasImage &&
    css`
      margin-top: calc(-1 * (${spacing('xl')} + ${spacing('l')}));
      min-height: calc(5 * ${spacing('l')});
      @media ${({ theme }) => theme.breakpoint('small')} {
        margin: ${spacing('m')} 0 -${spacing('m')} -${spacing('m')};
      }

      @media ${({ theme }) => theme.breakpoint('large')} {
        margin: calc(-1 * (${spacing('xl')} + ${spacing('l')})) 0 -${spacing(
            'm'
          )} 0;
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

const CardDs = ({
  backgroundColor,
  imageLow,
  images,
  image,
  imageAltText,
  height,
  width,
  children,
  link,
  linkLabel,
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
  const icon = () => {
    if (target === '_blank') {
      return <External colour="white" />;
    }
    return <Internal colour="white" />;
  };

  return (
    <Container {...rest}>
      {imageLow && link ? (
        <MediaLink href={link} target={target} {...rest}>
          {Media}
        </MediaLink>
      ) : (
        Media
      )}
      <Copy
        hasImage={imageLow}
        hasLink={link}
        backgroundColor={backgroundColor}
      >
        {children}
      </Copy>
      {link && (
        <CTA hasImage={imageLow}>
          <Link
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

CardDs.propTypes = {
  backgroundColor: PropTypes.string,
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired
};

CardDs.defaultProps = {
  backgroundColor: 'white',
  imageLow: null,
  images: null,
  image: null,
  link: null,
  linkLabel: null,
  target: null,
  imageAltText: '',
  width: '100%',
  height: '100%'
};

export default CardDs;
