import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';
import {film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

const mockEvent = {
  preventDefault: noop,
};

configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard group`, () => {
  const cardClickHandler = jest.fn();
  const cardMouseEnterHandler = jest.fn();
  const cardMouseLeaveHandler = jest.fn();

  const wrapper = shallow(
      <SmallMovieCard
        film={film}
        onCardClick={cardClickHandler}
        onCardMouseEnter={cardMouseEnterHandler}
        onCardMouseLeave={cardMouseLeaveHandler}
        activeCardId={0}
      />);
  const smallCard = wrapper.find(`article`);

  it(`SmallMovieCard card click is correct`, () => {
    smallCard.simulate(`click`, mockEvent);
    expect(cardClickHandler).toHaveBeenCalledTimes(1);
    expect(cardClickHandler.mock.calls[0][0]).toEqual(film.id);
  });

  it(`SmallMovieCard mouseenter event is correct`, () => {
    smallCard.simulate(`mouseenter`);
    expect(cardMouseEnterHandler).toHaveBeenCalledTimes(1);
    expect(cardMouseEnterHandler).toBeCalledWith(film.id);
  });

  it(`SmallMovieCard mouseleave event is correct`, () => {
    smallCard.simulate(`mouseleave`);
    expect(cardMouseLeaveHandler).toHaveBeenCalledTimes(1);
  });
});
