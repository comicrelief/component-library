import React from 'react';
import styled from 'styled-components';
import SingleMessage from './SingleMessage';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { defaultData } from '../../../data/data';
import exampleYoutubeIds from './_ExampleYoutubeIds';

const Wrapper = styled.div`
  margin: 50px 0;
`;

export default function SingleMessageExample() {
  return (
    <>
      <Wrapper>
        <h3>Single Message</h3>
        <SingleMessage
          backgroundColor="purple_dark"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={false}
        >
          <Text tag="h1" color="white" size="super">
            title
          </Text>
          <Text tag="p" color="white">
            description
          </Text>
          <span>
            <Link href="/" type="button" color="white">
              CTA
            </Link>
          </span>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message fullImage</h3>
        <SingleMessage
          backgroundColor="purple_dark"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={false}
          fullImage={true}
          vhFull
        >
          <Text tag="h1" color="white" size="xxl">
            title
          </Text>
          <Text tag="p" color="white">
            description
          </Text>
          <span>
            <Link href="/" type="button" color="white">
              CTA
            </Link>
          </span>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message fullImage no copy</h3>
        <SingleMessage
          backgroundColor="purple_dark"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={false}
          fullImage={true}
          vhFull
        />
      </Wrapper>

      <Wrapper>
        <h3>Single Message with no Image (default padding)</h3>
        <SingleMessage backgroundColor="purple_dark" copyFirst={false}>
          <Text tag="p" color="white" size="xxl">
            "The creativity that goes into helping people have a better life is
            extraordinary."
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with no Image (no padding)</h3>
        <SingleMessage backgroundColor="purple_dark" copyFirst={false} paddingTop="0rem" paddingBottom="0rem">
          <Text tag="p" color="white" size="xxl">
            "The creativity that goes into helping people have a better life is
            extraordinary."
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with no Image (big padding)</h3>
        <SingleMessage backgroundColor="purple_dark" copyFirst={false} paddingTop="4rem" paddingBottom="4rem">
          <Text tag="p" color="white" size="xxl">
            "The creativity that goes into helping people have a better life is
            extraordinary."
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message vertical height 100%</h3>
        <SingleMessage
          backgroundColor="purple_dark"
          imageLow={defaultData.imageLow}
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          vhFull
        >
          <Text tag="p" color="white" size="xxl">
            "The creativity that goes into helping people have a better life is
            extraordinary."
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message double image</h3>
        <SingleMessage
          backgroundColor="yellow"
          imageLow={defaultData.imageLow}
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          imageSet2={defaultData.images}
          image2={defaultData.image}
          imageAltText2=""
        >
          <Text tag="p" color="black" size="xxl">
            "The creativity that goes into helping people have a better life is
            extraordinary."
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with 16:9 video</h3>
        <SingleMessage
          backgroundColor="purple"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={true}
          videoID={exampleYoutubeIds[0]}
          landscapeVideo
        >
          <Text tag="p" color="black" size="xxl">
            Single Message with 16:9 video, copy first
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <SingleMessage
          backgroundColor="purple"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={false}
          videoID={exampleYoutubeIds[1]}
          landscapeVideo
        >
          <Text tag="p" color="black" size="xxl">
            Single Message with 16:9 video
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with portrait video</h3>
        <SingleMessage
          backgroundColor="purple"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={true}
          videoID={exampleYoutubeIds[2]}
        >
          <Text tag="p" color="black" size="xxl">
            Single Message with portrait video
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with portrait video, 100VH</h3>
        <SingleMessage
          backgroundColor="purple"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={true}
          videoID={exampleYoutubeIds[3]}
          vhFull
        >
          <Text tag="p" color="black" size="xxl">
            Single Message with portrait video, 100VH
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with landscape video, 100VH, fullwidth image</h3>
        <SingleMessage
          backgroundColor="purple"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={true}
          videoID={exampleYoutubeIds[4]}
          vhFull
          fullImage={true}
        >
          <Text tag="p" color="black" size="xxl">
            Single Message with portrait video, 100VH, fullwidth image - (this copy
            hidden by design)
          </Text>
        </SingleMessage>
      </Wrapper>

      <Wrapper>
        <h3>Single Message with landscape video, 50VH, fullwidth image</h3>
        <SingleMessage
          backgroundColor="purple"
          imageSet={defaultData.images}
          image={defaultData.image}
          imageAltText=""
          copyFirst={true}
          videoID={exampleYoutubeIds[5]}
          fullImage={true}
        >
          <Text tag="p" color="black" size="xxl">
            Single Message with portrait video, 50VH,fullwidth image - (this copy hidden
            by design)
          </Text>
        </SingleMessage>
      </Wrapper>
    </>
  );
}
