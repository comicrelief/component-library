import React from 'react';

const StyleGuideRenderer = ({
  title,
  version,
  components,
  toc,
  hasSidebar
}) => React.createElement("div", {
  className: "root"
}, React.createElement("h1", null, title), version && React.createElement("h2", null, version), React.createElement("main", {
  className: "wrapper"
}, React.createElement("div", {
  className: "content"
}, components, React.createElement("footer", {
  className: "footer"
}, "Copyright @ Comic Relief 2019")), hasSidebar && React.createElement("div", {
  className: "sidebar"
}, toc)));

export default StyleGuideRenderer;