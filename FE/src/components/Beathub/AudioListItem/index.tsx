import React, { useState, useRef } from 'react';

// component
import { ProfileImage } from 'components/atoms';
import AudioPlayer from 'components/Beathub/AudioPlayer';

// types
import { AudioInfo } from 'types';

// styles
import {
  Divider, Chip, Avatar,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  IconButton, Tooltip
} from '@mui/material';

import ArrowRight from '@mui/icons-material/ArrowRight';
import Settings from '@mui/icons-material/Settings';
import Wrapper from './styles';

// assets
import drum from 'assets/svgs/instruments/drum-solid.svg'
import guitar from 'assets/svgs/instruments/guitar-solid.svg'

const instrumentUrl: {[key: string]: string} = {
  "drum": drum,
  "guitar": guitar,
  "piano": drum,
  "vocal": drum
}

interface Props {
  AudioInfo: AudioInfo;
}

function AudioListItem({ AudioInfo }: Props): React.ReactElement {

  // 악기 아이콘
  const instrument = AudioInfo.instrument
  const instrumentSrc = instrumentUrl[instrument]
  // const instrumentIcon = new Image()
  // instrumentIcon.src = instrumentUrl[instrument]


  // 플레이어를 열고 닫는 변수
  const [ isPlayerOn, setIsPlayerOn ] = useState(false)
  const [ Playing, setPlaying ] = useState(false)

  const music = new Audio(AudioInfo.fileUrl)
  const audioRef = useRef<HTMLAudioElement>(null);

  // 플레이어를 열고 닫음
  const openPlayer = () => {
    isPlayerOn
      ? setIsPlayerOn(false)
      : setIsPlayerOn(true)
    }

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
      <Chip icon={<Avatar alt="instrument" src={instrumentSrc} sx={{ width: 20, height: 20 }}/>}  variant="outlined" color="primary" label={AudioInfo.instrument} />
      <ListItem component="div" className="list-item">
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon>
            <ProfileImage url={AudioInfo.userInfo.imageUrl} />       
          </ListItemIcon>
          <ListItemText
            primary={AudioInfo.title}
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'medium',
              variant: 'body2',
            }}
            secondary={AudioInfo.title}
          />
          <ListItemText
            primary={AudioInfo.userInfo.name}
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'medium',
              variant: 'body2',
            }}
            secondary={AudioInfo.instrument}
          />
        </ListItemButton>
        <Tooltip title="Open Player">
          <IconButton
            onClick={openPlayer}
            size="large"
            sx={{
              '& svg': {
                color: 'rgba(255,255,255,0.8)',
                transition: '0.2s',
                transform: 'translateX(0) rotate(0)',
              },
              '&:hover, &:focus': {
                bgcolor: 'unset',
                '& svg:first-of-type': {
                  transform: 'translateX(-4px) rotate(-20deg)',
                },
                '& svg:last-of-type': {
                  right: 0,
                  opacity: 1,
                },
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                height: '80%',
                display: 'block',
                left: 0,
                width: '1px',
                bgcolor: 'divider',
              },
            }}
          >
            <Settings />
            <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
          </IconButton>
        </Tooltip>
      </ListItem>
      {/* player */}
      {isPlayerOn &&
        <div>
        <audio
          ref={audioRef}
          src={AudioInfo.fileUrl}
        />
        <AudioPlayer fileUrl={AudioInfo.fileUrl}/>
        <div className="loading">
          <div className="spinner"></div>
        </div>
        <div className="play-pause-btn" onClick={togglePlay}>
          <p>{Playing?"playingtrue":"playingfalse"}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
            <path fill="#566574" fillRule="evenodd" d={Playing? "M0 0h6v24H0zM12 0h6v24h-6z":"M18 12L0 24V0"} className="play-pause-icon" id="playPause"/>
          </svg>
        </div>
        </div>
      }
      <Divider />
    </Wrapper>
  );
}

export default AudioListItem;
