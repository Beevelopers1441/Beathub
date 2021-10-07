import React from 'react';
import Wrapper from './styles';

import { Bucket } from 'types';
import MusicItem from './MusicItem';

interface Props {
  buckets: Bucket[]
}

function Musics({buckets}: Props) {

  const renderList = (): JSX.Element[] => {
    return buckets.map((bucket, index) => {
      return(
        <MusicItem bucket={bucket} key={index}></MusicItem>
      )
    })
  }

  return(
    <Wrapper>
        {buckets && buckets.length >= 1
          ?
          <div className="container">
            {renderList()}
          </div>
          : 
          <div className="audios-empty">
            아직 음악이 없습니다:(
          </div>
        }
    </Wrapper>
  )
}

export default Musics;