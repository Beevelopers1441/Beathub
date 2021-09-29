import React, { useEffect } from 'react';

// firebase
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

function FirebaseAuth(): React.ReactElement {

  useEffect(() => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, '10100sam@gmail.com', '10100sam@gmail.com')
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user)
          }
        })
      })
  }, []);

  return (
    <>
      firebase auth
    </>
  );
};

export default FirebaseAuth;