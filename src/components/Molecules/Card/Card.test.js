import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Card from './Card';
import data from '../../../styleguide/data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Card image={data.image} images={data.image} backgroundColor="yellow">
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      background: #fbef51;
    }

    .c2 {
      padding: 20px;
    }

    <div
      className="c0"
    >
      <img
        alt=""
        className="lazyload c1"
        data-sizes="auto"
        data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w"
        height="100%"
        src="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width="100%"
      />
      <div
        className="c2"
      >
        <h2>
          Title
        </h2>
        <p>
          Description
        </p>
      </div>
    </div>
  `);
});
