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
          color: '#000000',
          '&.selected': {
            color: '#0921a9'
          },
          '&:hover': {
            color: '#7986cb'
          },
          [theme.breakpoints.down('sm')]: {
            display: 'none'
          }
        },
        downloadLink: {
          color: '#000000',
          '&:hover': {
            color: '#7B42F6'
          }
        },
        playIcon: {
          color: '#000000',
          '&:hover': {
            color: '#7B42F6'
          }
        },
        pauseIcon: {
          color: '#000000',
          '&:hover': {
            color: '#7B42F6'
          }
        },
        volumeIcon: {
          color: '#000000',
          '&:hover': {
            color: '#FF6780'
          }
        },
        volumeSlider: {
          color: '#14F1D9'
        },
        progressTime: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        mainSlider: {
          color: '#000000',
          '& .MuiSlider-rail': {
            color: '#7986cb'
          },
          '& .MuiSlider-track': {
            color: '#7B42F6'
          },
          '& .MuiSlider-thumb': {
            color: '#000000',
            '&:hover': {
              color: '#56CCF2'
            },
          }
        }
      }
    });


  return (
    <Wrapper>
      <ThemeProvider theme={playerTheme}>
        <AudioPlayer src={fileUrl} useStyles={useStyles} download={true} spacing={2} autoplay={true}/>
      </ThemeProvider>
    </Wrapper>
  );
}

export default MusicPlayer;
