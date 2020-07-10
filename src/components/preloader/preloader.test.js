import React from 'react';
import renderer from 'react-test-renderer';
import Preloader from './preloader.js';

it(`Preloader should render correct`, () => {
  const tree = renderer
    .create(<Preloader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
