import React from 'react';
import DoubleCopy from './DoubleCopy';
import RichText from '../../Atoms/RichText/RichText';

export default function DoubleCopyExample() {
  return (
    <DoubleCopy
      leftCopy={
        <RichText
          markup="<h1>Left Copy</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
        />
      }
      rightCopy={
        <RichText
          markup="<h1>Right Copy</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
        />
      }
    />
  );
}
