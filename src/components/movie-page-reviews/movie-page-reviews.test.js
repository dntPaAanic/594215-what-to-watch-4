import React from 'react';
import renderer from 'react-test-renderer';
import {MoviePageReviews} from './movie-page-reviews';
import {film, comments} from '../../helpers/test-data';

it(`MoviePageReviews should render correct`, () => {
  const tree = renderer.create(
      <MoviePageReviews
        film={film}
        comments={comments}
        loadComments={() => {}}
        isCommentsLoaded={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
