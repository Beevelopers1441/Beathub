import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

import Musics from '../Musics';
import Feeds from '../Feeds';
import Collections from '../Collections';

import Wrapper from './styles';


function Navbar() {

  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<string>("musics")

  useEffect(() => {
    let tabQuery = qs.parse(location.search, {
      // 문자열 맨 앞의 ?를 생략
      ignoreQueryPrefix: true
    });

    let tabName = String(tabQuery.tab)

    setCurrentTab(tabName)

  }, [location])


  return(
    <Wrapper>
      <div>
        <div><Link to={`/profile/2/?tab=musics`}>음악</Link></div>
        <div><Link to={`/profile/2/?tab=feeds`}>피드</Link></div>
        <div><Link to={`/profile/2/?tab=collections`}>컬렉션</Link></div>
      </div>
      <div>
        {currentTab === "musics" ?
          <Musics></Musics>
          : currentTab === "feeds" ?
          <Feeds></Feeds>
          : currentTab === "collections" ?
          <Collections></Collections>
          :
          <Musics></Musics>
        }
      </div>
      </Wrapper>
  );
}

export default Navbar;