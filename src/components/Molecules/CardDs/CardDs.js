import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Link from '../../Atoms/Link/Link';
import {
  Container, Image, MediaLink, Copy, CTA
} from './CardDs.style';

const CardDs = ({
  icon,
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

  const hasMedia = () => {
    if (imageLow && link) {
      return (
        <MediaLink
          aria-hidden="true"
          tabIndex="-1"
          href={link}
          target={target}
          data-image-cta-copy={linkLabel}
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

  const external = target === 'blank' ? 'noopener' : null;

  return (
    <Container {...rest}>
      {hasMedia()}
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
            rel={external}
            color="red"
            href={link}
            target={target}
            type="button"
            icon={icon}
            data-button-cta-copy={linkLabel}
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
  children: PropTypes.node.isRequired,
  icon: PropTypes.node
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
  height: '100%',
  icon: null
};

export default CardDs;
