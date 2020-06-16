import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const movieTitle = `Fantastic Beasts`;

it(`PreviewMovieCard title should be clicked`, () => {
  const previewMovieCardTitleClickHandler = jest.fn();

  const previewMovieCard = shallow(
      <SmallMovieCard
        movieTitle={movieTitle}
        onTitleClick={previewMovieCardTitleClickHandler}
      />);

  const previewMovieCardTitle = previewMovieCard.find(`.small-movie-card__title`);

  previewMovieCardTitle.simulate(`click`);
  expect(previewMovieCardTitleClickHandler).toHaveBeenCalledTimes(1);
});
