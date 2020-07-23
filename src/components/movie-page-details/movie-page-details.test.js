import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageDetails from './movie-page-details';
import {film} from '../../helpers/test-data';

it(`MoviePageDetails should render correct`, () => {
  const tree = renderer.create(
      <MoviePageDetails
        film={film}
      />
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
