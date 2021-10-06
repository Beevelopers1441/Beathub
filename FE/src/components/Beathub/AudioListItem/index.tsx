import React, { useState, useRef } from 'react';

// component
import MusicPlayer from 'components/Beathub/MusicPlayer';
import { ProfileImage } from 'components/atoms';
import AudioPlayer from 'components/Beathub/AudioPlayer';

// types
import { AudioInfo } from 'types';

// libraries


// styles
import {
  Divider, Chip, Avatar, CardMedia,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  IconButton, Tooltip
} from '@mui/material';

import ArrowRight from '@mui/icons-material/ArrowRight';
import MusicNote from '@mui/icons-material/MusicNote';
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

  // 플레이어를 열고 닫음
  const openPlayer = () => {
    isPlayerOn
      ? setIsPlayerOn(false)
      : setIsPlayerOn(true)
  }
  
  return (
    <Wrapper>
      <Chip icon={<Avatar alt="instrument" src={instrumentSrc} sx={{ width: 20, height: 20 }}/>}  variant="outlined" color="primary" label={AudioInfo.instrument} />
      <ListItem component="div" className="list-item">
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon>
            <CardMedia
              component="img"
              sx={{ width: 50, height: 50 }}
              image={AudioInfo.userInfo.imageUrl}
              alt="audio-profile"
            />
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
            <MusicNote />
            <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
          </IconButton>
        </Tooltip>
      </ListItem>
      {/* player */}
      {isPlayerOn &&
        <div>
        <MusicPlayer fileUrl={AudioInfo.fileUrl}/>
        </div>
      }
      <Divider />
    </Wrapper>
  );
}

export default AudioListItem;
