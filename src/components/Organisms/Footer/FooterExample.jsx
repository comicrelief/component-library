import React from 'react';
import Footer from './Footer';
import data from './data/data';
import footerCopy from './data/footerCopy';

export default function FooterExample() {
  return (
    <div>
      <h3>Standard footer</h3>
      <Footer navItems={data} footerCopy={footerCopy.copy} />
      <h3>Overrides allowList functionality</h3>
      <Footer navItems={data} footerCopy={footerCopy.copy} overrideallowList />
      <h3>Additional legal line footer</h3>
      <Footer
        navItems={data}
        footerCopy={footerCopy.copy}
        additionalLegalLine="CHICKEN RUN: DAWN OF THE NUGGET ™/ © Aardman. Netflix ™/© Netflix. Used with permission/Wallace & Gromit Ltd. All rights reserved/ Shaun the Sheep © & TM /Morph ©/TM Aardman Animations Ltd. All rights reserved."
      />
    </div>
  );
}
