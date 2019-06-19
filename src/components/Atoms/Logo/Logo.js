import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import image from './assets/logo.svg';

const Image = styled.img.attrs(() => ({
	alt: '',
}))`
	object-fit: cover;
	width: auto;
	display: block;
	height: auto;
`;

/**
 * Link 
 */

const Link = styled.a`
	display: inline-block;
	width: 50px;
	height: 50px;
	background-size: 100%;
	@media (min-width: 740px) {
		width: 60px;
		height: 60px;
		transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
	}
`;

const Logo = ({ rotate, url, alt }) => {
	return (
		<Link rotate={rotate} href={url} >
			<Image src={image} alt={alt} />
		</Link>
	);
};

Logo.propTypes = {
	/** Rotate logo */
	rotate: PropTypes.bool,
	/** Rotate logo */
	url: PropTypes.string,
	/** Logo info */
	alt: PropTypes.string,
};

export default Logo;
