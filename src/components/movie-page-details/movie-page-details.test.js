import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageDetails from './movie-page-details.jsx';
import {film} from '../../helpers/test-data.js';

it(`MoviePageDetails should render correct`, () => {
  const tree = renderer.create(
      <MoviePageDetails
        film={film}
      />
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
