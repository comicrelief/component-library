import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Container = styled.section.withConfig({
  displayName: "HeroBanner__Container",
  componentId: "sc-1sc9wcr-0"
})(["height:500px;position:relative;background:", ";"], props => props.background ? props.background : "transparent");
const Image = styled.img.attrs(() => ({
  alt: ''
})).withConfig({
  displayName: "HeroBanner__Image",
  componentId: "sc-1sc9wcr-1"
})(["object-fit:cover;width:100%;display:block;height:100%;opacity:0.5;"]);
const Title = styled.h1.withConfig({
  displayName: "HeroBanner__Title",
  componentId: "sc-1sc9wcr-2"
})(["font-size:64px;line-height:72px;color:", ";position:absolute;margin:0 auto;top:50%;transform:translateY(-50%);left:0;right:0;text-align:center;"], props => props.theme.color('white'));
/**
 * Hero Banner to be used as Header of landing pages.
 */

const HeroBanner = ({
  url,
  title,
  background
}) => {
  return React.createElement(Container, {
    background: background
  }, React.createElement(Image, {
    src: url
  }), React.createElement(Title, null, title));
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