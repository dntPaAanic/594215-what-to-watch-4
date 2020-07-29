import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MyList} from './my-list';
import {films} from '../../helpers/test-data';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {noop} from '../../helpers/utils';

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`MyList should render correct`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    [Namespace.FILMS]: {
      movieCards: [],
      mainMovie: {},
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

  const tree = renderer
    .create(
        <Provider store={store}>
          <MyList
            films={films}
            loadFavoriteFilms={noop}
            isLoading={false}
            onCardClick={noop}
          />
        </Provider>,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
