import React, {useState, useRef} from 'react';

// types

// libraries
import { makeStyles } from '@mui/styles';
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

  const useStyles = makeStyles(
    (theme: any) => {
      return {
        root: {
          [theme.breakpoints.down('sm')]: {
            width: '100%'
          },
        },
        loopIcon: {
          color: '#7B42F6',
          '&.selected': {
            color: '#9569f5'
          },
          '&:hover': {
            color: '#a883f7'
          },
          [theme.breakpoints.down('sm')]: {
            display: 'none'
          }
        },
        playIcon: {
          color: '#f50057',
          '&:hover': {
            color: '#ff4081'
          }
        },
        volumeIcon: {
          color: 'rgba(20, 241, 217, 0.54)'
        },
        volumeSlider: {
          color: 'black'
        },
        progressTime: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        mainSlider: {
          color: '#7B42F6',
          '& .MuiSlider-rail': {
            color: '#a883f7'
          },
          '& .MuiSlider-track': {
            color: '#a883f7'
          },
          '& .MuiSlider-thumb': {
            color: '#a883f7'
          }
        }
      }
    });


  return (
    <Wrapper>
      <ThemeProvider theme={playerTheme}>
        <AudioPlayer src={fileUrl} useStyles={useStyles}/>
      </ThemeProvider>
    </Wrapper>
  );
}

export default MusicPlayer;
