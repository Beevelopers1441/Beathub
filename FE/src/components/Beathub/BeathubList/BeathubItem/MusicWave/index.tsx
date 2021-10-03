import React, { useState } from "react";
import ReactWaves from "@dschoon/react-waves";

interface Props {
  Audio: string
}

function MusicWave ({ Audio }: Props) {

  const [playing, setPlaying] = useState<boolean>(false)
  // const audio = 

  return (
    <div className={"container example"}>
      <div
        className="play button"
        onClick={() => {
          setPlaying(!playing);
        }}
      >
        {playing ? "■" : "▶"}
      </div>
      <ReactWaves
        audioFile={Audio}
        className={"react-waves"}
        options={{
          barHeight: 2,
          cursorWidth: 0,
          height: 100,
          hideScrollbar: true,
          progressColor: "#EC407A",
          responsive: true,
          waveColor: "#D1D6DA",
        }}
        volume={1}
        zoom={1}
        playing={playing}
      />
    </div>
  );
}

export default MusicWave 