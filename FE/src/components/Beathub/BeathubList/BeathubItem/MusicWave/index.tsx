import React from "react";
import ReactWaves from "@dschoon/react-waves";

import Wrapper from './styles'

interface Props {
  Audio: string,
  playing: boolean,
  restart: boolean
}

interface State {
  wavesurfer: any,
  pos: number,
}

export default class MusicWave extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      wavesurfer: {},
      pos: 0,
    };
  }

  onPosChange = (pos?: any, wavesurfer?: any) =>  {
    if (pos !== this.state.pos) {
      this.setState({ pos, wavesurfer });
    }
  };

  stop = () => {
    this.state.wavesurfer.seekTo(0);
  };

  render() {

    if (this.props.restart === true) {
      this.stop();
    }

    return (
      <div>
        <ReactWaves
          audioFile={this.props.Audio}
          className={"react-waves"}
          options={{
            barHeight: 2,
            cursorWidth: 1,
            height: 30,
            hideScrollbar: true,
            progressColor: "#B01EFF",
            responsive: true,
            waveColor: "#D1D6DA",
          }}
          volume={1}
          zoom={1}
          playing={this.props.playing}
          pos={this.state.pos}
          onPosChange={this.onPosChange}
        />
      </div>
    )
  }
}