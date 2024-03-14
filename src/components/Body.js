import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])


 return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
 );
};

export default Body;