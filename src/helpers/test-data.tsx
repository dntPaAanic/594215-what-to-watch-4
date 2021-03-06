import {Film} from "../types";

const films: Film[] = [
  {
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
    runTime: `100`,
    backgroundColor: `black`,
    isFavorite: false,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
];

const film: Film = {
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
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `100`,
  backgroundColor: `black`,
  isFavorite: false,
};

const comments = [
  {
    id: 1,
    review: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 31,
      name: `Kate Muir`
    },
    date: `December 24, 2016`,
    rating: 5.5
  },
  {
    id: 2,
    review: `Andersons films are too precious for some, but for those of us willing to lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    user: {
      id: 16,
      name: `Bill Goodykoontz`,
    },
    date: `November 18, 2015`,
    rating: 8.0
  }
];

export {films, film, comments};
