import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {films, comments} from '../../helpers/test-data';

const SIMILAR_FILMS_COUNT = 4;

const similarFilms = films.slice(0, SIMILAR_FILMS_COUNT);

jest.mock(`../user-block/user-block.jsx`, () => `user-block`);
jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`MoviePage should render correct`, () => {
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

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            film={films[0]}
            similarFilms={similarFilms}
            onCardClick={() => {}}
            activeItem={0}
            onActiveItemChange={() => {}}
            isAuthed={false}
            isLoaded={true}
            comments={comments}
            toggleFavorite={() => {}}
            isFavorite={true}
          />
        </Provider>,
        {createNodeMock: () => ({})}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
