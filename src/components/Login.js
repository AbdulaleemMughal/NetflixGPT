import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
   //Validate the form
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/c9fbccf7-aa73-4c4e-a129-0349c8ef655b/PK-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-52 bg-black mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="pb-3 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="First Name"
            className="my-2 p-3 border border-solid border-black w-full rounded-sm bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="my-2 p-3 border border-solid border-black w-full rounded-sm bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-3 border border-solid border-black w-full rounded-sm bg-gray-500"
        />
        <p className="text-red-500 font-bold py-3">{errorMessage}</p>
        <button
          className="my-6 pt-2 pb-2 border border-solid border-black bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered. Sign In now....."}
        </p>
      </form>
    </>
  );
};

export default Login;