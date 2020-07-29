import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';
import {film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`SmallMovieCard should render correct`, () =>{
  const tree = renderer.create(
      <SmallMovieCard
        film={film}
        onCardClick={noop}
        onCardMouseEnter={noop}
        onCardMouseLeave={noop}
        activeCardId={0}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
