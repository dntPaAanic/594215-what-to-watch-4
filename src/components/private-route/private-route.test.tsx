import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '../../history';
import configureStore from 'redux-mock-store';
import PrivateRoute from './private-route';
import Namespace from '../../reducer/name-space';
import {films} from '../../helpers/test-data';

it(`PrivateRoute should render correct`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    [Namespace.FILMS]: {
      movieCards: films,
      mainMovie: films[0],
      filterType: `All genres`,
      showingCards: 8,
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

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <PrivateRoute exact path={`/login`} isAuthed={false} render={() => HTMLElement as React.ReactNode}/>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }}).toJSON();

  expect(tree).toMatchSnapshot();
});
