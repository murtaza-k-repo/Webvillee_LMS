import { createContext, useContext, useEffect } from "react";
import {
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const dispatch = useDispatch();

  function logOut() {
    return signOut(auth);
  }

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      dispatch(setUser(currentuser));
    });

    return () => {
      unsubscribe();
    };

    //eslint-disable-next-line
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        logOut,
        setUpRecaptha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
