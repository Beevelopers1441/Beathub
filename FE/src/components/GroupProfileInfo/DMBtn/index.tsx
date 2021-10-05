import React from 'react';
import { useDispatch } from 'react-redux';
import { openChatRoomAction, forcedOpenAction, setCountpartUserAction } from 'modules/chat/actions';

// apis
import { getGroupProfile } from 'lib/api/groupProfile';

import Wrapper from './styles';
import dm from 'assets/svgs/dm.svg'

interface Props {
  id: number;
};

function DMBtn({ id }: Props): React.ReactElement {
  const dispatch = useDispatch();
  
  const handleChatOpen = () => {
    dispatch(forcedOpenAction());
    dispatch(openChatRoomAction());

    // get user profile infos
    getGroupProfile(id)
      .then(res => {
        const data = res.data.leader;
        const _id = data.id;
        const _imageUrl = data.imageUrl;
        const _name = data.name;
        
        const newCountpartUser = {
          id: _id,
          imageUrl: _imageUrl,
          name: _name,
        };
        dispatch(setCountpartUserAction({ userInfo: newCountpartUser }));
      });
  };
  return(
    <Wrapper>
      <button onClick={handleChatOpen} className="dm-btn">
        <img className="dm-btn-letter" src={dm} alt="dm" />
      </button>
    </Wrapper>
  )
}

export default DMBtn;