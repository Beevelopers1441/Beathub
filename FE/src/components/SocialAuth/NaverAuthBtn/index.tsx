import NaverLogin from 'react-login-by-naver';

// types
import { UserInfo, ProfileObj } from 'types';

// apis
import { socialLogin } from 'lib/api/auth/socialLogin'

const onSuccess = (result: any) => {

  // userInfo로 소셜로그인 간 양식 통일
  const userInfo = (result: any): UserInfo => {
    return (
      {
        email: result.email,
        nickname: result.nickname,
        id: result.id,
        imageUrl: result.profile_image,
      }
    )
  }

  // 로그인 요청
  socialLogin(userInfo(result))
}

const onFail = (result: any) => {
  console.log(result)
}

const onLogout = (result: string | null | undefined) => {
  console.log(result)
}

export const NaverAuthBtn = () => (
  <NaverLogin 
    clientId="jHT5HdEtOh3_p63OeyVr"
    callbackUrl="http://localhost:3000/login"
    render={(props) => <button className="btn-naver" onClick={props.onClick}>네이버로 로그인 하기</button>}
    onSuccess={(result) => onSuccess(result)}
    onFailure={() => console.error()}
  />
);