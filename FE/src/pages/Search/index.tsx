import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// components
import { ProfileImage } from 'components/atoms';

// apis
import { getSearchResult } from 'lib/api/search';

// types
import { IBasicUser, Band } from 'types';

// styles
import defaultProfileImg from 'assets/constants/defaultProfileImg.png';
import { Container, Tooltip } from '@mui/material';
import Wrapper from './styles';

interface ISearchResult {
  userList: IBasicUser[];
  bandList: Band[];
  audioList: any;
  bucketList: any;
}

function Search(): React.ReactElement {
  const [userList, setUserList] = useState<IBasicUser[]>([]);
  const [bandList, setBandList] = useState<Band[]>([]);

  const { state } = useLocation<any>();
  const history = useHistory();

  // state effect
  useEffect(() => {
    const value = state.searchValue;
    getSearchResult(value)
      .then(res => {
        const _data: ISearchResult = res.data;
        const newUserList = _data.userList;
        const newBandList = _data.bandList;
        setUserList(newUserList);
        setBandList(newBandList);
      });
  }, [state]);

  // user profile 클릭 시 프로필 이동
  const handleProfile = (id: number) => {
    history.push(`/profile/${id}`);
  };

  // 밴드 profile 클릭 시 프로필 이동
  const handleBandProfile = (id: number) => {
    history.push(`/group-profile/${id}`);
  }

  // 기본 프로필 이미지 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = defaultProfileImg;
  };

  return (
    <Wrapper>
      <Container className="container">
        <div className="grid-container">
          <p className="title">유저 정보</p>
          <div className="content-container">
            { userList ? (
              userList.map(user => {
                return (
                  <Tooltip 
                    title={user.name}
                    arrow
                    placement="top"
                    className="name-tooltip"
                    key={user.id}
                  >
                    <div onClick={() => handleProfile(user.id)}>
                        <ProfileImage url={user.imageUrl} handleImgError={handleImgError} className={'user-image'} />
                    </div>
                  </Tooltip>
                )
              })
            ) : (
              <p>유저 검색 결과가 없습니다.</p>
            )}
          </div>
        </div>
        <div className="grid-container">
          <p className="title">밴드 정보</p>
          <div className="content-container">
            { bandList ? (
              bandList.map(band => {
                return (
                  <Tooltip 
                    title={band.name}
                    arrow
                    placement="top"
                    className="name-tooltip"
                    key={band.id}
                  >
                    <div onClick={() => handleBandProfile(band.id)}>
                      <ProfileImage url={band.imageUrl} handleImgError={handleImgError} className={'user-image'} />
                    </div>
                  </Tooltip>
                )
              })
            ) : (
              <p>밴드 검색 결과가 없습니다.</p>
            )}
          </div>
        </div>
        
      </Container>
    </Wrapper>
  );
}

export default Search;