import React from 'react';
import ShareButton from './ShareButton';

export default function ShareButtonExample() {
  return (
    <div>
      <ShareButton />
      <ShareButton urlToShare="http://www.google.com" copy="Share some other page:" />
    </div>
  );
}
