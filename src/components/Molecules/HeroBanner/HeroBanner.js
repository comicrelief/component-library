import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';

const Container = styled.section`
    height: 500px;
    position: relative;
    background: ${props => props.background ? props.background : "transparent"};
`;

const Image = styled.img.attrs(() => ({
    alt: ''
    }))`
    object-fit: cover;
    width: 100%;
    display: block;
    height: 100%;
    opacity: 0.5;
`;

const Title = styled.h1`
    position: absolute;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    text-align: center;
`;

/**
 * Hero Banner to be used as Header of landing pages.
 */

const HeroBanner = ({url, title, background}) => {
    return (
        <Container background={background}>
            <Image src={url} />
            <Title>
                <Text size="xxl" color="white">
                    {title}
                </Text>
            </Title>
        </Container>
    );
};

HeroBanner.propTypes = {
    /** Image url */
    url: PropTypes.string,
    /** Header Title */
    title: PropTypes.string,
    /** Background Color */
    background: PropTypes.string
};

export default HeroBanner;
