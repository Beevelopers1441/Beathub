import React from 'react';
import Wrapper from './styles';

// assets
import vocal from 'assets/svgs/instruments/vocal-solid.svg';
import drum from 'assets/svgs/instruments/drum-solid.svg';
import keyboard from 'assets/svgs/instruments/keyboard-solid.svg';
import bass from 'assets/svgs/instruments/bass-solid.svg';
import electricGuitar from 'assets/svgs/instruments/electric-guitar-solid.svg';
import acousticGuitar from 'assets/svgs/instruments/acoustic-guitar-solid.svg';
import etc from 'assets/svgs/instruments/etc-solid.svg';

//styles
import { Avatar, Chip } from '@mui/material';

const instrumentUrl: {[key: string]: string} = {
  "보컬": vocal,
  "키보드": keyboard,
  "일렉기타": electricGuitar,
  "어쿠스틱기타": acousticGuitar,
  "베이스": bass,
  "드럼": drum,
  "기타(etc)": etc,
}

interface Props {
  inst: string;
}

const InstItem: React.FC<Props> = ({ inst }) => {
  // 악기 아이콘
  const instrumentSrc = instrumentUrl[inst]

  return(
    <Wrapper>
      <Chip className="instrument-chip" icon={<Avatar alt="instrument" src={instrumentSrc} sx={{ width: 20, height: 20 }}/>} label={inst} />
    </Wrapper>
  )
}

export default InstItem;