import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space.js';
import {Provider} from 'react-redux';
import {films, film} from '../../helpers/test-data.js';

jest.mock(`../user-block/user-block.jsx`, () => `user-block`);

it(`App should render correct`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    [Namespace.FILMS]: {
      movieCards: films,
      mainMovie: films[0],
      filterType: `All genres`,
      showingCards: 8,
      isAppLoading: false
    },
    [Namespace.USER]: {
      authorizationStatus: false,
    },
    [Namespace.COMMENTS]: {
      comments: [],
      isCommentsLoaded: false
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          films={films}
          onCardClick={() => {}}
          mainMovie={film}
          login={() => {}}
          isLoading={false}
          isAuthed={false}
        />
      </Provider>, {
        createNodeMock: () => ({})
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
