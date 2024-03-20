import { useSelector } from "react-redux";

const Browse = () => {
    const user = useSelector((store) => store?.user);
    // const handleSignOut = () => {
    //     signOut(auth)
    //       .then(() => {
    
    //       })
    //       .catch((error) => {
    //         // An error happened.
    //         navigate("/error");
    //       });
    //   };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-52 m-5"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />
          <button
            className="text-white font-bold pl-4 pb-6"
            // onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Browse;
