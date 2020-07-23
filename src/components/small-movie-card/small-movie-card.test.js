import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';

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
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 200
};

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

it(`SmallMovieCard should render correct`, () =>{
  const tree = renderer.create(
      <SmallMovieCard
        film={film}
        onCardClick={() => {}}
        onCardMouseEnter={() => {}}
        onCardMouseLeave={() => {}}
        activeCardId={0}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
