import React, { useRef, useState, useEffect, useReducer } from 'react';

// component
import ColorPicker from './ColorPicker';

// types

// styles
import Wrapper from './styles';
import { Rating, Box, Button, ToggleButtonGroup, ToggleButton  } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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
  let [state, dispatch] = useReducer(reducer, initState)
  let [playingState, setPlayingState] = useState({ playing: false, volume: .5, time: 0, duration: 1000 })
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
  const canvasRef = useRef(null);
  // const canvas = canvasRef.current
  const canvas = canvasRef

  useEffect(() => {
    // resizing
    function resizeCanvas() {
      canvas.current.width = window.innerWidth/2;
      canvas.current.height = window.innerHeight*0.5;
    }
    resizeCanvas();    ///call the first time page is loaded


    setArtist('Choi-ye-geun Band')
    setTitle('BBIBBI (original song. 아이유 - BBIBBI)')

    //prep audio & state
    let audio = new Audio('http://cdn.atrera.com/audio/Marcel_Pequel_-_01_-_One.mp3')
    setAudioElement(audio)
    handleState("duration", (!audio.duration) ? 1000 : audio.duration)
    audio.volume = .5

    //create wave visual
    // wave.fromElement("player", "playerCanvas", { type: "bars", colors: ["silver", "white"] })
    wave.fromElement("player", "playerCanvas", { type: state.activePreviewWave, colors: state.previewWaveColorMap[state.activePreviewWave] })
    // colors: ["silver", "white"]
    // colors: state.previewWaveColorMap[state.activePreviewWave]

    //update time tracker
    // let timeLoop = setInterval(() => {
    //     handleState("time", audio.currentTime)
    // }, 500)
    
    // return () => {
    //     clearInterval(timeLoop)
    // }
  }, [state.activePreviewWave, state.previewWaveColorMap])

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
    if (playingState.playing) {
      Pause()
      setPlayingState(playingState => {
        console.log(playingState)
        return {
            ...playingState,
            playing: false
        }
      })
    } else {
      Play()
      setPlayingState(playingState => {
        console.log(playingState)
        return {
            ...playingState,
            playing: true
        }
      })
    }
  }


  function handleState(key, value) {
      setPlayingState(playingState => {
          return {
              ...playingState,
              [key]: value
          }
      })
  }

  // 파형 바꾸는 로직
  const handleWaveChange = (wave) => {
    dispatch({ type: 'UPDATE_ACTIVE_WAVE', payload: wave})
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
            <h1 className="title">Play of <br/> This Week</h1>
            <audio
              ref={audioRef}
              id="player"
              src={audioUrl}
              crossOrigin="anonymous"
              />
            <div className="play-pause-btn" onClick={togglePlay}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                  <path fill="#566574" fillRule="evenodd" d={playingState.playing? "M0 0h6v24H0zM12 0h6v24h-6z":"M18 12L0 24V0"} className="play-pause-icon" id="playPause"/>
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

      <div className="flex-wrapper">
      {/* <ColorPicker state={state} dispatch={dispatch} /> */}
      <div className="visualizer-wave-container">
        <div className="flex-column-wrapper">
        <ToggleButtonGroup size="small" >
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('bars')} size="small">bars</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('bars blocks')} size="small">bars blocks</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('cubes')} size="small">cubes</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('dualbars')} size="small">dualbars</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('dualbars blocks')} size="small">dualbars blocks</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('fireworks')} size="small">fireworks</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('flower')} size="small">Flower</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('flower blocks')} size="small">flower blocks</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('orbs')} size="small">orbs</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup size="small" >
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('ring')} size="small">ring</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('rings')} size="small">rings</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('round wave')} size="small">round wave</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('shine')} size="small">shine</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('shine rings')} size="small">shine rings</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('shockwave')} size="small">shockwave</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('star')} size="small">star</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('static')} size="small">static</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('stitches')} size="small">stitches</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('web')} size="small">web</ToggleButton>
          <ToggleButton className="wave-btn" onClick={() => handleWaveChange('wave')} size="small">wave</ToggleButton>
        </ToggleButtonGroup>
      </div>
      </div>
      
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} className="playerCanvas" id="playerCanvas" width="550" height="550"></canvas>
        <audio hidden id="player" src={audioUrl} crossOrigin="anonymous"></audio>
      </div>
    </div>
    </Wrapper>
  );
}

export default AudioVisualizer;
