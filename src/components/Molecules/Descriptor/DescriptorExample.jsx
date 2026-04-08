import React from 'react';
import Descriptor from './Descriptor';

const loremIpsum = `Description go here...
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur.`;

export default function DescriptorExample() {
  return (
    <>
      <Descriptor
        title="Title"
        date="15/06/2020"
        tags={['Tag1', 'tag2', 'tag3', 'tag4']}
        categories={['How we Fund', 'Children Survive & Thrive']}
      >
        {loremIpsum}
      </Descriptor>

      <Descriptor
        title="Title"
        date="15/06/2020"
        tags={['Tag1', 'tag2', 'tag3', 'tag4']}
        categories={['Environment', 'Social Tech', 'Sport for Change']}
      >
        {loremIpsum}
      </Descriptor>
    </>
  );
}
