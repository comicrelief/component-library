import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import image from './assets/logo.svg';

const Image = styled.img`
	object-fit: cover;
	width: auto;
	display: block;
	height: auto;
`;

/**
 * Logo wrapper
 */

const LogoWrapper = styled.div.attrs(() => ({
	role: 'Logo'
	}))`
	display: inline-block;
	width: 50px;
	height: 50px;
	@media (min-width: 740px) {
		width: 60px;
		height: 60px;
		transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
	}
`;

const Logo = ({ rotate, alt }) => {
	return (
		<LogoWrapper rotate={rotate} >
			<Image src={image} alt={alt} />
		</LogoWrapper>
	);
};

Logo.propTypes = {
	/** Rotate logo */
	rotate: PropTypes.bool,
};

export default Logo;
