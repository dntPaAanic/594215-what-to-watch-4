import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main';
import {films, film} from '../../helpers/test-data';

const GENRE = `Thrillers`;

jest.mock(`../user-block/user-block.jsx`, () => `user-block`);
jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`Main should render correct`, () => {
  const tree = renderer.create(
      <Main
        mainMovie={film}
        films={films}
        onCardClick={() => {}}
        filterGenres ={[GENRE]}
        filterType={GENRE}
        onFilterClick={() => {}}
        showingCards={8}
        onShowMoreButtonClick={() => {}}
        toggleFavorite={() => {}}
        isFavorite={false}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
