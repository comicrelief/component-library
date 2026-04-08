import React from 'react';
import Logo from './Logo';

export default function LogoExample() {
  return (
    <>
      <h3>Comic Relief Logo</h3>
      <Logo rotate={false} sizeSm="50px" sizeMd="60px" />

      <h3>Sport Relief Logo</h3>
      <Logo rotate={false} sizeSm="50px" sizeMd="60px" campaign="Sport Relief" />

      <h3>Sport Relief Game On Logo</h3>
      <Logo rotate={false} sizeSm="50px" sizeMd="60px" campaign="Sport Relief Gameon" />
    </>
  );
}
