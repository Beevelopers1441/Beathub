import React, {useState, useRef} from 'react';

// types

// styles
import Wrapper from './styles';

interface Props {
  fileUrl: string;
}


function AudioPlayer({ fileUrl }: Props): React.ReactElement {
  const [ Playing, setPlaying ] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);

  const Play = () => {
    if (audioRef.current) {
      // const playPromise = music.play();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
      // setPlaying(true)
    }
  }

  const Pause = () => {
    if (audioRef.current) {
      // music.pause()
      audioRef.current.pause()
    }
  }
  
  // 음악을 재생 또는 일시정지
  function togglePlay() {
    Playing
    ? Pause()
    : Play()
    setPlaying(!Playing)
  }

  return (
    <Wrapper>
      <p>audio player</p>
      <audio
          ref={audioRef}
          src={fileUrl}
        />
      <div className="play-pause-btn" onClick={togglePlay}>
          {/* <p>{Playing?"playingtrue":"playingfalse"}</p> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
            <path fill="#566574" fillRule="evenodd" d={Playing? "M0 0h6v24H0zM12 0h6v24h-6z":"M18 12L0 24V0"} className="play-pause-icon" id="playPause"/>
          </svg>
      </div>
    </Wrapper>
  );
}

export default AudioPlayer;
