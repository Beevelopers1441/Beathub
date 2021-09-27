import React from 'react'
import { useHistory } from 'react-router-dom';

// libraries
import { GoogleLogin } from 'react-google-login';

// types
import { UserInfo } from 'types';

// apis
import { socialLogin, getUserInfo, isFirst } from 'lib/api/auth/socialLogin'

// redux
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { getTokenAction, getUserInfoAction } from 'modules/user/actions'

interface Props {
  token?: string;
}


export const GoogleAuthBtn = (props:Props): React.ReactElement => {
// export const GoogleAuthBtn = ({ history }: RouteComponentProps) => {

  const dispatch = useDispatch();
  const history = useHistory();

  // redux store 조회
  // const user = useSelector((state: any) => state.user);

  const onSuccess = (result: any) => {

    // userInfo로 소셜로그인 간 양식 통일
    const userInfo = (result: any): UserInfo => {
      return (
        {
          "email": result.profileObj.email,
          "profileImageUrl": result.profileObj.imageUrl,
          "userId": result.profileObj.googleId,
          "userName": result.profileObj.name,
        }
      )
    }

    // 토큰 요청
    socialLogin(userInfo(result)).then(res => {

      const token = res.data

      // 토큰 리덕스에 저장
      const updateToken = (token: string) => dispatch(getTokenAction({ token: token }))
      updateToken(token)

      // 정보가 있는 유저인지 확인
      isFirst(token).then(res => {
        const isfirst = res.data
  
        //  토큰으로 사용자 정보 요청 => 사용자 정보 리덕스에 저장
        getUserInfo(token).then(res => {
          const userInfo = res.data
          const updateUserInfo = (userInfo: object) => dispatch(getUserInfoAction({ userinfo: userInfo }))
          updateUserInfo(userInfo)
        }).then(res => {

          // 처음 오는 유저면 추가 정보 입력 안내 페이지
          if (isfirst === true) {
            history.push('/signup')
          // 아니면 메인
          } else {
            history.push('/') 
          }
          
        })

        
      })
    })
  }
  
  const onFailure = (result: any) => {
    console.log(result)
  }

  return (
    <GoogleLogin
      clientId="618018607779-hhtaqof2ufm6ultf5baei97pthlm7d6q.apps.googleusercontent.com"
      // 커스텀 버튼
      render={renderProps => (
        <button className="btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled}>구글로 로그인 하기</button>
      )}
      onSuccess={result => (onSuccess(result))}
      onFailure={result => (onFailure(result))}
      cookiePolicy={'single_host_origin'}
    />
  )
};