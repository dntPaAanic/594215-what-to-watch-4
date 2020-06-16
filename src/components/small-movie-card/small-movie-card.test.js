import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const movieTitle = `Fantastic Beasts`;

it(`SmallMovieCard should render Fantastic Beasts`, () =>{
  const tree = renderer.create(
      <SmallMovieCard
        movieTitle={movieTitle}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
