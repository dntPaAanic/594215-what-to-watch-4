import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

const ALL_GENRES = `All genres`;
const GENRES_MAX_COUNT = 9;

export const getFilms = (state) => state[NameSpace.FILMS].movieCards;

export const getMainMovie = (state) => state[NameSpace.FILMS].mainMovie;

export const getGenreFilter = (state) => state[NameSpace.FILMS].filterType;

export const getShowingCardsCount = (state) => state[NameSpace.FILMS].showingCards;

export const isFavorite = (state, filmId) => state[NameSpace.FILMS].movieCards.find((item) => item.id === filmId).isFavorite;

export const getFilmById = (state, filmId) => state[NameSpace.FILMS].movieCards.find((item) => item.id === filmId);

export const isAppLoading = (state) => state[NameSpace.FILMS].isAppLoading;

export const getGenresList = createSelector(
    getFilms,
    (films) => {
      const genres = [...new Set(films.map((film) => film.genre))].slice(0, GENRES_MAX_COUNT).sort();
      return [ALL_GENRES, ...genres];
    }
);

export const getFilteredMovies = createSelector(
    getFilms,
    getGenreFilter,
    (movies, genreFilter) => {
      if (genreFilter !== ALL_GENRES) {
        return movies.filter((movie) => movie.genre === genreFilter);
      }

      return movies;
    }
);
