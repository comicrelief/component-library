import React from 'react';
import styled from 'styled-components';
import SingleMessageDs from './SingleMessageDs';
import Text from '../../Atoms/Text/Text';
import Download from '../../Atoms/Icons/Download';
import spacing from '../../../theme/shared/spacing';
import { defaultData } from '../../../styleguide/data/data';

const Title = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin: ${spacing('md')} 0;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    margin-bottom: ${spacing('m')};
  }
`;

const wrapStyle = {
  display: 'flex',
  padding: '4rem 0',
  background: '#E1E2E3',
  justifyContent: 'space-around',
};

export default function SingleMessageDsExample() {
  return (
    <>
      <h3>Image align left, CTA clickable</h3>
      <div style={wrapStyle}>
        <SingleMessageDs
          imageLeft={true}
          link="/home"
          linkLabel="Check out"
          backgroundColor="white"
          imageLow={defaultData.image}
          images={defaultData.images}
          imageAltText="Happy man going to work"
          subtitle="Subtitle"
          height="100%"
          youTubeId="faz0JeBB41M"
        >
          <Title tag="h4" color="grey_dark" size="xl" family="Anton" weight="normal">
            Heading Line 1 Heading Line 2
          </Title>
          <Text tag="p">
            Whatever you've got planned, the Sport Relief shop has everything you need
            to get you looking your best while you're raising some cash.
          </Text>
        </SingleMessageDs>
      </div>

      <h3>Image align right, CTA clickable</h3>
      <div style={wrapStyle}>
        <SingleMessageDs
          target="blank"
          link="https://www.comicrelief.com/"
          linkLabel="Check out"
          ctaBgColor="blue_dark"
          backgroundColor="white"
          imageLeft={false}
          imageLow={defaultData.image}
          images={defaultData.images}
          imageAltText="Happy man going to work"
          subtitle="Subtitle"
          height="100%"
        >
          <Title tag="h4" color="grey_dark" size="xl" family="Anton" weight="normal">
            Heading Line 1 Heading Line 2
          </Title>
          <Text tag="p">
            Whatever you've got planned, the Sport Relief shop has everything you need
            to get you looking your best while you're raising some cash.
          </Text>
        </SingleMessageDs>
      </div>

      <h3>With download icon</h3>
      <div style={wrapStyle}>
        <SingleMessageDs
          link="https://assets.ctfassets.net/zsfivwzfgl3t/EsIEuI1teYkbLB7peOtqP/b43a905cffd89115d642fe5a84ff020a/RND21_fundraise_moneybuys_poster.pdf"
          linkLabel="Download this"
          linkIcon={<Download />}
          imageLow={defaultData.image}
          imageLeft={true}
          images={defaultData.images}
          subtitle="subTitle"
        >
          <Text tag="p">
            Whatever you've got planned, the Sport Relief shop has everything you need
            to get you looking your best while you're raising some cash.
          </Text>
        </SingleMessageDs>
      </div>

      <h3>Video with no CTA</h3>
      <div style={wrapStyle}>
        <SingleMessageDs
          imageLow={defaultData.image}
          images={defaultData.images}
          youTubeId="faz0JeBB41M"
          imageLeft={true}
          subtitle="subTitle"
        >
          <Text tag="p">Some text and stuff.</Text>
        </SingleMessageDs>
      </div>
    </>
  );
}
