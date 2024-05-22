import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AdminLogin = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  // const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      // fullNameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
    console.log(message);
    setErrorMessage(message);

    // if there is some message exists which means some error is there during validation
    // then return code, dont go ahead to signin/signup
    if (message) return;

    // if data is valid then this message will be null
    //Signin /Sign Up
    if (!isSignInForm) {
      //Sign up Logic
      // firebase api for signup
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="flex justify-between">
      <div className="absolute z-10 text-3xl font-bold p-6 m-3">
        <h1>Admin login</h1>
      </div>
      <div className="absolute">
        <img
          src="https://unsplash.com/photos/zA7I5BtFbvw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEzNDc4NDcwfA&force=true"
          alt="backgrn-login"
        />
      </div>
      {/* // Using 'mx-auto' and 'right-0' to horizontally center an element and
      align it to the right. 
      // Using mx-auto along with right-0 and left-0 to
      horizontally center an element. */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            // ref={fullNameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to our website? Sign up Now"
            : "Already a User? Sign in Now"}
        </p>
        <p className="py-1 cursor-pointer">Not able to login? Contact Us!</p>
      </form>
    </div>
  );
};

export default AdminLogin;
