import React from 'react';

// component
import { ProfileImage } from 'components/atoms';

// utils
import { setDateFormat } from 'utils/time';

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
          <ProfileImage 
            url={comment.author.imageUrl}
            className={'user-image'}  
          />
          <div className="name-time-container">
            <p className="user-name">{comment.author.name}</p>
            <p className="time">{setDateFormat(comment.createTime)}</p>
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
