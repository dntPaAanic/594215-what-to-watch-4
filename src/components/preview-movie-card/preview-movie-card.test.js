import React from 'react';
import renderer from 'react-test-renderer';
import PreviewMovieCard from './preview-movie-card.jsx';

const movieTitle = `Fantastic Beasts`;

it(`PreviewMovieCars should render Fantastic Beasts`, () =>{
  const tree = renderer.create(
      <PreviewMovieCard
        movieTitle={movieTitle}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
