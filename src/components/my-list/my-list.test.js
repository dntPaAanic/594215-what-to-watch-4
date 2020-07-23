import React from 'react';
import renderer from 'react-test-renderer';
import {MyList} from './my-list';
import {films} from '../../helpers/test-data';

jest.mock(`../user-block/user-block.jsx`, () => `user-block`);
jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`MyList should render correct`, () => {
  const tree = renderer
    .create(
        <MyList
          films={films}
          loadFavoriteFilms={() => {}}
          isLoading={false}
          onCardClick={() => {}}
        />,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
