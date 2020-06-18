import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const films = [
  {
    title: `The Grand Budapest Hotel`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2001,
  },
  {
    title: `Bohemian Rhapsody`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2014,
  },
  {
    title: `Macbeth`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2000,
  },
  {
    title: `Aviator`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2012,
  },
  {
    title: `We need to talk about Kevin`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Crime`,
    releaseDate: 2018,
  },
  {
    title: `What We Do in the Shadows`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2005,
  },
  {
    title: `Pulp Fiction`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2003,
  },
  {
    title: `No Country for Old Men`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2014,
  },
];

it(`App should render correct`, () => {
  const tree = renderer.create(
      <App
        films={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
