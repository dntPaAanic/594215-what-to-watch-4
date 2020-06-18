import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const film = {
  title: `Pulp Fiction`,
  imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  releaseDate: 2003,
};


it(`SmallMovieCard should render Fantastic Beasts`, () =>{
  const tree = renderer.create(
      <SmallMovieCard
        film={film}
        onTitleClick={() => {}}
        onCardMouseEnter={() => {}}
        onCardMouseLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
