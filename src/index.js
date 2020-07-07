import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

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

ReactDOM.render(
    <Provider store={store}>
      <App
        mainMovie={movieMock}
      />
    </Provider>,
    document.querySelector(`#root`)
);

