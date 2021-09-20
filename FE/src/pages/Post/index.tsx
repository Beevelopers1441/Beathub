import React from 'react';
import { useParams } from 'react-router-dom';

// styles
import Wrapper from './styles';

interface Props {
  
}

interface ParamTypes {
  postId: string;
}

function Community(props: Props): React.ReactElement {
  const { postId } = useParams<ParamTypes>();

  return (
    <Wrapper>
      {postId}
    </Wrapper>
  );
};

export default Community;
