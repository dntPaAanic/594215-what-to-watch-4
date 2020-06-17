import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const films = [
  {
    title: `The Grand Budapest Hotel`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: `2001`,
  },
  {
    title: `Bohemian Rhapsody`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: `2014`,
  },
  {
    title: `Macbeth`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: `2000`,
  },
  {
    title: `Aviator`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: `2012`,
  },
  {
    title: `We need to talk about Kevin`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Crime`,
    releaseDate: `2018`,
  },
  {
    title: `What We Do in the Shadows`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: `2005`,
  },
  {
    title: `Pulp Fiction`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: `2003`,
  },
  {
    title: `No Country for Old Men`,
    image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: `2014`,
  },
];

it(`MoviesList should render correct`, () => {
  const tree = renderer
    .create(<MoviesList films={films} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
