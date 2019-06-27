import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: ${({ copyFirst }) =>
      copyFirst === true ? 'row-reverse' : 'row'};
  }
`;

const Copy = styled.div`
  padding: 20px;
  flex: 0 0 50%;
`;

const SingleMessage = ({
  title,
  text,
  copyFirst,
  textColor,
  ctaText,
  ctaLink,
  ctaColor,
  ctaTarget,
  backgroundColor,
  imageSet,
  imageAltText
}) => {
  return (
    <Container backgroundColor={backgroundColor} copyFirst={copyFirst}>
      <Picture
        alt={imageAltText}
        images={imageSet}
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Copy>
        <Text tag="h2" size="xxl" color={textColor}>
          {title}
        </Text>
        {text ? (
          <Text tag="p" size="m" color={textColor}>
            {text}
          </Text>
        ) : null}
        {ctaLink ? (
          <Link color={ctaColor} href={ctaLink} target={ctaTarget}>
            {ctaText}
          </Link>
        ) : null}
      </Copy>
    </Container>
  );
};

SingleMessage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  copyFirst: PropTypes.string,
  textColor: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaColor: PropTypes.string,
  ctaTarget: PropTypes.string,
  backgroundColor: PropTypes.string,
  imageSet: PropTypes.string,
  imageAltText: PropTypes.string
};

SingleMessage.defaultProps = {
  text: null,
  copyFirst: false,
  textColor: 'inherit',
  ctaText: null,
  ctaLink: null,
  ctaColor: null,
  ctaTarget: null,
  backgroundColor: 'white',
  imageSet: null,
  imageAltText: ''
};

export default SingleMessage;
