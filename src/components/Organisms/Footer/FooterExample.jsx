import React from 'react';
import Footer from './Footer';
import data from './data/data';
import footerCopy from './data/footerCopy';

export function FooterExample1() {
  return (
    <>
      <h3>Standard footer</h3>
      <Footer navItems={data} footerCopy={footerCopy.copy} campaign="Comic Relief"  />
    </>
  )
}

export function FooterExample2() {
  return (
    <>
      <h3>Overrides allowList functionality for external usage</h3>
      <Footer
        navItems={data}
        footerCopy={footerCopy.copy}
        campaign="Comic Relief"
        overrideallowList
      />
    </>
  )
}

export function FooterExample3() {
  return (
    <>
      <h3>Adding an additionalLegalLine to the top of the footer, add FR logo</h3>
      <Footer
        additionalLegalLine="CHICKEN RUN: DAWN OF THE NUGGET ™/ © Aardman. Netflix ™/© Netflix. Used with permission/Wallace & Gromit Ltd. All rights reserved/ Shaun the Sheep © & TM /Morph ©/TM Aardman Animations Ltd. All rights reserved."
        navItems={data}
        footerCopy={footerCopy.copy}
        campaign="Comic Relief"
        showFundraisingRegulatorLogo
      />
    </>
  );
}
