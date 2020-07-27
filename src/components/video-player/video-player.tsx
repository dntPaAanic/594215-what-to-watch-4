import * as React from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  imagePreview: string;
  muted: boolean;
};

class VideoPlayer extends React.PureComponent<VideoPlayerProps> {
  private _videoRef: React.RefObject<HTMLVideoElement>;
  constructor(props: VideoPlayerProps) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount(): void {
    const {src, imagePreview, muted} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = imagePreview;
    video.muted = muted;
  }

  componentWillUnmount(): void {
    const video = this._videoRef.current;

    video.src = ``;
  }

  componentDidUpdate(): void {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  render(): React.ReactNode {
    return (
      <video ref={this._videoRef}
        width="280"
        height="175"
      />
    );
  }
}

export default VideoPlayer;
