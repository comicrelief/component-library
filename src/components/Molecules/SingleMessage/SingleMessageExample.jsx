import React from 'react';
import SingleMessage from './SingleMessage';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { defaultData } from '../../../styleguide/data/data';
import exampleYoutubeIds from './_ExampleYoutubeIds';

export default function SingleMessageExample() {
  return (
    <>
      <h3>With image</h3>
      <SingleMessage
        backgroundColor="purple_dark"
        imageSet={defaultData.images}
        image={defaultData.image}
        imageAltText=""
        copyFirst={false}
      >
        <Text tag="h1" color="white" size="super">title</Text>
        <Text tag="p" color="white">description</Text>
        <span>
          <Link href="/" type="button" color="white">CTA</Link>
        </span>
      </SingleMessage>

      <h3>Full image</h3>
      <SingleMessage
        backgroundColor="purple_dark"
        imageSet={defaultData.images}
        image={defaultData.image}
        imageAltText=""
        copyFirst={false}
        fullImage={true}
        vhFull
      >
        <Text tag="h1" color="white" size="xxl">title</Text>
        <Text tag="p" color="white">description</Text>
        <span>
          <Link href="/" type="button" color="white">CTA</Link>
        </span>
      </SingleMessage>

      <h3>With no image (default padding)</h3>
      <SingleMessage backgroundColor="purple_dark" copyFirst={false}>
        <Text tag="p" color="white" size="xxl">
          "The creativity that goes into helping people have a better life is extraordinary."
        </Text>
      </SingleMessage>

      <h3>Double image</h3>
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
          "The creativity that goes into helping people have a better life is extraordinary."
        </Text>
      </SingleMessage>

      <h3>With 16:9 video, copy first</h3>
      <SingleMessage
        backgroundColor="purple"
        imageSet={defaultData.images}
        image={defaultData.image}
        imageAltText=""
        copyFirst={true}
        videoID={exampleYoutubeIds[0]}
        landscapeVideo
      >
        <Text tag="p" color="black" size="xxl">Single Message with 16:9 video, copy first</Text>
      </SingleMessage>

      <h3>With portrait video</h3>
      <SingleMessage
        backgroundColor="purple"
        imageSet={defaultData.images}
        image={defaultData.image}
        imageAltText=""
        copyFirst={true}
        videoID={exampleYoutubeIds[2]}
      >
        <Text tag="p" color="black" size="xxl">Single Message with portrait video</Text>
      </SingleMessage>
    </>
  );
}
