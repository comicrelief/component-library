import React from 'react';
import styled from 'styled-components';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }
`;

const Copy = styled.div`
  padding: 20px;
`;

const SingleMessage = ({
  title,
  text,
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
    <Container backgroundColor={backgroundColor}>
      <Picture
        alt={imageAltText ? imageAltText : null}
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
          <Link color={ctaColor} link={ctaLink} target={ctaTarget}>
            {ctaText}
          </Link>
        ) : null}
      </Copy>
    </Container>
  );
};

export default SingleMessage;
