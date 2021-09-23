import NaverLogin from 'react-login-by-naver';

const onSuccess = (result: any) => {
  console.log('성공')
  const userInfo = {
    email: result.email,
    nickname: result.nickname,
    id: result.id,
    imageUrl: result.profile_image,
  }
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