import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import { screen } from '../../../theme/shared/size';
import Text from '../../Atoms/Text/Text';
import Form from './Form/Form';
import {
  MobImage,
  BgImage,
  Container,
  Header,
  HeaderInner,
  Wrapper
} from './Donate.style';

const Donate = ({
  alt,
  cartID,
  clientID,
  backgroundColor,
  donateLink,
  data,
  title,
  subtitle,
  otherDescription,
  formAlignRight,
  images,
  image,
  imageLow,
  mbshipID,
  noMoneyBuys
}) => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${screen.mediumPlus})` });

  return (
    <Container backgroundColor={backgroundColor} id={mbshipID}>
      {!isDesktop && images ? (
        <MobImage
          backgroundColor={backgroundColor}
          image={image}
          images={images}
          imageLow={imageLow}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={alt}
        />
      ) : null}

      {isDesktop && images ? (
        <BgImage
          backgroundColor={backgroundColor}
          image={image}
          images={images}
          imageLow={imageLow}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={alt}
          isBackgroundImage
        />
      ) : null}

      <Wrapper formAlignRight={formAlignRight}>
        <Header formAlignRight={formAlignRight}>
          <HeaderInner>
            {subtitle && (
              <>
                <Text
                  tag="h2"
                  color="white"
                  size="big"
                  family="Anton"
                  weight="normal"
                  uppercase
                >
                  {title}
                </Text>
                <Text tag="p" color="white" size="m">
                  {subtitle}
                </Text>
              </>
            )}
          </HeaderInner>
        </Header>

        <Form
          data={data}
          otherDescription={otherDescription}
          cartID={cartID}
          clientID={clientID}
          mbshipID={mbshipID}
          donateLink={donateLink}
          noMoneyBuys={noMoneyBuys}
        />
      </Wrapper>
    </Container>
  );
};

Donate.propTypes = {
  alt: PropTypes.string,
  cartID: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.shape),
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  otherDescription: PropTypes.string,
  subtitle: PropTypes.string,
  formAlignRight: PropTypes.bool,
  imageLow: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  backgroundColor: PropTypes.string,
  mbshipID: PropTypes.string,
  noMoneyBuys: PropTypes.bool
};

Donate.defaultProps = {
  alt: '',
  data: {},
  formAlignRight: true,
  imageLow: null,
  image: null,
  images: null,
  backgroundColor: null,
  mbshipID: null,
  otherDescription:
    'will help us fund amazing projects in the UK and around the world.',
  subtitle: '',
  noMoneyBuys: false
};

export default Donate;
