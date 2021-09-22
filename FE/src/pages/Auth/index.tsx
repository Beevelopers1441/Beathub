import { FC } from 'react';
import SocialAuth from '../../components/SocialAuth'
import Wrapper from './styles';

const Auth: FC = () => {
  return (
    <Wrapper>
      <SocialAuth></SocialAuth>
    </Wrapper>
  );
};

export default Auth;
