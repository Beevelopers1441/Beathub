import { useHistory } from 'react-router-dom';

// libraries
import NaverLogin from 'react-login-by-naver';

// types
import { UserInfo } from 'types';

// apis
import { socialLogin, getUserInfo, isFirst } from 'lib/api/auth/socialLogin'

// redux
import { useDispatch } from 'react-redux';
import { getTokenAction, getUserInfoAction } from 'modules/user/actions'

interface Props {
  token?: string;
}


export const NaverAuthBtn = (): React.ReactElement => {

  const dispatch = useDispatch();
  const history = useHistory();

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
      // 토큰 요청
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
  
  // kakao에만 있던 기능
  // const onLogout = (result: string | null | undefined) => {
  //   console.log(result)
  // }
  
  return (
    <NaverLogin
      clientId="jHT5HdEtOh3_p63OeyVr"
      callbackUrl="http://localhost:3000/login"
      render={(props) => <button className="btn-naver" onClick={props.onClick}>네이버로 로그인 하기</button>}
      onSuccess={(result) => onSuccess(result)}
      onFailure={() => console.error()}
    />
  )
};