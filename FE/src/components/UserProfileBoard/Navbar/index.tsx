import React from 'react';
import Musics from '../Collections';
import Feeds from '../Feeds';
import Collections from '../Collections';

import Wrapper from './styles';


function Navbar() {
  return(
    <Wrapper>
      <Musics></Musics>
      <Feeds></Feeds>
      <Collections></Collections>
    </Wrapper>
  )
}

export default Navbar;