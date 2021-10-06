import React, { useRef, useState, useEffect } from 'react';

// component

// types

// styles

// libraries
import Wave from '@foobar404/wave';
import dump from '../AudioUpload/dump.mp3'

function AudioVisualizer() {
  let [wave] = useState(new Wave())
  let [audioElement, setAudioElement] = useState(null)
  let [audioUrl, setAudioUrl] = useState(dump)
  let [state, setState] = useState({ playing: false, volume: .5, time: 0, duration: 1000 })
  let [visual, setVisual] = useState('flower')


  const audioRef = useRef(null);


  useEffect(() => {

    //prep audio & state
    // const elm = document.querySelector("#player")
    // setAudioElement(elm)
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
    <>
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
      <canvas className="playerCanvas" id="playerCanvas" width="1000" height="800"></canvas>
      <audio hidden id="player" src={audioUrl} crossOrigin="anonymous"></audio>
    </>
  );
}

export default AudioVisualizer;
