import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import {films} from '../../helpers/test-data';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`MoviesList should render correct`, () => {
  const tree = renderer.create(
      <MoviesList
        films={films}
        onCardClick={() => {}}
        activeItem={0}
        onActiveItemChange={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
