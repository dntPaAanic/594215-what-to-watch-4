import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageOverview from './movie-page-overview.jsx';
import {film} from '../../helpers/test-data.js';

it(`MoviePageOverview should render correct`, () => {
  const tree = renderer.create(
      <MoviePageOverview
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
