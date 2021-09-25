import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';

// libraries
import { GoogleLogin } from 'react-google-login';

// types
import { UserInfo } from 'types';

// apis
import { socialLogin } from 'lib/api/auth/socialLogin'

// redux
import { useDispatch } from 'react-redux';
import { getTokenAction } from 'modules/user/actions'

interface Props {
  token?: string;
}


export const GoogleAuthBtn = (props:Props, { history }:RouteComponentProps): React.ReactElement => {
// export const GoogleAuthBtn = ({ history }: RouteComponentProps) => {

  const dispatch = useDispatch();

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

    // 토큰 요청 => 토큰 리덕스에 저장
    socialLogin(userInfo(result)).then(res => {
      console.log(res)
      // const updateToken = (token: string) => dispatch(getTokenAction({ token: token }))
      
      // if문 작성
      // updateToken(token)
      // history.push('/')
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

// 타입스크립트 에러 발생
// export default withRouter(GoogleAuthBtn)