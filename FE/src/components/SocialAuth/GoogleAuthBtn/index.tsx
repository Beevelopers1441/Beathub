import GoogleLogin from 'react-google-login';

const onSuccess = (result: object) => {
  console.log(result)
}

const onFailure = (result: any) => {
  console.log(result)
}

// const onLogout = (result: string | null | undefined) => {
//   console.log(result)
// }

export const GoogleAuthBtn = () => {
  return (
    <GoogleLogin
      clientId="618018607779-hhtaqof2ufm6ultf5baei97pthlm7d6q.apps.googleusercontent.com"
      render={renderProps => (
        <button className="btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      )}
      buttonText="Login"
      onSuccess={result => (onSuccess(result))}
      onFailure={result => (onFailure(result))}
      // onLogout={result => (onLogout(result))}
      cookiePolicy={'single_host_origin'}
    />
  )
};