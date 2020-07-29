import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {AddReview} from './add-review';
import configureStore from 'redux-mock-store';
import Namespace from '../../reducer/name-space';
import {Provider} from 'react-redux';
import {film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

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
              onIsValidChange={noop}
              onSubmit={noop}
            />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
