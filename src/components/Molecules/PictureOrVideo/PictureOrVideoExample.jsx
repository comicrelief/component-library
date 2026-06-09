import React from 'react';
import styled from 'styled-components';
import PictureOrVideo from './PictureOrVideo';
import { defaultData } from '../../../data/data';
import video1080 from '../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4';
import videoMobile from '../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4';

const imageObj = {
  images: defaultData.heroBannerImage,
  imageLow: defaultData.heroBannerImage,
  image: defaultData.heroBannerImage,
  alt: 'Image alt'
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  marginBottom: 2rem;
`;

export default function PictureOrVideoExample() {
  return (
    <>
      <h3>With image (Picture)</h3>
      <Wrapper>
        <PictureOrVideo
          images={defaultData.heroBannerImage}
          imageLow={defaultData.heroBannerImage}
          image={defaultData.heroBannerImage}
          alt="Image alt text"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Wrapper>

      <h3>With video (AmbientVideo)</h3>
      <Wrapper>
        <PictureOrVideo
          images={defaultData.heroBannerImage}
          imageLow={defaultData.heroBannerImage}
          videoDesktop={video1080}
          videoMobile={videoMobile}
          videoLoop
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Wrapper>

      <h3>With image object</h3>
      <Wrapper>
        <PictureOrVideo
          image={imageObj}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Wrapper>
    </>
  );
}
