import React, { useRef, useState, useEffect } from 'react';
import { Rating, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
// component

// types

// styles
import Wrapper from './styles';

// libraries
import Wave from '@foobar404/wave';
// import dump from '../AudioUpload/dump.mp3'
import { reducer, initState } from "lib/api/beathub/chageVisual"

// audios
import Home from 'assets/Audios/choiyegeun-band-BBIBBI.mp3'

function AudioVisualizer() {
  const [artist, setArtist] = useState('artist');
  const [title, setTitle] = useState('title');

  let [wave] = useState(new Wave())
  let [audioElement, setAudioElement] = useState(null)
  let [audioUrl, setAudioUrl] = useState(Home)
  let [state, setState] = useState({ playing: false, volume: .5, time: 0, duration: 1000 })
  let [visual, setVisual] = useState('flower')

  // raiting
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [rated, setRated] = useState(false)

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };


  const audioRef = useRef(null);



  useEffect(() => {
    setArtist('Choi-ye-geun Band')
    setTitle('BBIBBI (original song. 아이유 - BBIBBI)')

    //prep audio & state
    let audio = new Audio('http://cdn.atrera.com/audio/Marcel_Pequel_-_01_-_One.mp3')
    setAudioElement(audio)
    handleState("duration", (!audio.duration) ? 1000 : audio.duration)
    audio.volume = .5

    //create wave visual
    // wave.fromElement("player", "playerCanvas", { type: "bars", colors: ["silver", "white"] })
    wave.fromElement("player", "playerCanvas", { type: visual, colors: ["silver", "white"] })

    //update time tracker
    let timeLoop = setInterval(() => {
        handleState("time", audio.currentTime)
    }, 500)
    
    return () => {
        clearInterval(timeLoop)
    }
  }, [])

  // const options = {type:"bars"};
  // wave.fromElement("audio_element_id","canvas_id", options);

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
    if (state.playing) {
      Pause()
      setState(state => {
        console.log(state)
        return {
            ...state,
            playing: false
        }
      })
    } else {
      Play()
      setState(state => {
        console.log(state)
        return {
            ...state,
            playing: true
        }
      })
    }
  }


  function handleState(key, value) {
      setState(state => {
          return {
              ...state,
              [key]: value
          }
      })
  }

  // function updateTime(value) {
  //     handleState("time", value)
  //     audioElement.currentTime = value
  // }

  // function updateVolume(value) {
  //     handleState("volume", value)
  //     audioElement.volume = value
  // }
  
  // function uploadFile() {
  //   let fileElm = document.getElementById("importSong");
  //   fileElm.click()

  //   fileElm.addEventListener("change", () => {
  //       let file = fileElm.files[0]
  //       if (!file.type.startsWith("audio"))
  //           return
  //       let src = URL.createObjectURL(file)

  //       audioElement.src = src
  //       audioElement.play()
  //       handleState("playing", true)
  //   }, { once: true })
  // }

  return (
    <Wrapper>
      <div className="visualizer-info-container">
        <div className="top-container">
          <div className="title-container">
            <h1 className="title">Play of This Week</h1>
            <audio
              ref={audioRef}
              id="player"
              src={audioUrl}
              crossOrigin="anonymous"
              />
            <div className="play-pause-btn" onClick={togglePlay}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                  <path fill="#566574" fillRule="evenodd" d={state.playing? "M0 0h6v24H0zM12 0h6v24h-6z":"M18 12L0 24V0"} className="play-pause-icon" id="playPause"/>
                </svg>
            </div>
          </div>
          {/* rating */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {rated
              ? (<Box sx={{ p: 1, ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)
              : (<Box sx={{ p: 1, ml: 2 }}>Rate Now!</Box>)
            }
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                setRated(true);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.3 }} color="secondary" fontSize="inherit" />}
              />
          </Box>
        </div>
        <h4>{artist} - {title}</h4>
      </div>

      <canvas className="playerCanvas" id="playerCanvas" width="550" height="550"></canvas>
      <audio hidden id="player" src={audioUrl} crossOrigin="anonymous"></audio>
    </Wrapper>
  );
}

export default AudioVisualizer;
