import React, { useState, useRef } from 'react';

// component
import MusicPlayer from 'components/Beathub/MusicPlayer';
import { ProfileImage } from 'components/atoms';

// types
import { AudioInfo } from 'types';

// libraries


// styles
import {
  Divider, Chip, Avatar, CardMedia,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  IconButton, Tooltip
} from '@mui/material';
import { purple, deepPurple } from '@mui/material/colors';

import ArrowRight from '@mui/icons-material/ArrowRight';
import MusicNote from '@mui/icons-material/MusicNote';
import Wrapper from './styles';

// assets
import vocal from 'assets/svgs/instruments/vocal-solid.svg';
import drum from 'assets/svgs/instruments/drum-solid.svg';
import keyboard from 'assets/svgs/instruments/keyboard-solid.svg';
import bass from 'assets/svgs/instruments/bass-solid.svg';
import electricGuitar from 'assets/svgs/instruments/electric-guitar-solid.svg';
import acousticGuitar from 'assets/svgs/instruments/acoustic-guitar-solid.svg';
import etc from 'assets/svgs/instruments/etc-solid.svg';

const instrumentUrl: {[key: string]: string} = {
  "vocal": vocal,
  "keyboard": keyboard,
  "electricGuitar": electricGuitar,
  "acousticGuitar": acousticGuitar,
  "bass": bass,
  "drum": drum,
  "etc": etc,
}

interface Props {
  AudioInfo: AudioInfo;
}

function AudioListItemForHome({ AudioInfo }: Props): React.ReactElement {

  // 악기 아이콘
  const instrument = AudioInfo.instrumentType
  const instrumentSrc = instrumentUrl[instrument]
  // const instrumentIcon = new Image()
  // instrumentIcon.src = instrumentUrl[instrument]

  // 플레이어를 열고 닫는 변수
  const [ isPlayerOn, setIsPlayerOn ] = useState(false)

  // 플레이어를 열고 닫음
  const openPlayer = () => {
    isPlayerOn
      ? setIsPlayerOn(false)
      : setIsPlayerOn(true)
  }
  
  return (
    <Wrapper className="blur">
      <Chip className="instrument-chip" icon={<Avatar alt="instrument" src={instrumentSrc} sx={{ width: 20, height: 20 }}/>}  variant="outlined" label={AudioInfo.instrumentType} />
      {/* default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined */}
      <ListItem component="div" className="list-item">
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon>
            <CardMedia
              component="img"
              sx={{ width: 50, height: 50 }}
              image={AudioInfo.uploader.imageUrl}
              alt="audio-profile"
            />
          </ListItemIcon>
          <ListItemText
            primary={AudioInfo.filename}
            primaryTypographyProps={{
              color: '#7B42F6',
              fontWeight: 'medium',
              variant: 'body2',
            }}
            secondary={AudioInfo.filename}
          />
          <ListItemText
            primary={AudioInfo.uploader.name}
            primaryTypographyProps={{
              color: '#7B42F6',
              fontWeight: 'medium',
              variant: 'body2',
            }}
            secondary={AudioInfo.instrumentType}
          />
        </ListItemButton>
        <Tooltip title="Open Player">
          <IconButton
            onClick={openPlayer}
            size="large"
            sx={{
              '& svg': {
                color: 'rgba(123, 66, 246)',
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
            <MusicNote />
            <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
          </IconButton>
        </Tooltip>
      </ListItem>
      {/* player */}
      {isPlayerOn &&
        <div>
        <MusicPlayer fileUrl={AudioInfo.filepath}/>
        </div>
      }
      <Divider />
    </Wrapper>
  );
}

export default AudioListItemForHome;
