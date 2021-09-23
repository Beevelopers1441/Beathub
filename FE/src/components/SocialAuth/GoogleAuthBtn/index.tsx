import { GoogleLogin } from 'react-google-login';

// types
import { UserInfo, ProfileObj } from 'types';

// apis
import { socialLogin }  from 'lib/api/auth/socialLogin'
const onSuccess = (result: any) => {

  // userInfo로 소셜로그인 간 양식 통일
  const userInfo = (result: any): UserInfo => {
    return (
      {
        email: result.profileObj.email,
        nickname: result.profileObj.name,
        id: result.profileObj.googleId,
        imageUrl: result.profileObj.imageUrl,
      }
    )

  }
  socialLogin(userInfo(result))

}

const onFailure = (result: any) => {
  console.log(result)
}

export const GoogleAuthBtn = () => {
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