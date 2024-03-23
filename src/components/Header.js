import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Here , we use useEffect for redirecting the browse page when the user is logged in
  // if the user is not logged in it will not redirect it to the browse page
  // we have to unsubscribe the onAuthStateChanged callback after it is mounted. we can unsubscribe it by using the firebase priority unsubscribe function

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe to the onAuthStateChanged callback.
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO_URL} alt="logo" className="w-52 m-5" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />
          <button
            className="text-white font-bold pl-4 pb-6"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
