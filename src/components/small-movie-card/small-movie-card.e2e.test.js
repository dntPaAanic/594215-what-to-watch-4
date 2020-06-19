import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  id: 0,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2001,
  imagePoster: `the-grand-budapest-hotel-poster.jpg`,
  imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  imageBackground: `bg-the-grand-budapest-hotel.jpg`,
  ratingScore: 10,
  ratingCount: 240,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
};

describe(`SmallMovieCard group`, () => {
  const cardClickHandler = jest.fn();
  const cardMouseEnterHandler = jest.fn();
  const cardMouseLeaveHandler = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onCardClick={cardClickHandler}
        onCardMouseEnter={cardMouseEnterHandler}
        onCardMouseLeave={cardMouseLeaveHandler}
      />);

  it(`SmallMovieCard title click is correct`, () => {
    smallMovieCard.simulate(`click`, {preventDefault() {}});
    expect(cardClickHandler).toHaveBeenCalledTimes(1);
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
