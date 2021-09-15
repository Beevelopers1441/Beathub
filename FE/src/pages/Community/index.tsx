import { FC } from 'react';

import Wrapper from './styles';
import { Chat } from 'components';

interface Props {}

const Community: FC<Props> = props => {
  return (
    <Wrapper>
      Community Component
      <Chat />
    </Wrapper>
  );
};

export default Community;
