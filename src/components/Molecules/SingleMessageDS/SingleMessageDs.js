import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../Atoms/Picture/Picture';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import {
  Container, Copy, CTA, MediaLink, Image, Subtitle, PlayHolder, PlayImage
} from './SingleMessageDs.style';

import playImage from './assets/play.png';

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
  linkIcon,
  hasVideo,
  ...rest
}) => {
  const Media = (
    <Image>
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

  const hasLink = () => {
    if (imageLow && link) {
      return (
        <MediaLink
          imageLeft={imageLeft}
          aria-hidden="true"
          tabIndex="-1"
          href={link}
          target={target}
          {...rest}
        >
          {hasVideo ? (
            <PlayHolder>
              <PlayImage src={playImage} alt="" />
              {Media}
            </PlayHolder>
          ) : Media}
        </MediaLink>
      );
    }
    if (imageLow) {
      return Media;
    }
    return null;
  };

  const icon = linkIcon || (target === 'blank' ? <External /> : <Internal />);

  const external = target === 'blank' ? 'noopener' : null;

  return (
    <Container {...rest} imageLeft={imageLeft}>
      {hasLink()}
      <Copy
        hasImage={imageLow}
        hasLink={link}
        backgroundColor={backgroundColor}
        imageLeft={imageLeft}
      >
        <Subtitle color={ctaBgColor} size="s" weight="bold" family="Montserrat">
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
            icon={icon}
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
  imageLeft: PropTypes.bool.isRequired,
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
  children: PropTypes.node.isRequired,
  linkIcon: PropTypes.node,
  hasVideo: PropTypes.bool
};

SingleMessageDs.defaultProps = {
  backgroundColor: 'white',
  imageLow: null,
  images: null,
  image: null,
  link: null,
  ctaBgColor: 'red',
  linkLabel: null,
  target: null,
  imageAltText: '',
  width: '100%',
  height: '100%',
  linkIcon: null,
  hasVideo: false
};

export default SingleMessageDs;
