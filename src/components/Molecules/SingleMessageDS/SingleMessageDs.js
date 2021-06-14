import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Picture from '../../Atoms/Picture/Picture';
import Link from '../../Atoms/Link/Link';
import { External, Internal } from '../../Atoms/Icons/index';
import {
  Container, Copy, CTA, MediaLink, Image, Subtitle, PlayHolder, PlayImage, CloseButton
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
  const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
          href="#"
          target={target}
          {...rest}
          onClick={e => { setIsOpen(true); e.preventDefault(); }}
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
  const embedId = 'l3S59EfTfP0';
  const videoStyle = {
    overlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 5
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      background: '#000',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      width: '853px',
      height: '480px',
      margin: 'auto',
      borderRadius: '0',
      border: '0',
      padding: '0',
      overflow: 'visible'
    }
  };

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
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        parentSelector={() => document.querySelector('body')}
        style={videoStyle}
      >
        <CloseButton type="button" onClick={closeModal} aria-label="Close the modal by clicking here" />
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}?&autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Modal>
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
