import * as React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {PREVIEW_DELAY} from '../../helpers/const';
import {Film} from '../../types';

type MoviesListProps = {
  films: Film[];
  onCardClick: (id: number | string) => void;
  onActiveItemChange: (id: number | string) => void;
  activeItem: number;
};

class MoviesList extends React.PureComponent<MoviesListProps> {
  private timerId: number;
  constructor(props: MoviesListProps) {
    super(props);

    this._handleCardMouseClick = this._handleCardMouseClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);

    this.timerId = null;
  }

  _handleCardMouseClick(id: number): void {
    const {onCardClick} = this.props;

    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    onCardClick(id);
  }

  _handleCardMouseEnter(id: number): void {
    const {onActiveItemChange} = this.props;

    this.timerId = window.setTimeout(() => {
      onActiveItemChange(id);
    }, PREVIEW_DELAY);
  }

  _handleCardMouseLeave(): void {
    const {onActiveItemChange} = this.props;
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    onActiveItemChange(-1);
  }

  render(): React.ReactNode {
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

export default MoviesList;
