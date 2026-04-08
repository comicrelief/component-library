import React from 'react';
import CardDs from './CardDs';
import Text from '../../Atoms/Text/Text';
import { Internal, Download } from '../../Atoms/Icons/index';
import { defaultData } from '../../../styleguide/data/data';

const wrapStyle = {
  display: 'flex',
  padding: '2rem 0',
  background: '#E1E2E3',
  justifyContent: 'space-around',
};

export default function CardDsExample() {
  return (
    <>
      <h3>Image, Text &amp; Link</h3>
      <div style={wrapStyle}>
        <CardDs
          target="_blank"
          link="/home"
          linkLabel="Find out more"
          imageLow={defaultData.image}
          images={defaultData.images}
          imageAltText="Happy man going to work"
          backgroundColor="white"
          height="auto"
          icon={<Internal colour="white" />}
        >
          <Text tag="h3" color="purple" size="xl">EDINBURGH MARATHON</Text>
          <Text size="m" weight="bold">24 May 2026</Text>
          <Text tag="p" size="m" weight="bold" style={{ marginTop: '1rem' }}>Marathon</Text>
          <Text tag="p" size="m">
            Voted the fastest marathon in the UK, Edinburgh Marathon is perfect for first-timers
            and those seeking a personal best whilst soaking in the picturesque views.
          </Text>
          <Text tag="p" size="m">Registration fee: £39</Text>
          <Text tag="p" size="m">Sponsorship pledge: £500</Text>
        </CardDs>
      </div>

      <h3>Text &amp; Link (no image)</h3>
      <div style={wrapStyle}>
        <CardDs
          target="blank"
          link="/home"
          linkLabel="Find out more"
          backgroundColor="white"
          height="auto"
          icon={<Download colour="white" />}
        >
          <Text tag="h3" color="purple" size="xl">Title</Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </div>

      <h3>Text only (no link)</h3>
      <div style={wrapStyle}>
        <CardDs backgroundColor="white" height="auto">
          <Text tag="h3" color="purple" size="xl">Title</Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </div>

      <h3>Only column view (for CardsCarousel)</h3>
      <div style={wrapStyle}>
        <CardDs
          target="_blank"
          link="/home"
          linkLabel="Find out more"
          imageLow={defaultData.image}
          images={defaultData.images}
          imageAltText="Happy man going to work"
          backgroundColor="white"
          height="auto"
          icon={<Internal colour="white" />}
          isCarousel={true}
        >
          <Text tag="h3" color="purple" size="xl">Only Column view</Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </div>
    </>
  );
}
