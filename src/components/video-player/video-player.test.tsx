import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import {film} from '../../helpers/test-data';

it(`VideoPlayer should render correct`, () => {
  const tree = renderer.create(
      <VideoPlayer
        src={film.previewSrc}
        isPlaying={false}
        imagePreview={film.imagePreview}
        muted={true}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
