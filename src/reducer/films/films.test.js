import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {reducer, ActionCreator, ActionType, Operation} from './films.js';

const api = createAPI(() => {});


const movieMock = {
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
    runTime: 110,
    comments: [
      {
        id: 0,
        review: `I didnt find it amusing, and while I can appreciate the creativity, its an hour and 40 minutes I wish I could take back.`,
        author: `Amanda Greever`,
        date: `November 18, 2015`,
        rating: `8,0`
      },
    ],
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
    runTime: 120,
    comments: [
      {
        id: 0,
        review: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        author: `Matthew Lickona`,
        date: `December 20, 2016`,
        rating: `7,2`
      },
      {
        id: 1,
        review: `Andersons films are too precious for some, but for those of us willing to lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `November 18, 2015`,
        rating: `8,0`
      },
    ],
  },
  {
    id: 3,
    title: `Aviator`,
    genre: `Thriller`,
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
    runTime: 200,
    comments: [
      {
        id: 0,
        review: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rating: `7,6`
      },
    ],
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
    runTime: 300,
    comments: [
      {
        id: 0,
        review: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rating: `7,6`
      },
    ],
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
    runTime: 160,
    comments: [],
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
    runTime: 190,
    comments: [
      {
        id: 0,
        review: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `December 20, 2016`,
        rating: `6,6`
      },
    ],
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
    runTime: 122,
    comments: [],
  },
];

const FilmsCount = {
  ON_START: 8,
  BY_BUTTON_CLICK: 8
};

const ALL_GENRES = `All genres`;

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movieCards: [],
      mainMovie: {},
      filterType: ALL_GENRES,
      showingCards: FilmsCount.ON_START,
      currentMovie: -1,
      isFullVideoPlayerVisible: false,
      isAppLoading: false
    });
  });

  it(`Reducer should should update movieCards by load films`, () => {
    expect(reducer({
      movieCards: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual({
      movieCards: films,
    });
  });

  it(`Reducer should update mainMovie by loadMainMovie`, () => {
    expect(reducer({
      mainMovie: {},
    }, {
      type: ActionType.LOAD_MAIN_MOVIE,
      payload: movieMock,
    })).toEqual({
      mainMovie: movieMock,
    });
  });

  it(`Reducer should correctly increment showingCardsCount by a given value`, () => {
    expect(reducer({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCards: 1
    }, {
      type: ActionType.INCREMENT_SHOWING_CARDS,
      payload: 1
    })).toEqual({
      movieCards: films,
      filterType: ALL_GENRES,
      showingCards: 2
    });
  });

  it(`Reducer should correctly change flag of FullVideoPlayer Visibility`, () => {
    expect(reducer({
      isFullVideoPlayerVisible: false
    }, {
      type: ActionType.CHANGE_VISIBILITY,
    })).toEqual({
      isFullVideoPlayerVisible: true
    });
  });

  it(`Reducer should correctly set main movie load state by a given value`, () => {
    expect(reducer({
      isAppLoading: false,
    }, {
      type: ActionType.SET_PRELOADER_STATE,
      payload: true
    })).toEqual({
      isAppLoading: true,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for loadFilms returns correct action`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films
    });
  });


  it(`Action creator for loadMainMovie returns correct action`, () => {
    expect(ActionCreator.loadMainMovie(movieMock)).toEqual({
      type: ActionType.LOAD_MAIN_MOVIE,
      payload: movieMock
    });
  });

  it(`Action creator for incrementShowingCards returns correct action`, () => {
    expect(ActionCreator.incrementShowingCards()).toEqual({
      type: ActionType.INCREMENT_SHOWING_CARDS,
      payload: FilmsCount.BY_BUTTON_CLICK
    });
  });

  it(`Action creator for setMovieCardId returns correct action`, () => {
    expect(ActionCreator.setMovieCardId(1)).toEqual({
      type: ActionType.SET_MOVIE_CARD_ID,
      payload: 1
    });
  });

  it(`Action creator for changeVisibility returns correct action`, () => {
    expect(ActionCreator.changeVisibility()).toEqual({
      type: ActionType.CHANGE_VISIBILITY,
    });
  });

  it(`Action creator for setPreloaderState returns correct action`, () => {
    expect(ActionCreator.setPreloaderState(true)).toEqual({
      type: ActionType.SET_PRELOADER_STATE,
      payload: true
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, []);

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: []
      });
    });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMainMovie();

    apiMock.onGet(`/films/promo`).reply(200, {});

    return moviesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_MAIN_MOVIE,
        payload: {}
      });
    });
  });
});
