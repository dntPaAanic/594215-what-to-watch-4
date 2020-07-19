import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import {ActionCreator} from '../../reducer/films/films.js';
import UserBlock from '../user-block/user-block.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {getGenreFilter, getGenresList, getShowingCardsCount} from '../../reducer/films/selectors.js';
import {Link} from 'react-router-dom';
import {isMainMovieFavorite as isMainMovieFavoriteSelector} from "../../reducer/films/selectors.js";
import {Operation} from "../../reducer/user/user.js";
import history from "../../history.js";

const MoviesListWrapped = withActiveItem(MoviesList);

const Main = (props) => {
  const {mainMovie, films, filterGenres, onCardClick, filterType, onFilterClick, onShowMoreButtonClick, showingCards, toggleFavorite, isMainMovieFavorite} = props;
  const {title, genre, releaseDate, imagePoster, imageBackground} = mainMovie;

  const _handleFavoriteButtonClick = () => {
    toggleFavorite(mainMovie);
  };

  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={imageBackground} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <UserBlock />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={imagePoster} alt={`${title} poster`} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${mainMovie.id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button" onClick={_handleFavoriteButtonClick}>
                {isMainMovieFavorite
                  ? (<svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>)
                  : (<svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>)
                }
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList filterGenres={filterGenres} filterType={filterType} onFilterClick={onFilterClick} />
        <MoviesListWrapped films={films.slice(0, showingCards)} onCardClick={onCardClick}/>
        {showingCards < films.length && <ShowMore onShowMoreButtonClick={onShowMoreButtonClick}/>}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>);
};

Main.propTypes = {
  mainMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePreview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    imagePoster: PropTypes.string.isRequired,
    imageBackground: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    previewSrc: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePreview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    imagePoster: PropTypes.string.isRequired,
    imageBackground: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    previewSrc: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired
  })).isRequired,
  onCardClick: PropTypes.func.isRequired,
  filterGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterType: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  showingCards: PropTypes.number.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isMainMovieFavorite: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    filterType: getGenreFilter(state),
    filterGenres: getGenresList(state),
    showingCards: getShowingCardsCount(state),
    isMainMovieFavorite: isMainMovieFavoriteSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filterType) {
    dispatch(ActionCreator.changeGenreFilter(filterType));
  },
  onShowMoreButtonClick() {
    dispatch(ActionCreator.incrementShowingCards());
  },
  toggleFavorite(film) {
    dispatch(Operation.toggleFavorite(film));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
