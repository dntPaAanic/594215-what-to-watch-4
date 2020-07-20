import React from 'react';
import PropTypes from 'prop-types';
import UserBlock from '../user-block/user-block.jsx';
import {connect} from 'react-redux';
import Preloader from '../preloader/preloader.js';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {Link} from "react-router-dom";
import {Operation} from '../../reducer/user/user';
import {getMyFilmList, isMyFilmListLoading} from '../../reducer/user/selectors.js';

const MoviesListWrapped = withActiveItem(MoviesList);

class MyList extends React.PureComponent {
  componentDidMount() {
    const {loadFavoriteFilms} = this.props;
    loadFavoriteFilms();
  }

  render() {
    const {films, onCardClick, isLoading} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {
            isLoading
              ? <Preloader />
              : <MoviesListWrapped films={films} onCardClick={onCardClick}/>
          }
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
    );
  }
}

MyList.propTypes = {
  loadFavoriteFilms: PropTypes.func,
  onCardClick: PropTypes.func.isRequired,
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
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoading: isMyFilmListLoading(state),
  films: getMyFilmList(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms() {
    dispatch(Operation.loadFavoriteFilms());
  },
});

export {MyList};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);