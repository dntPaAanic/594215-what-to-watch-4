import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

configure({
  adapter: new Adapter(),
});

const film = {
  imagePreview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const getPlayer = (isPlaying) => {
  return mount(
      <VideoPlayer
        src={film.previewSrc}
        isPlaying={isPlaying}
        imagePreview={film.imagePreview}
        muted={true}
      />
  );
};

describe(`VideoPlayer e2e tests`, () => {
  it(`VideoPlayer start work correctly`, () => {
    expect(getPlayer(true).props().isPlaying).toEqual(true);
  });

  it(`VideoPlayer pause work correctly`, () => {
    expect(getPlayer(false).props().isPlaying).toEqual(false);
  });
});
