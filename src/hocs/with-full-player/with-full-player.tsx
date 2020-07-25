import * as React from 'react';
import {formatPlayerTime} from '../../helpers/utils';
import {Subtract} from 'utility-types';
import {Film} from '../../types';

interface State {
  isPlaying: boolean;
  videoDuration: number;
  currentTime: number;
}

interface InjectingProps {
  isPlaying: boolean;
  onFullscreenButtonClick: () => void;
  getPlaybackProgress: () => void;
  getElapsedTime: () => void;
  onPlayButtonClick: () => void;
  muted: boolean;
  autoPlay: boolean;
  film: Film;
}


const withFullPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithFullPlayer extends React.PureComponent<T, State> {
    private _videoRef: React.RefObject<HTMLVideoElement>;
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isPlaying: false,
        videoDuration: 0,
        currentTime: 0
      };

      this.handleVideoPlay = this.handleVideoPlay.bind(this);
      this.handleFullscreen = this.handleFullscreen.bind(this);
      this.getPlaybackProgress = this.getPlaybackProgress.bind(this);
      this.getElapsedTime = this.getElapsedTime.bind(this);
      this.timeUpdateHandler = this.timeUpdateHandler.bind(this);
      this.loadedMetadataHandler = this.loadedMetadataHandler.bind(this);
    }

    handleVideoPlay() {
      const video = this._videoRef.current;

      if (video.paused) {
        video.play();
        this.setState({isPlaying: true});
      } else {
        video.pause();
        this.setState({isPlaying: false});
      }
    }

    handleFullscreen(player) {
      if (document.fullscreenElement === player) {
        document.exitFullscreen();
      }

      player.requestFullscreen();
    }

    getPlaybackProgress() {
      return String((this.state.currentTime / this.state.videoDuration) * 100);
    }

    getElapsedTime() {
      return formatPlayerTime(this.state.videoDuration, this.state.currentTime);
    }

    timeUpdateHandler(evt) {
      this.setState({
        currentTime: Math.floor(evt.target.currentTime)
      });
    }

    loadedMetadataHandler(evt) {
      this.setState({
        isPlaying: this.props.autoPlay,
        videoDuration: Math.floor(evt.target.duration)
      });
    }

    render() {
      const {isPlaying} = this.state;

      const {film, muted, autoPlay} = this.props;
      const {imagePoster, videoLink} = film;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onFullscreenButtonClick={this.handleFullscreen}
          getPlaybackProgress={this.getPlaybackProgress}
          getElapsedTime={this.getElapsedTime}
          onPlayButtonClick={this.handleVideoPlay}
        >
          <video
            ref={this._videoRef}
            className="player__video"
            onClick={this.handleVideoPlay}
            poster={imagePoster}
            autoPlay={autoPlay}
            onLoadedMetadata={this.loadedMetadataHandler}
            onTimeUpdate={this.timeUpdateHandler}
            src={videoLink}
            muted={muted}
          />
        </Component>
      );
    }
  }

  return WithFullPlayer;
};

export default withFullPlayer;
