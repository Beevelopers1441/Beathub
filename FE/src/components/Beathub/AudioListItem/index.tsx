import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// types
import { Audio } from 'types';

// styles
import {
  Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  IconButton, Tooltip
} from '@mui/material';

import ArrowRight from '@mui/icons-material/ArrowRight';
import Settings from '@mui/icons-material/Settings';
import Wrapper from './styles';

interface Props {
  Audio: Audio;
}

function AudioListItem({ Audio }: Props): React.ReactElement {
  return (
    <Wrapper>
      <Divider />
      <ListItem component="div" disablePadding>
        <ListItemButton sx={{ height: 56 }}>
          <ListItemIcon>
            <ProfileImage url={Audio.userInfo.imageUrl} />       
          </ListItemIcon>
          <ListItemText
            primary="Project Overview"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'medium',
              variant: 'body2',
            }}
            secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
          />
          <ListItemText
            primary="user-name"
            primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'medium',
              variant: 'body2',
            }}
            secondary="time"
          />
        </ListItemButton>
        <Tooltip title="Project Settings">
          <IconButton
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
      <Divider />
    </Wrapper>
  );
}

export default AudioListItem;
