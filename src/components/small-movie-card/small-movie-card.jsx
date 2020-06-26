import React from 'react';
import PropTypes from 'prop-types';
import {PREVIEW_DELAY} from '../../helpers/utils.js';
import VideoPlayer from '../video-player/video-player.jsx';

export default class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleCardMouseClick = this._handleCardMouseClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);

    this.state = {
      isPlaying: false,
      activeCard: null
    };

    this.timerId = null;
  }

  _handleCardMouseClick(evt) {
    const {film, onCardClick} = this.props;

    evt.preventDefault();
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    onCardClick(film.id);
  }

  _handleCardMouseEnter() {
    const {film} = this.props;

    this.setState({
      activeCard: film
    });
    this.timerId = setTimeout(()=> {
      this.setState({
        isPlaying: true
      });
    }, PREVIEW_DELAY);
  }

  _handleCardMouseLeave() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.setState({
        activeCard: null,
        isPlaying: false
      });
    }
  }

  render() {
    const {film} = this.props;
    const {title, imagePreview, previewSrc} = film;

    return (
      <article className="small-movie-card catalog__movies-card"
        onClick={this._handleCardMouseClick}
        onMouseEnter={this._handleCardMouseEnter}
        onMouseLeave={this._handleCardMouseLeave}>
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewSrc}
            isPlaying={this.state.isPlaying}
            previewImage={`img/${imagePreview}`}
            muted={true}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="#">{title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
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
  onCardClick: PropTypes.func.isRequired,
};

