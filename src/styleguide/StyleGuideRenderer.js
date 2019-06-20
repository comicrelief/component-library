import React from 'react';
const StyleGuideRenderer = ({
  title,
  version,
  components,
  toc,
  hasSidebar
}) => (
  <div className="root">
    <h1>{title}</h1>
    {version && <h2>{version}</h2>}
    <main className="wrapper">
      <div className="content">
        {components}
        <footer className="footer">Copyright @ Comic Relief 2019</footer>
      </div>
      {hasSidebar && <div className="sidebar">{toc}</div>}
    </main>
  </div>
);

export default StyleGuideRenderer;
