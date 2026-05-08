import React from 'react';
import styled from 'styled-components';
import ArticleTeaser from './ArticleTeaser';
import { defaultData } from '../../../data/data';

const ExampleWrapper = styled.div`
  margin: 1rem;
  width: 300px;
`;

export default function ArticleTeaserExample() {
  return (
    <>
      <h3>Article teaser</h3>
      <div style={{ display: 'flex', background: '#E1E2E3' }}>
        <ExampleWrapper>
          <ArticleTeaser
            href="/test"
            images={defaultData.images}
            imageLow={defaultData.imageLow}
            date=" 01 July 2019"
            title="News article"
            alt="Image's description"
            time="4 min read"
          />
        </ExampleWrapper>
        <ExampleWrapper>
          <ArticleTeaser
            href="/test"
            images={defaultData.images}
            imageLow={defaultData.imageLow}
            date=" 01 July 2019"
            title="News article News article"
            alt="Image's description"
            time="4 min read"
          />
        </ExampleWrapper>
      </div>

      <h3>Press release</h3>
      <ArticleTeaser
        href="/test"
        category=""
        date=" 01 July 2019"
        title="Press Release"
        alt="Image's description"
        logoSize="80px"
      />
    </>
  );
}
