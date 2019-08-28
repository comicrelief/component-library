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
    .c2 {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .c3 {
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
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      height: 100%;
      background: #FFE400;
    }

    .c1 {
      height: auto;
    }

    .c4 {
      padding: 1rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    <div
      className="c0"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
          height="100%"
          width="100%"
        >
          <img
            alt=""
            className="lazyload c3"
            data-lowsrc={null}
            data-sizes="auto"
            data-srcset="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
            height="100%"
            src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
            srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            width="100%"
          />
        </div>
      </div>
      <div
        className="c4"
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
