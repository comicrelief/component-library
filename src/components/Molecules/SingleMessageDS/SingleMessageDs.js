import React from 'react';
import PropTypes from 'prop-types';

import Picture from '../../Atoms/Picture/Picture';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import {
  Container, Copy, CTA, MediaLink, Image, Subtitle
} from './SingleMessageDs.style';

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
