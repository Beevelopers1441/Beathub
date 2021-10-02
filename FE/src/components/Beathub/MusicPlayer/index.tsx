import React, {useState, useRef} from 'react';

// types

// libraries
// import { deepmerge } from '@mui/utils';
import { createTheme , ThemeProvider } from '@mui/material';
import AudioPlayer from 'material-ui-audio-player';

// styles
import Wrapper from './styles';

interface Props {
  fileUrl: string;
}

function MusicPlayer({ fileUrl }: Props): React.ReactElement {

  // 오디오 플레이어 생성
  const playerTheme = createTheme({});

  // const [ Playing, setPlaying ] = useState(false)
  // const audioRef = useRef<HTMLAudioElement>(null);

  // const Play = () => {
  //   if (audioRef.current) {
  //     // const playPromise = music.play();
  //     const playPromise = audioRef.current.play();
  //     if (playPromise !== undefined) {
  //       playPromise
  //         .then(_ => {
  //           // Automatic playback started!
  //           // Show playing UI.
  //           console.log("audio played auto");
  //         })
  //         .catch(error => {
  //           // Auto-play was prevented
  //           // Show paused UI.
  //           console.log("playback prevented");
  //         });
  //     }
  //     // setPlaying(true)
  //   }
  // }

  // const Pause = () => {
  //   if (audioRef.current) {
  //     // music.pause()
  //     audioRef.current.pause()
  //   }
  // }
  
  // // 음악을 재생 또는 일시정지
  // function togglePlay() {
  //   Playing
  //   ? Pause()
  //   : Play()
  //   setPlaying(!Playing)
  // }

  return (
    <Wrapper>
      <p>audio player</p>
      <ThemeProvider theme={playerTheme}>
        <AudioPlayer src={fileUrl} />
      </ThemeProvider>;
      {/* <audio
          ref={audioRef}
          src={fileUrl}
        /> */}
      {/* <div className="play-pause-btn" onClick={togglePlay}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
            <path fill="#566574" fillRule="evenodd" d={Playing? "M0 0h6v24H0zM12 0h6v24h-6z":"M18 12L0 24V0"} className="play-pause-icon" id="playPause"/>
          </svg>
      </div> */}
    </Wrapper>
  );
}

export default MusicPlayer;
