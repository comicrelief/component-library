import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import CurrencyFormat from "react-currency-format";
const Container = styled.section.withConfig({
  displayName: "InfoBanner__Container",
  componentId: "sc-19rlh65-0"
})(["display:flex;flex-wrap:wrap;align-items:center;flex-direction:column;position:relative;color:white;padding:60px 0;background:red;@media (min-width:700px){flex-direction:row;}"]);
const Info = styled.div.withConfig({
  displayName: "InfoBanner__Info",
  componentId: "sc-19rlh65-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:40px;flex-direction:column;@media (min-width:700px){width:calc(100%/3);}"]);
const Label = styled.h3.withConfig({
  displayName: "InfoBanner__Label",
  componentId: "sc-19rlh65-2"
})(["text-transform:uppercase;font-size:16px;"]);
const Desc = styled.p.withConfig({
  displayName: "InfoBanner__Desc",
  componentId: "sc-19rlh65-3"
})(["font-size:27px;font-weight:bold;"]);
/**
 * Info Banner for landing pages.
 */

const InfoBanner = ({
  title,
  background,
  theme,
  startDate,
  endDate,
  country,
  amount
}) => {
  return React.createElement(Container, {
    background: background
  }, React.createElement(Info, null, React.createElement(Label, null, "Project Name"), React.createElement(Desc, null, title)), React.createElement(Info, null, React.createElement(Label, null, "End Date"), React.createElement(Desc, null, React.createElement(Moment, {
    format: "MMMM Do YYYY"
  }, endDate))), React.createElement(Info, null, React.createElement(Label, null, "Funding theme"), React.createElement(Desc, null, theme)), React.createElement(Info, null, React.createElement(Label, null, "Amount Awarded"), React.createElement(Desc, null, React.createElement(CurrencyFormat, {
    value: amount,
    displayType: 'text',
    thousandSeparator: true,
    prefix: '£',
    renderText: value => value
  }))), React.createElement(Info, null, React.createElement(Label, null, "Start Date"), React.createElement(Desc, null, React.createElement(Moment, {
    format: "MMMM Do YYYY"
  }, startDate))), React.createElement(Info, null, React.createElement(Label, null, "Beneficiary Country"), React.createElement(Desc, null, country)));
};

export default InfoBanner;