import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Main} from './main';
import {films, film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space';
import {Provider} from 'react-redux';

const GENRE = `Thrillers`;

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`Main should render correct`, () => {
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
        <Main
          mainMovie={film}
          films={films}
          onCardClick={noop}
          filterGenres ={[GENRE]}
          filterType={GENRE}
          onFilterClick={noop}
          showingCards={8}
          onShowMoreButtonClick={noop}
          toggleFavorite={noop}
          isFavorite={false}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
