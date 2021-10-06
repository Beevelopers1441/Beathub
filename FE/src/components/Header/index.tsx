import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { scrollHeader } from 'utils/header';

// component
import { ProfileImage } from 'components/atoms';
import HeaderSearch from './HeaderSearch';

// actions 
import { logoutAction } from 'modules/user/actions';

// styles
// import { Notifications } from '@mui/icons-material';
import Wrapper from './styles';
import defaultProfileImg from 'assets/constants/defaultProfileImg.png';
import logo from 'assets/svgs/logo.svg';

function Header(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();

  // constructor
  useEffect(() => {
    scrollHeader();
  }, []);

  const handleRouting = (path: string) => {
    history.push(path)
  }

  // 현재 로그인한 유저의 아이디, 프로필 사진
  const { id, imageUrl } = useSelector((state: any) => state.user.userInfo)
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn)

  // 기본 프로필 이미지 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = defaultProfileImg;
  }

  const onClickLogout = () => {
    dispatch(logoutAction());
    alert('로그아웃 되었습니다.')
    history.push('/login')
  }

  const onClickLogin = () => {
    history.push('/login')
  }

  return (
    <Wrapper>
      <div className="header-container">
        <div className="left-container">
          <div onClick={() => handleRouting('/')} className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <ul>
            <li onClick={() => handleRouting('/Beathub')}>Beathub</li>
            <li onClick={() => handleRouting('/Community')}>Community</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="right-container">
          <div className="right-sub-container search-container">
            <HeaderSearch />

          </div>
          {/* <div className="right-sub-container">
            <Notifications />
          </div> */}
          <div>
            {isLoggedIn
              ? 
              <button className="logout-btn">
                <div className="logout-btn-letter" onClick={onClickLogout}>logout</div>
              </button>
              : 
              <button className="logout-btn">
                <div className="logout-btn-letter" onClick={onClickLogin}>login</div>
              </button>
            }
          </div>
          <div className="profile-container">
          {isLoggedIn
              ? 
              <Link to={`/profile/${id}`} className="text-decoration-none text-dark">
                <ProfileImage url={imageUrl} handleImgError={handleImgError} className="user-image"/>
              </Link>
              : 
              <Link to={`/login`} className="text-decoration-none text-dark">
                <ProfileImage url={imageUrl} handleImgError={handleImgError} className="user-image"/>
              </Link>
            }
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;