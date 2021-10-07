import React from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from './styles';
import play from 'assets/svgs/beathub/play.svg';

import { Bucket } from 'types';

interface Props {
  bucket: Bucket
}


function MusicItem({bucket}: Props) {

  const history = useHistory();

  const onClickBucket = () => {
    history.push(`/beathub/${bucket.id}`);
  }
  
  return(
    <Wrapper onClick={onClickBucket}>
      <div className="title">{bucket.title}</div>
      <div className="intro">{bucket.introduction}</div>
      <div className="contributors">{bucket.contributors.length} contributors</div>
      <img src={play} alt="play-btn" className="play-svg"/>
    </Wrapper>
  )
}

export default MusicItem;