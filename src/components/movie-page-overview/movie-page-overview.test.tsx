import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviePageOverview from './movie-page-overview';
import {film} from '../../helpers/test-data';

it(`MoviePageOverview should render correct`, () => {
  const tree = renderer.create(
      <MoviePageOverview
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
