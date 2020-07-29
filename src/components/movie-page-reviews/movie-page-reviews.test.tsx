import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MoviePageReviews} from './movie-page-reviews';
import {film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

it(`MoviePageReviews should render correct`, () => {
  const tree = renderer.create(
      <MoviePageReviews
        film={film}
        comments={[]}
        loadComments={noop}
        isCommentsLoaded={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
