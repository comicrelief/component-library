import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';

const Image = styled.img.attrs(() => ({
	alt: '',
}))`
	object-fit: cover;
	width: 100%;
	display: block;
	height: 100%;
`;

/**
 * Wrapper for full height component
 */
const FullHeightWrapper = styled.section`
	width: 100%;
	height: auto;
	overflow: hidden;
	@media (min-width: 769px) {
		display: flex;
		flex-direction: ${props => (props.align === 'right' ? 'row-reverse' : 'row')};
	}
`;

/**
 * Wrapper for full height component image element
 */
const ImageWrapper = styled.div`
	position: relative;
	height: auto;
	@media (min-width: 769px) {
		display: flex;
		flex-direction: ${props => (props.direction === 'column' ? 'column' : 'row')};
		flex-basis: 50%;
		flex-grow: 1;
	}
`;

const BlockImg = styled.div`
	display: block;
	position: relative;
	width: 100%;
`;

/**
 * Wrapper for full height component copy element
 */
const CopyWrapper = styled.div`
	box-sizing: border-box;
	background: ${props => (props.background ? props.background : 'transparent')};
	padding: 5vw;
	display: flex;
	flex-basis: 50%;
	flex-grow: 1;
	align-items: center;
	flex-direction: column;
`;

const FullheightDoubleImageSingleCopy = ({ align, background, direction, title, url }) => {
	return (
		<FullHeightWrapper align={align}>
			<ImageWrapper direction={direction}>
				<BlockImg>
					<Image src={url} />
				</BlockImg>
				<BlockImg>
					<Image src={url} />
				</BlockImg>
			</ImageWrapper>
			<CopyWrapper background={background}>
				<Text size="xxl" color="blue" tag="p">
					{' '}
					{title}{' '}
				</Text>
			</CopyWrapper>
		</FullHeightWrapper>
	);
};

FullheightDoubleImageSingleCopy.propTypes = {
	/** Image url */
	url: PropTypes.string,
	/** Header Title */
	title: PropTypes.string,
	/** Background Color */
  background: PropTypes.string,
  /** Align image */
	align: PropTypes.string,
	/** Direction images */
	direction: PropTypes.string
};

export default FullheightDoubleImageSingleCopy;
