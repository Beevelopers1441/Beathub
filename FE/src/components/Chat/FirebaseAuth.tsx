import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// firebase
import { auth } from 'utils/Firebase/firebaseConfig';

function FirebaseAuth(): React.ReactElement {
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    if (!user.token) return
    let newEmail = user.userInfo.name.split(' ').join('')
    newEmail = `${newEmail}@gmail.com`
    const email = newEmail; // need to change
    auth.createUserWithEmailAndPassword(email, email)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {}
        console.log('계정 생성 및 로그인 성공')
      })
      .catch((error) => {
        console.log('이미 존재하는 이메일')
        console.log(error);

        // login
        auth.signInWithEmailAndPassword(email, email)
          .then((userCredential) => {
            const user = userCredential.user;
            if (user) {}
            console.log('login 성공')
            // ...
          })
          .catch((error) => {
            console.log('errror while signing in');
            console.log(error);
          });
        // ..
      });

  }, [user]);

  return (
    <>
      firebase auth
    </>
  );
};

export default FirebaseAuth;