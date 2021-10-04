import React from "react";
import ReactWaves from "@dschoon/react-waves";

import Wrapper from './styles'

interface Props {
  Audio: string,
  playing: boolean
}

function MusicWave ({ Audio, playing }: Props) {

  return (
    <Wrapper>
      <ReactWaves
        audioFile={Audio}
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
        playing={playing}
      />
    </Wrapper>
  );
}

export default MusicWave 