import React from 'react';
import Wrapper from './styles';

interface Props {
  isFollowing: boolean,
  onClickFollow: () => void;
  onClickUnfollow: () => void;
}

const FollowBtn: React.FC<Props> = ({ isFollowing, onClickFollow, onClickUnfollow }) => {

  return(
    <Wrapper>
      {isFollowing
        ?
        <button className="unfollow-btn" onClick={onClickUnfollow}>
          <div className="unfollow-btn-letter">Unfollow</div>
        </button>
        :
        <button className="follow-btn" onClick={onClickFollow}>
          <div className="follow-btn-letter">Follow</div>
        </button>
      }
    </Wrapper>
  )
}

export default FollowBtn;