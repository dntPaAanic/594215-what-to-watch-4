import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FullVideoPlayer from './full-video-player';
import {film} from '../../helpers/test-data';
import {noop} from '../../helpers/utils';

it(`VideoPlayer should render correct`, () => {
  const tree = renderer
    .create(
        <FullVideoPlayer
          onExitButtonClick={noop}
          film={film}
          isPlaying={false}
          onPlayButtonClick={noop}
          onFullscreenButtonClick={noop}
          getElapsedTime={noop}
          getPlaybackProgress={noop}
        >
          <video />
        </FullVideoPlayer>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
