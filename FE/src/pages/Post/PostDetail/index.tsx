import React from 'react';
import { useParams } from 'react-router-dom';

// styles
import { Container } from '@mui/material';
import Wrapper from './styles';

interface Props {
  
}

interface ParamTypes {
  postId: string;
}

function PostDetail(props: Props): React.ReactElement {
  const { postId } = useParams<ParamTypes>();

  return (
    <Wrapper>
      <Container>
        {postId}
      </Container>
    </Wrapper>
  );
};

export default PostDetail;
