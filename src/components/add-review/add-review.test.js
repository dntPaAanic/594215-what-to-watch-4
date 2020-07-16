import React from 'react';
import renderer from 'react-test-renderer';
import {AddReview} from './add-review.jsx';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space.js';
import {Provider} from 'react-redux';

const film = {
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
};

jest.mock(`react-router-dom`, () => ({Link: `Link`}));

const mockStore = configureStore([]);

const store = mockStore({
  [Namespace.FILMS]: {
    movieCards: [film],
    mainMovie: film,
    filterType: `All genres`,
    showingCards: 8,
    currentMovie: 1,
    isFullVideoPlayerVisible: false,
    isAppLoading: false
  },
  [Namespace.USER]: {
    authorizationStatus: false,
  },
  [Namespace.COMMENTS]: {
    comments: [],
    isCommentsLoaded: false
  }
});

describe(`AddReview tests`, () => {
  it(`AddReview should render correct`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <AddReview
              film={film}
              isValid={true}
              onIsValidChange={() => {}}
              onSubmit={() => {}}
            />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
