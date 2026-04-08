import React from 'react';
import ArticleTeaser from './ArticleTeaser';
import { defaultData } from '../../../styleguide/data/data';

export default function ArticleTeaserExample() {
  return (
    <>
      <h3>Article teaser</h3>
      <div style={{ display: 'flex', background: '#E1E2E3' }}>
        <div style={{ margin: '1rem', width: '300px' }}>
          <ArticleTeaser
            href="/test"
            images={defaultData.images}
            imageLow={defaultData.imageLow}
            date=" 01 July 2019"
            title="News article"
            alt="Image's description"
            time="4 min read"
          />
        </div>
        <div style={{ margin: '1rem', width: '300px' }}>
          <ArticleTeaser
            href="/test"
            images={defaultData.images}
            imageLow={defaultData.imageLow}
            date=" 01 July 2019"
            title="News article News article"
            alt="Image's description"
            time="4 min read"
          />
        </div>
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
