import NaverLogin from 'react-login-by-naver';

// types
import { UserInfo } from 'types';

// apis
import { socialLogin } from 'lib/api/auth/socialLogin'

const onSuccess = (result: any) => {

  // userInfo로 소셜로그인 간 양식 통일
  const userInfo = (result: any): UserInfo => {
    return (
      {
        email: result.email,
        profileImageUrl: result.profile_image,
        userId: result.id,
        userName: result.nickname,
      }
    )
  }

  // 로그인 요청
  socialLogin(userInfo(result))
}

const onFailure = (result: any) => {
  console.log(result)
}

// kakao에만 있던 기능
// const onLogout = (result: string | null | undefined) => {
//   console.log(result)
// }

export const NaverAuthBtn = () => (
  <NaverLogin 
    clientId="jHT5HdEtOh3_p63OeyVr"
    callbackUrl="http://localhost:3000/login"
    render={(props) => <button className="btn-naver" onClick={props.onClick}>네이버로 로그인 하기</button>}
    onSuccess={(result) => onSuccess(result)}
    onFailure={() => console.error()}
  />
);