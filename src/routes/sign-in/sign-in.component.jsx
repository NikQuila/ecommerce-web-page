// import { async } from "@firebase/util";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  //   auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div>
      <h1> Sign In PAGE BROOO</h1>
      <button onClick={logGoogleUser}> Sign In With Google</button>
      {/* <button onClick={signInWithGoogleRedirect}> Sign In With Redirect</button> */}
    </div>
  );
};

export default SignIn;
