import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// types
import { IComment } from 'types';

// styles
import { Grid } from '@mui/material';
import Wrapper from './styles';

interface Props {
  comment: IComment;
}

function Comment({ comment }: Props): React.ReactElement {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={3} className="user-info-container">
          <ProfileImage url={comment.author.imageUrl} />
          <div className="name-time-container">
            <p className="user-name">{comment.author.name}</p>
            <p className="time">{comment.createdTime}</p>
          </div>
        </Grid>
        <Grid item xs={9}>
          <p>{comment.content}</p>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Comment;
