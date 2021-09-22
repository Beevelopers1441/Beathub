import KakaoLogin from 'react-kakao-login';

const onSuccess = (result: object) => {
  console.log(result)
}

const onFail = (result: any) => {
  console.log(result)
}

const onLogout = (result: string | null | undefined) => {
  console.log(result)
}

export const KakaoAuthBtn = () => (
  <KakaoLogin
    token={"65d4fbcaf3b1171ef38ce2f69cf575ab"}
    render={renderProps => (
      <button className="btn-kakao" onClick={renderProps.onClick} >카카오로 로그인 하기</button>
    )}
    onSuccess={result => (onSuccess(result))}
    onFail={result => (onFail(result))}
    onLogout={result => (onLogout(result))}
  >
    <div></div>
  </KakaoLogin>
);