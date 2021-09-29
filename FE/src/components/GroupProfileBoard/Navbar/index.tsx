import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs'; // url의 쿼리를 쉽게 추출해낼 수 있게 해주는 모듈

import Musics from '../Musics';
import Feeds from '../Feeds';
import Intro from '../Intro';

import Wrapper from './styles';


function Navbar() {

  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<string>("musics")

  // 탭을 바꿔주는 부분
  useEffect(() => {
    let tabQuery = qs.parse(location.search, {
      // 문자열 맨 앞의 ?를 생략
      ignoreQueryPrefix: true
    });
    let tabName = String(tabQuery.tab)
    setCurrentTab(tabName)
  }, [location])

  // 탭을 글씨 강조 바꿔주는 부분
  useEffect(() => {
    if (currentTab !== null){
        var inactiveTab = document.querySelectorAll(".tab-title, .tab-title-active")
        var activeTab = document.getElementById(currentTab)
        if (inactiveTab) {
          for(var i = 0; i < inactiveTab.length; i++){
            inactiveTab.item(i).setAttribute('class', 'tab-title')
          }
        }
      if (activeTab) {activeTab.setAttribute('class', 'tab-title-active')}
      }
  }, [currentTab])


  return(
    <Wrapper>
      <div className="tab-container">
        <div><Link to={`/group-profile/2/?tab=musics`} className="tab-title-active" id="musics">음악</Link></div>
        <div><Link to={`/group-profile/2/?tab=feeds`} className="tab-title" id="feeds">피드</Link></div>
        <div><Link to={`/group-profile/2/?tab=intro`} className="tab-title" id="intro">소개</Link></div>
      </div>
      <div className="nav-divider"></div>
      <div>
        {currentTab === "musics" ?
          <Musics></Musics>
          : currentTab === "feeds" ?
          <Feeds></Feeds>
          : currentTab === "intro" ?
          <Intro></Intro>
          :
          <Musics></Musics>
        }
      </div>
      </Wrapper>
  );
}

export default Navbar;