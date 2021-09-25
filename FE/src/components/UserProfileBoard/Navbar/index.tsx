import React from 'react';
import { Link } from 'react-router-dom';

import Musics from '../Musics';
import Feeds from '../Feeds';
import Collections from '../Collections';

import Wrapper from './styles';


function Navbar() {


  return(
    <Wrapper>
        <ul>
          <li>
            <Link to={`/profile/2/musics`}>음악</Link>
          </li>
          <li>
            <Link to={`/profile/2/feeds`}>피드</Link>
          </li>
          <li>
            <Link to={`/profile/2/collections`}>컬렉션</Link>
          </li>
        </ul>

      </Wrapper>
  );
}

export default Navbar;