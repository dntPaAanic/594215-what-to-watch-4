import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: 2014
};

const moviesTitle = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

it(`Main should render correct`, () => {
  const tree = renderer.create(
      <Main
        movieTitle={Movie.TITLE}
        movieGenre={Movie.GENRE}
        movieReleaseDate={Movie.DATE}
        moviesTitle={moviesTitle}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
