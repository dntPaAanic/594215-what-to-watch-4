import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import {films} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`MoviesList should render correct`, () => {
  const tree = renderer.create(
      <MoviesList
        films={films}
        onCardClick={noop}
        activeItem={0}
        onActiveItemChange={noop}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
