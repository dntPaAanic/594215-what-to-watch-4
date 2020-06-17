import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Pulp Fiction`,
  image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  releaseDate: `2003`,
};

describe(`SmallMovieCard group`, () => {
  const titleClickHandler = jest.fn();
  const cardMouseEnterHandler = jest.fn();
  const cardMouseLeaveHandler = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onTitleClick={titleClickHandler}
        onCardMouseEnter={cardMouseEnterHandler}
        onCardMouseLeave={cardMouseLeaveHandler}
      />);

  it(`SmallMovieCard title click is correct`, () => {
    const smallMovieCardTitle = smallMovieCard.find(`.small-movie-card__title`);

    smallMovieCardTitle.simulate(`click`);
    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`SmallMovieCard mouseenter is correct`, () => {
    smallMovieCard.simulate(`mouseenter`);
    expect(cardMouseEnterHandler).toHaveBeenCalledTimes(1);
    expect(cardMouseEnterHandler).toBeCalledWith(film);
  });

  it(`SmallMovieCard mouseleave is correct`, () => {
    smallMovieCard.simulate(`mouseleave`);
    expect(cardMouseLeaveHandler).toHaveBeenCalledTimes(1);
  });
});