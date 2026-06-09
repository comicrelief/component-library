import React from 'react';
import styled from 'styled-components';
import CardDs from './CardDs';
import Text from '../../Atoms/Text/Text';
import { Internal, Download } from '../../Atoms/Icons/index';
import { defaultData } from '../../../data/data';

const ExampleWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  background: #E1E2E3;
  justify-content: space-around;
`;

export default function CardDsExample() {
  return (
    <>
      <h3>CardDs:  Image, Text & Link</h3>
      <ExampleWrapper>
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
          <Text tag="h3" color="purple" size="xl">
            EDINBURGH MARATHON
          </Text>
          <Text size="m" weight="bold">
            24 May 2026
          </Text>
          <Text tag="p" size="m" weight="bold" style={{marginTop: "1rem"}}>
            Marathon
          </Text>
          <Text tag="p" size="m">
              Voted the fastest marathon in the UK, Edinburgh Marathon is perfect for first-timers and those seeking a personal best whilst soaking in the picturesque views of the East Lothian coastline.
          </Text>
          <Text tag="p" size="m">
              Registration fee: £39
          </Text>
          <Text tag="p" size="m">
              Sponsorship pledge: £500
          </Text>
        </CardDs>
      </ExampleWrapper>

      <h3>CardDs: Text & Link</h3>
      <ExampleWrapper>
        <CardDs
          target="blank"
          link="/home"
          linkLabel="Find out more"
          backgroundColor="white"
          height="auto"
          icon={<Download colour="white" />}
        >
          <Text tag="h3" color="purple" size="xl">
            Title
          </Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </ExampleWrapper>

      <h3>CardDs: Text only</h3>
      <ExampleWrapper>
        <CardDs backgroundColor="white" height="auto">
          <Text tag="h3" color="purple" size="xl">
            Title
          </Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </ExampleWrapper>

      <h3>CardDs: Image & Text, No Link</h3>
      <ExampleWrapper>
        <CardDs
          target="_blank"
          imageLow={defaultData.image}
          images={defaultData.images}
          imageAltText="Happy man going to work"
          backgroundColor="white"
          height="auto"
          icon={<Internal colour="white" />}
        >
          <Text tag="h3" color="purple" size="xl">
            Title
          </Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </ExampleWrapper>

      <h3>CardDs: Only column view for use in CardsCarousel</h3>
      <ExampleWrapper>
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
          <Text tag="h3" color="purple" size="xl">
            Only Column view
          </Text>
          <Text tag="p">Text body copy description</Text>
        </CardDs>
      </ExampleWrapper>
    </>
  );
}
