import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './app';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {films, film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

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
          onCardClick={noop}
          mainMovie={film}
          login={noop}
          isLoading={false}
          isAuthed={false}
        />
      </Provider>, {
        createNodeMock: () => ({})
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
