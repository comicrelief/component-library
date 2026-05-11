import React from 'react';
import Footer from './Footer';
import data from './data/data';
import footerCopy from './data/footerCopy';

export function FooterExample1() {
  return <Footer navItems={data} footerCopy={footerCopy.copy} />;
}

export function FooterExample2() {
  return <Footer navItems={data} footerCopy={footerCopy.copy} overrideallowList />;
}

export function FooterExample3() {
  return (
    <Footer
      navItems={data}
      footerCopy={footerCopy.copy}
      additionalLegalLine="CHICKEN RUN: DAWN OF THE NUGGET ™/ © Aardman. Netflix ™/© Netflix. Used with permission/Wallace & Gromit Ltd. All rights reserved/ Shaun the Sheep © & TM /Morph ©/TM Aardman Animations Ltd. All rights reserved."
    />
  );
}
