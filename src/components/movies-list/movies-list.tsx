import * as React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {PREVIEW_DELAY} from '../../helpers/const';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleCardMouseClick = this._handleCardMouseClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);

    this.timerId = null;
  }

  _handleCardMouseClick(id) {
    const {onCardClick} = this.props;

    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    onCardClick(id);
  }

  _handleCardMouseEnter(id) {
    const {onActiveItemChange} = this.props;

    this.timerId = setTimeout(() => {
      onActiveItemChange(id);
    }, PREVIEW_DELAY);
  }

  _handleCardMouseLeave() {
    const {onActiveItemChange} = this.props;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    onActiveItemChange(-1);
  }

  render() {
    const {films, activeItem: activeCardId} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) =>
          <SmallMovieCard
            film={film}
            onCardClick={this._handleCardMouseClick}
            onCardMouseEnter={this._handleCardMouseEnter}
            onCardMouseLeave={this._handleCardMouseLeave}
            activeCardId={activeCardId}
            key={film.title}
          />)
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
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
    runTime: PropTypes.number.isRequired
  })).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
};

export default MoviesList;
