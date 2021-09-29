import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { scrollHeader } from 'utils/header';

// component
import { ProfileImage } from 'components/atoms';
import HeaderSearch from './HeaderSearch';


// styles
import { Notifications } from '@mui/icons-material';
import Wrapper from './styles';

function Header(): React.ReactElement {
  const history = useHistory();

  // constructor
  useEffect(() => {
    scrollHeader();
  }, []);

  const handleRouting = (path: string) => {
    history.push(path)
  }

  const { userId } = useSelector((state: any) => state.user.userInfo.Id)

  return (
    <Wrapper>
      <div className="header-container">
        <div className="left-container">
          <div onClick={() => handleRouting('/')} className="logo-container">
            Logo
          </div>
          <ul>
            <li>Beathub</li>
            <li onClick={() => handleRouting('/Community')}>Community</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="right-container">
          <div className="right-sub-container search-container">
            <HeaderSearch />

          </div>
          <div className="right-sub-container">
            <Notifications />
          </div>
          <div className="profile-container">
            {/* <Link to={`/profile/${userId}`} className="text-decoration-none text-dark"> */}
              <ProfileImage url={"https://api.thecatapi.com/v1/images/search"} />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;