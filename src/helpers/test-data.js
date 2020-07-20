const films = [
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
    runTime: 100
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genre: `Comedy`,
    releaseDate: 2014,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 6.6,
    ratingCount: 260,
    description: `In the ro, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Random Name`,
    starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe`, `Bill Murray`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 110
  },
  {
    id: 2,
    title: `Macbeth`,
    genre: `Comedy`,
    releaseDate: 2000,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 2.3,
    ratingCount: 140,
    description: `In the 193 concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Bradley Caldwell`,
    starring: [`Bill Murray`, `Jude Law`, `Willem Dafoe`, `Edward Norton`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 120
  },
  {
    id: 3,
    title: `Aviator`,
    genre: `Comedy`,
    releaseDate: 2012,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 1.2,
    ratingCount: 60,
    description: `In the uropean ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Junior Hanna`,
    starring: [`Bill Murray`, `Edward Norton`, `Willem Dafoe`, `Jude Law`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 200
  },
  {
    id: 4,
    title: `We need to talk about Kevin`,
    genre: `Crime`,
    releaseDate: 2018,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 2.3,
    ratingCount: 24,
    description: ` European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Fannie Valencia`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 300
  },
  {
    id: 5,
    title: `What We Do in the Shadows`,
    genre: `Drama`,
    releaseDate: 2005,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 3.5,
    ratingCount: 24,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided oFiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Lily-Ann Espinoza`,
    starring: [`Polly Gibson`, `Edward Norton`, `Maxine Britt`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 160
  },
  {
    id: 6,
    title: `Pulp Fiction`,
    genre: `Drama`,
    releaseDate: 2003,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.5,
    ratingCount: 20,
    description: `In the 1930s, tsort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Gabriela Garza`,
    starring: [`Maxine Britt`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 190
  },
  {
    id: 7,
    title: `No Country for Old Men`,
    genre: `Comedy`,
    releaseDate: 2014,
    imagePoster: `the-grand-budapest-hotel-poster.jpg`,
    imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imageBackground: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 6.7,
    ratingCount: 40,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resoe H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Herman Alston`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Maxine Britt`],
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: 122
  },
];

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
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 100,
  comments: [
    {
      id: 0,
      review: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `December 24, 2016`,
      rating: `8,9`
    },
    {
      id: 1,
      review: `Andersons films are too precious for some, but for those of us willing to lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      rating: `8,0`
    },
  ],
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